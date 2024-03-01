import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import './Header.css'; // Import your custom CSS for the header





class Header extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      imageURL: '',
    };

    this.handleUploadImage = this.handleUploadImage.bind(this);
  }


  handleUploadImage(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.append('file', this.uploadInput.files[0]);


    fetch('http://localhost:5000/upload', {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        this.setState({ imageURL: `http://localhost:5000/${body.file}` });
      });
    });
  }

  render() {
    return (
      <>

        <div>
          <AppBar position="static" className="header-appbar">
            <Toolbar>
              <div className="header-content">
                {/* Logo */}
                <div className="header-content-1">

                  <Typography variant="h6" component="div" className="logo">
                    LegalEase
                  </Typography>

                  {/* Navigation Links */}
                  <div className="nav-links">
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">About Us</Button>
                    <Button color="inherit">Contact Us</Button>
                  </div>
                </div>

                {/* Search Bar and Sign In Button */}
                <div className="search-signin">
                  <Button color="inherit">Sign In</Button>
                  <div className="search-bar">
                    <InputBase
                      placeholder="Search..."
                      className="search-input"
                    />
                    <IconButton color="inherit" aria-label="search" component="span">
                      <SearchIcon />
                    </IconButton>
                  </div>
                </div>
              </div>
            </Toolbar>
          </AppBar>

          {/* Section below the header with gradient background */}
          <div className="hero-section">
            <div className="hero-text">
              <Typography variant="h3" component="div" className="hero-heading">
                Automated Legal Analysis<br />for Everyone !
              </Typography>

            </div>
            <div className="file-upload">

            </div>
            <form onSubmit={this.handleUploadImage}>
              <div>
                <input style={{ color: "white", backgroundColor: "indigo", padding: "12px", borderRadius: "5%" }} ref={(ref) => { this.uploadInput = ref; }} type="file" />
              </div>

              <br />
              <div>
                <button style={{ color: "white", backgroundColor: "indigo", padding: "9px", borderRadius: "15%" }} >Upload</button>
              </div>

            </form>
          </div>



        </div>

      </>

    );
  }
}

export default Header;