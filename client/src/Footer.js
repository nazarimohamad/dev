import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="pt-4 d-flex flex-column">
          <div className="d-flex flex-column flex-md-row justify-content-around">
            <div>
              <h5>Important Links</h5>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/career">Career</Link></li>
                <li><Link to="/technology">Technology</Link></li>
              </ul>
            </div>
            <div>
              <h5>Company</h5>
              <ul>
                <li>+372 53599795</li>
                <li><a href = "mailto: hello@btekc.co">hello@bteks.co</a></li>
                <li>Tallinn, Estonia</li>
              </ul>
            </div>
          </div>
          <p className="text-center">Copyright @ 2020 <span className="text-info">Bteks</span></p>
        </div>
      </div>
    </div>
  );
};


export default Footer;