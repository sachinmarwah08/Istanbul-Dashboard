import React from "react";
import "./GlobalButtons.scss";

const GlobalButtons = ({ data, onClick }) => {
  return (
    <div className="global-regions-btn-wrapper">
      {data.map(({ Values }) => (
        <button onClick={onClick} className="global-regions-btn">
          {Values}
        </button>
      ))}
      {/* <button className="global-regions-btn">Environmental</button>
      <button className="global-regions-btn">Traffic</button>
      <button className="global-regions-btn">Health</button>
      <button className="global-regions-btn">Education</button>
      <button className="global-regions-btn">Lifestyle</button>
      <button className="global-regions-btn">Economics</button>
      <button className="global-regions-btn">Culture</button> */}
    </div>
  );
};

export default GlobalButtons;
