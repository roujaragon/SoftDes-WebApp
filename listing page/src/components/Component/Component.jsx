/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Component = ({ className }) => {
  return (
    <div className={`component ${className}`}>
      <div className="overlap-group">
        <div className="rectangle" />
        <div className="text-wrapper">Detail 1: Property Name</div>
        <div className="div">Detail 2: Developer</div>
        <div className="text-wrapper-2">Detail 3: Location</div>
        <div className="text-wrapper-3">Detail 4: Property Size</div>
        <div className="text-wrapper-4">Detail 5: Price</div>
      </div>
    </div>
  );
};
