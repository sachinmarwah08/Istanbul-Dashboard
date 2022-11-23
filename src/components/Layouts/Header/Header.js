import React from "react";
import "./Header.scss";
import logo from "../../../Images/logo.svg";
import infoCircle from "../../../Images/infoCircle.svg";
import moment from "moment";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import "tippy.js/dist/svg-arrow.css";

const Header = () => {
  const formatDate = moment().format("DD");

  return (
    <div className="header-wrapper">
      <div className="header-inside-container">
        <img className="logo" src={logo} />
        <div className="header-container">
          <div className="left-content-header">
            <div className="heading-info">
              <p className="header-heading">
                Istanbul Real time Data Sentiment Index
              </p>
              <Tippy
                arrow={false}
                theme={"red"}
                interactive={true}
                zIndex={9999999999}
                content={
                  <div
                    style={{
                      fontWeight: 400,
                      fontFamily: "Sora",
                      fontSize: "12px",
                      zIndex: 999999,
                    }}
                  >
                    This dashboard provides insights on Istanbul tweets, news
                    stories, top influencers, and trending hashtags, as well as
                    categorisation of these into General, Government, Economics,
                    Lifestyle, Health, Culture, Education, and Traffic segments.
                  </div>
                }
              >
                <img className="info" src={infoCircle} />
              </Tippy>
            </div>

            <p className="header-title">Powered by ztudium blocksdna</p>
          </div>
          <div className="right-content">
            <div className="date-container">
              <div className="date-one">
                <p className="date">Sep 01, 2022</p>
                {/* <div className="date-icon">
                  <FontAwesomeIcon className="fa" icon={faAngleDown} />
                </div> */}
              </div>
              <span className="line"></span>
              <div className="date-two">
                <p className="date">Nov 20, 2022</p>
                {/* <div className="date-icon">
                  <FontAwesomeIcon className="fa" icon={faAngleDown} />
                </div> */}
              </div>
            </div>

            {/* <div className="names-wrapper">
              <div className="names-container">
                <span className="Total-value">{data.IndexValue}</span>
                <span className="absolute-change-value">
                  +{data.AbsoluteChange}
                </span>

                <span className="percentage-change-value">
                  +{parseFloat(data.PercentageChange).toFixed(2)}
                </span>
                <span className="current-date">Current Index</span>

                <span className="absolute-change">Previous Period Change</span>
                <span className="percentage-change">Percentage Change</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
