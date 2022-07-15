import React from 'react'
// styles
import "./footer.css"
// images
import logo from '../assets/images/trg-gfdl.png'

const Footer = () => {
    return (
        <div className="footer">
            <div className="first-section">
              <img className="img-responsive" src={logo} alt="logo" height={100} width={100}/>
            </div>
            <div className="second-section">
                <ul>
                    <li>FAQs</li>
                    <li>Press</li>
                    <li>Contact</li>
                    <li>
                      <a style={{textDecoration: 'none', color: "#171717"}} href="https://stylebyjm.com/" target="_blank" rel="noopener noreferrer">SBJM Footwear
                        </a></li>
                </ul>
            </div>
            <div className="third-section">
              <ul>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Web 3.0</li>
              </ul>
            </div>
        </div>
    )
}

export default Footer;