import React from "react";
import "./submit.css";

function Submit() {
  return (
    <div className="submit">
      <div className="submit-cards">
        <div className="submit-card-1">
          <div className="submit-header">Let's</div>
          <div className="submit-header-2">Do This Together</div>
          <div className="submit-para">
            Take the next step by learning more about Gibson Consulting’s
            capabilities and qualifications. To request information or arrange a
            face-to-face introduction, simply fill out the form below or give us
            a call at 312.291.4640.
          </div>
        </div>
        <div className="submit-card-2">
          <div className="submit-form"></div>
          <div className="submit-button">Submit</div>
        </div>
      </div>
    </div>
  );
}

export default Submit;
