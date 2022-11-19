import React from "react";
import "./Header.scss";
import logo from "../../../Images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { data } from "./data";
import moment from "moment";

const Header = () => {
  const formatDate = moment().format("DD");

  return (
    <div className="header-wrapper">
      <div className="header-inside-container">
        <img className="logo" src={logo} />
        <div className="header-container">
          <div className="left-content-header">
            <p className="header-heading">
              Istanbul Real time Data Sentiment Index
            </p>
            <p className="header-title">Powered by ztudium blocksdna</p>
          </div>
          <div className="right-content">
            <div className="date-container">
              <div className="date-one">
                <p className="date">Oct 01, 2022</p>
                <div className="date-icon">
                  <FontAwesomeIcon className="fa" icon={faAngleDown} />
                </div>
              </div>
              <span className="line"></span>
              <div className="date-two">
                <p className="date">Oct 27, 2022</p>
                <div className="date-icon">
                  <FontAwesomeIcon className="fa" icon={faAngleDown} />
                </div>
              </div>
            </div>

            <div className="names-wrapper">
              <div className="names-container">
                <span className="Total-value">{data.IndexValue}</span>
                <span className="absolute-change-value">
                  +{data.AbsoluteChange}
                </span>

                {/* <span className="percentage-change-value">
                  +{parseFloat(data.PercentageChange).toFixed(2)}
                </span> */}
                <span className="current-date">Current Index Value</span>

                <span className="absolute-change">Previous Period Change</span>
                {/* <span className="percentage-change">Percentage Change</span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
