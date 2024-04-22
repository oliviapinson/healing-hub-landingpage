import React from "react";
import { FigmaDesign } from "./figmadesign";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Try our app</h2>
          <p>
            Please check out our design for our app below! We are currently working on the development of our app.
          </p>
        </div>
        <FigmaDesign />
      </div>
    </div>
  );
};
