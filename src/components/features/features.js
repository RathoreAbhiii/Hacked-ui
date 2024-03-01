import React, { useState, useRef } from 'react';
import './features.css';
import { RiBarChartFill, RiFilePaper2Line, RiShieldCheckLine, RiDatabaseLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Form from "./form1"
// import Form from './form1';

const Features = () => {

  const LawyerCards = () => {
    const newWindow = window.open('', '_blank', 'width=800,height=600');
    if (newWindow) {
      newWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Legal Graph Data</title>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          />
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f0f0f5;
              color: #333;
              margin: 0;
              padding: 0;
            }
            .profile-card {
              border: 1px solid #007BFF;
              border-radius: 5px;
              margin: 10px;
              padding: 10px;
              background-color: #E6E6FA;
            }
            .profile-image {
              width: 150px;
              height: 150px;
              object-fit: cover;
              border-radius: 50%;
              margin-right: 20px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Legal Graph Data</h1>
            <div class="row">
              <div class="col-md-4">
                <div class="profile-card">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                    alt="Profile 1"
                    class="profile-image"
                  />
                  <h2>Andy Horwitz</h2>
                  <p>Rating: 4.5</p>
                  <p>Address: New York</p>
                  <p>Experience: 5 years</p>
                  <p>Practice Area: Corporate Law</p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="profile-card">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                    alt="Profile 2"
                    class="profile-image"
                  />
                  <h2>John Doe</h2>
                  <p>Rating: 4.0</p>
                  <p>Address: Los Angeles</p>
                  <p>Experience: 6 years</p>
                  <p>Practice Area: Criminal Law</p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="profile-card">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                    alt="Profile 3"
                    class="profile-image"
                  />
                  <h2>Jane Smith</h2>
                  <p>Rating: 4.2</p>
                  <p>Address: Chicago</p>
                  <p>Experience: 4 years</p>
                  <p>Practice Area: Family Law</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">
                <div class="profile-card">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                    alt="Profile 4"
                    class="profile-image"
                  />
                  <h2>Alice Johnson</h2>
                  <p>Rating: 4.7</p>
                  <p>Address: San Francisco</p>
                  <p>Experience: 7 years</p>
                  <p>Practice Area: Real Estate Law</p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="profile-card">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                    alt="Profile 5"
                    class="profile-image"
                  />
                  <h2>David Brown</h2>
                  <p>Rating: 4.3</p>
                  <p>Address: Houston</p>
                  <p>Experience: 5 years</p>
                  <p>Practice Area: Intellectual Property Law</p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="profile-card">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                    alt="Profile 6"
                    class="profile-image"
                  />
                  <h2>Mary Johnson</h2>
                  <p>Rating: 4.4</p>
                  <p>Address: Miami</p>
                  <p>Experience: 6 years</p>
                  <p>Practice Area: Immigration Law</p>
                </div>
              </div>
            </div>
          </div>
        </body>
        </html>
      `);
      newWindow.document.close();
    } else {
      alert('Please allow pop-ups for this website to open the form.');
    }
  };

  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const show = () => {
    ref.current.showModal();
  }

  return (
    <div className="center-body" >
      <dialog ref={ref}>
        <Form />
      </dialog>
      
      <section onClick={() => show()} className="feature"  >
        <RiBarChartFill className="feature-icon" />
        <h3>Document Generation</h3>
        <p>Effortlessly create legally binding documents by providing basic information.</p>
      </section>

      <section className="feature">
        <RiFilePaper2Line className="feature-icon" />
        <h3>Legal Simplifier</h3>
        <p>Transform complex legal cases into easily understandable summaries.</p>
      </section>

      <section className="feature" >
        <RiShieldCheckLine className="feature-icon" />
        <h3>For lawyers</h3>
        <p>Empower legal professionals to showcase their expertise and connect with clients.</p>
      </section>

      <section className="feature" onClick={LawyerCards}>
        <RiDatabaseLine className="feature-icon" />
        <h3>Lawyer Profile</h3>
        <p>Discover and connect with qualified lawyers for legal consultations and services.</p>
      </section>
    </div>
  );
};

export default Features;