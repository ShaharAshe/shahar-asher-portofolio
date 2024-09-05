import { useState, useEffect } from "react";
import AlertForm from "./AlertForm";
import emailjs from "@emailjs/browser";
import ReactGA from "react-ga4";


function Contact() {
    useEffect(() => {
        ReactGA.send({
            hitType: "pageview",
            page: window.location.pathname,
        });
      }, []);

    const [contactInfo, setContactInfo] = useState({
        Name: "",
        Email: "",
        Title: "",
        Description: ""
    });
    const [alerts, setAlerts] = useState({
        Name: false,
        Email: false,
        Title: false,
        Description: false
    });
    const [emailSent, setEmailSent] = useState(false);
    
    const Name_pattern = /^[a-zA-Z ]+$/;
    const Email_pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    const Title_description = /^.+$/;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setContactInfo(values => ({ ...values, [name]: value }));
    };

    const handleAlert = (pattern, input, alertName) => {
        if (!pattern.test(input.trim())) {
            setAlerts(values => ({ ...values, [alertName]: true }));
            return true;
        } else {
            setAlerts(values => ({ ...values, [alertName]: false }));
            return false;
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let alert = { is_alert: false };

        // Handle alert for each input field
        alert.is_alert |= handleAlert(Name_pattern, contactInfo.Name, "Name");
        alert.is_alert |= handleAlert(Email_pattern, contactInfo.Email, "Email");
        alert.is_alert |= handleAlert(Title_description, contactInfo.Title, "Title");
        alert.is_alert |= handleAlert(Title_description, contactInfo.Description, "Description");

        if (!alert.is_alert) {
            const templateEmail = {
                from_name: contactInfo.Name,
                user_email: contactInfo.Email,
                subject: contactInfo.Title,
                message: contactInfo.Description,
            };

            emailjs.send(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLETE_ID,
                templateEmail,
                process.env.REACT_APP_PUBLIC_KEY
            ).then((res) => {
                setAlerts({
                    Name: false,
                    Email: false,
                    Title: false,
                    Description: false
                });
                setContactInfo({
                    Name: "",
                    Email: "",
                    Title: "",
                    Description: ""
                });
                setEmailSent(true);
            });
        }
    };

    return emailSent ? (
        <div className="projects-container">
            <div className="projects-header">
                <h1>Email sent successfully!</h1>
            </div>
        </div>
    ) : (
        <div className="projects-container">
            <div className="projects-header">
                <h1>Contact</h1>
            </div>
            <div className="projects-list">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="Name" className="form-label">* Your name:</label>
                    <input
                        id="Name"
                        type="text"
                        name="Name"
                        value={contactInfo.Name}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter Your name"
                    />
                </div>
                <AlertForm
                    isAlert={alerts.Name}
                    msg={<>First name must not be empty!<div>It can only contain letters (A-Z or a-z).</div></>}
                />
                <br />
                <div>
                    <label htmlFor="Email" className="form-label">* Your email:</label>
                    <input
                        id="Email"
                        type="text"
                        name="Email"
                        value={contactInfo.Email}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Your email"
                    />
                </div>
                <AlertForm
                    isAlert={alerts.Email}
                    msg={<>Email must not be empty and must be in valid format!</>}
                />
                <br />
                <div>
                    <label htmlFor="Title" className="form-label">* Title:</label>
                    <input
                        id="Title"
                        type="text"
                        name="Title"
                        value={contactInfo.Title}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Title"
                    />
                </div>
                <AlertForm
                    isAlert={alerts.Title}
                    msg={<>Title must not be empty!</>}
                />
                <br />
                <div>
                        <label htmlFor="Description" className="form-label">* Description:</label>
                        <textarea
                            id="Description"
                            name="Description"
                            value={contactInfo.Description}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Description"
                        />
                    </div>
                <AlertForm
                    isAlert={alerts.Description}
                    msg={<>Description must not be empty!</>}
                />
                <br />
                <button className="contact-button-sent" type="submit">Send</button>
                <button className="contact-button-reset" type="reset" onClick={() => {
                    setContactInfo({
                        Name: "",
                        Email: "",
                        Title: "",
                        Description: ""
                    });

                    setAlerts({
                        Name: false,
                        Email: false,
                        Title: false,
                        Description: false
                    });

                    setEmailSent(false);
                }}>Reset</button>
            </form>
            </div>
        </div>
    );
}

export default Contact;