import React, { useState, useEffect } from "react";
import "./ProgressBar.css";

const ProgressBar = ({ percent, speed }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((oldValue) => {
        const newValue = oldValue + 1;
        if (newValue < percent) {
          return newValue;
        }

        clearInterval(interval);
        return percent;
      });
    }, speed);
  }, [percent, speed]);

  return (
    <div className="progress-container">
      <div className="progress-title">Progress Bar</div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${value}%` }}>
          <span className="progress-text">{`${value}%`}</span>
        </div>
      </div>
      <div className="progress-info">Loading...</div>
    </div>
  );
};

export default ProgressBar;
