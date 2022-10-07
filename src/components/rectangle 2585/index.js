import React from "react";
import "./rectangle.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-cards">
        <div className="footer-card-1">
          <div className="footer-card-1-header"></div>
          <div className="footer-card-1-components">
            <div className="footer-card-1-para">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor damet
              Velit officia consequat duis
            </div>
            <div className="footer-card-1-links"></div>
          </div>
        </div>
        <div className="footer-card-2">
          <div className="footer-card-2-header">Quick links</div>
          <div className="footer-card-2-components">
            <div className="footer-card-2-link-1">Home</div>
            <div className="footer-card-2-link-2">About Us</div>
            <div className="footer-card-2-link-3">Consulting Services</div>
            <div className="footer-card-2-link-4">Industries Served</div>
            <div className="footer-card-2-link-5">Our progress</div>
            <div className="footer-card-2-link-6">Career</div>
          </div>
        </div>
        <div className="footer-card-3">
          <div className="footer-card-3-header"></div>
          <div className="footer-card-3-components"></div>
        </div>
        <div className="footer-card-4">
          <div className="footer-card-4-form"></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
