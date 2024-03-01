// src/components/Form.js

import React, { useState } from 'react';

const Form = () => {


    const [formData, setFormData] = useState({
        PartyA_name: '',
        PartyA_address: '',
        PartyA_phone: '',

        PartyB_name: '',
        PartyB_address: '',
        PartyB_phone: '',

        Recitals: '',
        Main_Provision: '',

        Payment_Amount: '',
        Payment_Due_date: '',
        Payment_Method: '',
        Termination_Conditions: '',
        Remedies: '',


    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    let jsonData;

    const handleSubmit = (e) => {
        e.preventDefault();
        // Convert formData to JSON
        jsonData = JSON.stringify(formData, null, 2);
        console.log(jsonData)
        // Create a Blob with JSON data
        const blob = new Blob([jsonData], { type: 'application/json' });
        // Create a URL for the Blob
        const url = URL.createObjectURL(blob);
        // Create a download link
        const a = document.createElement('a');
        a.href = url;
        a.download = 'formData.json'; // Set the desired file name
        a.click();
        // Revoke the URL to free up resources
        URL.revokeObjectURL(url);

    };
    const sendJsonData = () => {
        fetch('http://127.0.0.1:5000/api/receive-json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: jsonData,
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <div>
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>PartyA_name:</label>
                    <input
                        type="text"
                        name="nameA"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>PartyA_address:</label>
                    <input
                        type="text"
                        name="addressA"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>PartyA_phone:</label>
                    <input
                        type="text"
                        name="phoneA"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>PartyB_name:</label>
                    <input
                        type="text"
                        name="nameB"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>PartyB_address:</label>
                    <input
                        type="text"
                        name="addressB"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>PartyB_phone:</label>
                    <input
                        type="text"
                        name="phoneB"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Recitals:</label>
                    <input
                        type="text"
                        name="recitals"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Main_Provision:</label>
                    <input
                        type="text"
                        name="main_provision"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Payment_Amount:</label>
                    <input
                        type="text"
                        name="amount"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Payment_Due_date:</label>
                    <input
                        type="text"
                        name="duedate"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Payment_Method:</label>
                    <input
                        type="text"
                        name="method"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Termination_Conditions:</label>
                    <input
                        type="text"
                        name="terminationconditions"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Remedies:</label>
                    <input
                        type="text"
                        name="remedies"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <button onClick={sendJsonData} type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;
