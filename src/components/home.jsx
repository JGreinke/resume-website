import React from 'react'; 
import "./home.css"; 
import selfie from "./img/Selfie.jpeg"; 
import logo from "./img/dahliaName.png";
import {Link} from 'react-router-dom'; 

const Home = () => {
    return(
        <div className="home">
            
            <div className="header">
                <h1>Welcome, thanks for taking the time to visit my page!</h1>
            </div>
            <div className="main">
                <div className="selfie-container">
                    <img src={selfie} alt="selfie_image" className="selfie" />
                </div>
                <div className="logo-container">
                    <img src={logo} alt="logo" className="logo" />
                </div>
                <div className="site-entrance">
                    <h4>Select from the options below to get started:</h4>
                    <div className="site-options">
                        <Link className="site-option-link" to="/resume"><h4> I am here to explore your resume </h4></Link>
                    </div>
                    <div className="site-options">
                        <Link className="site-option-link" to="/tips_tricks"><h4>I am here to learn tips and tricks </h4></Link>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Home; 