import React, { useState } from 'react';
import { Client } from "@gradio/client";
import { useLocation } from 'react-router-dom';
import '../css/style.css';

const ModelPlay = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const fetch_l = queryParams.get('fetch_l');

    const [image, setImage] = useState(null);
    const [label, setLabel] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const predictWithGradio = async (file) => {
        try {
            const client = await Client.connect(fetch_l);
            const result = await client.predict("/predict", {
                img: file,
            });
            return result.data[0]?.confidences?.[0]?.label || 'No label found';
        } catch (error) {
            console.error('Gradio prediction error:', error);
            throw error;
        }
    };

    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        setError(null);

        if (file) {
            if (!file.type.startsWith('image/')) {
                setError('Please upload a valid image file.');
                return;
            }

            try {
                setLoading(true);
                setImage(URL.createObjectURL(file));

                const predictedLabel = await predictWithGradio(file);
                setLabel(predictedLabel);
            } catch (error) {
                console.error('Error processing image:', error);
                setError('Error processing image. Please try again.');
                setImage(null);
                setLabel(null);
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <>
            {fetch_l ? (
                <div className="aii-container">
                    <div className="aii-card">
                        <h1 className="aii-title">Image Prediction App</h1>

                        <div className="aii-upload-section">
                            <label htmlFor="photo" className="aii-upload-label">
                                <div className="aii-upload-text">
                                    <p>Click to upload an image</p>
                                    <p className="aii-upload-instruction">(Accepted formats: .jpg, .png, etc.)</p>
                                </div>
                                <input
                                    id="photo"
                                    type="file"
                                    className="hidden"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                />
                            </label>
                        </div>

                        {loading && (
                            <div className="aii-loading-container">
                                <div className="aii-loading-spinner"></div>
                                <p>Processing...</p>
                            </div>
                        )}

                        {error && (
                            <div className="aii-error-message">
                                {error}
                            </div>
                        )}

                        {image && !loading && (
                            <div className="aii-image-preview">
                                <h3 className="aii-image-title">Uploaded Image</h3>
                                <img
                                    src={image}
                                    alt="Preview"
                                    className="aii-image-img"
                                />
                            </div>
                        )}

                        {label && !loading && (
                            <div className="aii-prediction-result">
                                <h3>Prediction Result:</h3>
                                <p>{label}</p>
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <div className="aii-error-container">
                    <p>There is a problem with the model. Please try again later.</p>
                </div>
            )}
        </>
    );
};

export default ModelPlay;
