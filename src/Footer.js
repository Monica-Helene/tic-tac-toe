import React from 'react';
import { Clock } from './klokke';
import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">
        <span class="footer-text">2024, Monica Helene Nordvik Udø</span>
         <div id="clock">
        <Clock/> 
      </div>
    </footer>
  );
}

export default Footer;