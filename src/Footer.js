import React from 'react';
import { Clock } from './klokke';
import'./Header';

function Footer() {
  return (
    <footer className="footer">
        <span class="footer-text">dhardha sd srh a dbareb arer</span>
         <div id="clock">
        <Clock/> 
      </div>
    </footer>
  );
}

export default Footer;