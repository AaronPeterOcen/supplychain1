import React from "react";
// import InsightCards from "../insight-cards";
import "./insight.css";

function Insights() {
  return (
    <div className="insight">
      <div className="insight-header">Insights</div>
      <div className="insight-header2">Find The Latest News Here</div>
      <div className="insight-cards">
        <div className="insights-card-right">
          <div className="insights-card-1"></div>
          <div className="insights-card-1"></div>
          <div className="insights-card-1"></div>
        </div>
        <div className="insight-card-scroll"></div>
      </div>
      <div className="insights-button">View All ...</div>
    </div>
  );
}

export default Insights;
