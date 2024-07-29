import { useState } from "react";
import AlertForm from "./AlertForm"

function Contact(){
    const [contactInfo, setContactInfo] = useState({});
    const [alerts, setAlerts] = useState({isAlert:false});
    const Name_pattern = /^[a-zA-Z]+$/;

    const handleChange = (event) => {
        const name = event.target.name.trim();
        let value = event.target.value.trim().toLowerCase();

        setContactInfo(values => ({...values, [name]: value}))
    }

    const handleAlert = (pattern, Inputs, alertName, alert) => {
        if (!pattern.test(Inputs.trim())) {
            setAlerts(values => ({...values, [alertName]: true}));
            alert.is_alert = true;
        }
        else
            setAlerts(values => ({...values, [alertName]:false}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let alert = {is_alert:false};

        // Handle alert for each input field
        handleAlert(Name_pattern, contactInfo.Name, "Name", alert);

        // If no alerts and ingredients selected, proceed to order placement
        if(!alert.is_alert){
            // Send order data to the server
        }
    }

    return(
        <>
            <div className="home-container">
                <div className="intro-text">
                    <h1>Contact</h1>
                </div>
                <form method="post" action="#" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="firstName" className="form-label">* Your name:</label>
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
                    <AlertForm isAlert={alerts.tName}
                            msg={<>First name must not be empty!<div>It can only contain ONLY letters (A-Z or A-Z).</div></>}
                    />
                    <br/>
                    
                    <div>
                        <label htmlFor="phone" className="form-label">Your phone number:</label>
                        <input
                            id="phone"
                            type="tel"
                            name="phone"
                            value={contactInfo.phone || ""}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Your Phone Number"
                        />
                    </div>
                    <AlertForm isAlert={alerts.phone}
                                msg={<>Phone must not be empty!<div>It can only contain ONLY numbers (0-9).</div><div>You need to enter 10 numbers for a phone number.</div></>}
                                />
                    <br/>
                    <button variant="success" type="submit">Order</button>
                    <button variant="primary" type="reset">Reset</button>
                </form>
            </div>
        </>
    );
}

export default Contact;