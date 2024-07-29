import React from "react";

function AlertForm({ isAlert, msg }) {
    return (
        isAlert ? <div className="alert alert-danger">{msg}</div> : null
    );
}

export default AlertForm;
