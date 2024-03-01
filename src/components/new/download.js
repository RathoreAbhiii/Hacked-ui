import React, { useState } from 'react';
import axios from 'axios';

function PdfDownload() {
    const [pdfData, setPdfData] = useState(null);

    const fetchPdf = () => {
        axios
            .get('http://127.0.0.1:5000/get-pdf', { responseType: 'arraybuffer' })
            .then((response) => {
                const blob = new Blob([response.data], { type: 'application/pdf' });
                const url = window.URL.createObjectURL(blob);
                setPdfData(url);
            })
            .catch((error) => {
                console.error('Error fetching PDF:', error);
            });
    };

    return (
        <div style={{ position: "absolute", top: "60%", left: "45%" }}>
            <button style={{ color: "white", backgroundColor: "indigo", padding: "9px", borderRadius: "15%" }} onClick={fetchPdf}>Fetch PDF</button>
            {pdfData && (
                <iframe
                    title="PDF Viewer"
                    src={pdfData}
                    style={{ width: '100vw', height: '100vh' }}
                />
            )}
        </div>
    );
}

export default PdfDownload;