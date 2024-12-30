import React, { useState } from 'react';
import { Client } from "@gradio/client";

const ModelPlay = () => {
    const [image, setImage] = useState(null);
    const [label, setLabel] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const predictWithGradio = async (file) => {
        try {
            const client = await Client.connect("Shaharas/scooter_motorcycle-classified");
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
            setError('Please upload an image file');
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
        <div className="container mx-auto p-4 max-w-2xl">
        <div className="bg-white rounded-lg shadow-lg p-6">
            <h1 className="text-2xl font-bold mb-4">Image Prediction App</h1>
            
            <div className="space-y-4">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <label htmlFor="photo" className="cursor-pointer">
                <div className="space-y-2">
                    <div className="text-gray-600">
                    Click to upload an image
                    </div>
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
                <div className="text-center py-4">
                <div className="inline-block border-t-4 border-b-4 border-blue-500 rounded-full w-8 h-8 animate-spin"></div>
                <p className="mt-2">Processing...</p>
                </div>
            )}

            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                {error}
                </div>
            )}

            {image && !loading && (
                <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">Uploaded Image</h3>
                <img 
                    src={image} 
                    alt="Preview" 
                    className="max-w-full h-auto rounded-lg mx-auto"
                    style={{ maxHeight: '300px' }} 
                />
                </div>
            )}

            {label && !loading && (
                <div className="text-center">
                <h3 className="text-lg font-semibold">Prediction Result:</h3>
                <p className="text-xl mt-2">{label}</p>
                </div>
            )}
            </div>
        </div>
        </div>
  );
};

export default ModelPlay;
