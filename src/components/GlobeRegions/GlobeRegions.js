import React from "react";
// import FilterButton from "../Buttons/FilterButton/FilterButton";
// import earthIcon from "../../Images/Earth-icon.svg";
// import earthIconColored from "../../Images/Earth-iconColored.svg";
// import tableIcon from "../../Images/Table-icon.svg";
// import arrowIcon from "../../Images/Arrow-icon.svg";
// import SearchBar from "../SearchBar/SearchBar";
import bar from "../../Images/istanbul-bar.png";
import { useDispatch, useSelector } from "react-redux";
import "./GlobeRegions.scss";
// import GlobalButtons from "../Buttons/GlobalButtons/GlobalButtons";
import { useState } from "react";
// import {
//   Culture,
//   Economics,
//   Education,
//   General,
//   Government,
//   Health,
//   Lifestyle,
//   Traffic,
// } from "./data"
import { data as jsonData } from "./data";
import { onSelectCategory } from "../../slices/globalSlice";

const GlobeRegions = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(
    (state) => state.globalData.selectedCategory
  );
  // const [show, setShow] = useState("Globe");
  // const globeFilterDrodownList = ["Country", "Influencer", "Hashtag"];
  // const [globeFilter, setGlobeFilter] = useState("Filters");

  const [data, setData] = useState(jsonData["General"]);

  const onButtonsClick = (category) => {
    console.log("category", jsonData[category]);
    setData(jsonData[category]);
    dispatch(onSelectCategory(category));
  };

  return (
    <div className="global-regions-wrapper">
      <div className="global-regions-container">
        <img className="global-bar" src={bar}></img>
        <div className="globar-bar-text-wrapper">
          <span className="globar-bar-text">Media Interest</span>
          <span className="globar-bar-text-count">{data.Media_Interest}</span>
        </div>
        <img className="global-bar-two" src={bar}></img>
        <div className="globar-bar-two-text-wrapper">
          <span className="globar-bar-text">Overall Sentiment</span>
          <span className="globar-bar-text-count">
            {data.Overall_Sentiment}
          </span>
        </div>
        <img className="global-bar-three" src={bar}></img>
        <div className="globar-bar-three-text-wrapper">
          <span className="globar-bar-text">Influencers</span>
          <span className="globar-bar-text-count">{data.Influencers}</span>
        </div>
        {/* <div className="global-filter-wrapper">
          <SearchBar />
          <FilterButton
            data={globeFilter}
            dropdownList={globeFilterDrodownList}
            setData={setGlobeFilter}
          />
          <div className="selection">
            <button onClick={() => setShow("Globe")} className="earth-icon-btn">
              {!show === "Globe" ? (
                <img className="earth-icon" src={earthIcon} />
              ) : (
                <img className="earth-icon-colored" src={earthIconColored} />
              )}
            </button>

            <img className="Table-icon" src={tableIcon} />
            <img className="Arrow-icon" src={arrowIcon} />
          </div>
        </div> */}

        <div className="global-main-wrapper">
          <div className="global-bg-image">
            <div className="global-regions-btn-wrapper">
              <button
                onClick={() => onButtonsClick("General")}
                className={`${
                  selectedCategory === "General" || !selectedCategory
                    ? "global-regions-btn-colored"
                    : "global-regions-btn"
                }`}
              >
                General
              </button>
              <button
                onClick={() => onButtonsClick("Government")}
                className={`${
                  selectedCategory === "Government"
                    ? "global-regions-btn-colored"
                    : "global-regions-btn"
                }`}
              >
                Government
              </button>
              <button
                onClick={() => onButtonsClick("Traffic")}
                className={`${
                  selectedCategory === "Traffic"
                    ? "global-regions-btn-colored"
                    : "global-regions-btn"
                }`}
              >
                Traffic
              </button>
              <button
                onClick={() => onButtonsClick("Health")}
                className={`${
                  selectedCategory === "Health"
                    ? "global-regions-btn-colored"
                    : "global-regions-btn"
                }`}
              >
                Health
              </button>
              <button
                onClick={() => onButtonsClick("Education")}
                className={`${
                  selectedCategory === "Education"
                    ? "global-regions-btn-colored"
                    : "global-regions-btn"
                }`}
              >
                Education
              </button>
              <button
                // onClick={() => setData(Lifestyle)}
                onClick={() => onButtonsClick("Lifestyle")}
                className={`${
                  selectedCategory === "Lifestyle"
                    ? "global-regions-btn-colored"
                    : "global-regions-btn"
                }`}
              >
                Lifestyle
              </button>
              <button
                onClick={() => onButtonsClick("Economics")}
                className={`${
                  selectedCategory === "Economics"
                    ? "global-regions-btn-colored"
                    : "global-regions-btn"
                }`}
              >
                Economics
              </button>
              <button
                onClick={() => onButtonsClick("Culture")}
                className={`${
                  selectedCategory === "Culture"
                    ? "global-regions-btn-colored"
                    : "global-regions-btn"
                }`}
              >
                Culture
              </button>
            </div>

            <div className="globe-container-wrapper">
              <div className="globe-left">
                <button className="range-btn">
                  Range: 1st Sep - 20th Nov 2022
                </button>

                <h1 className="esg-heading-globe">
                  Istanbul City Media Sentiment Monitor
                </h1>

                <>
                  <div className="media">
                    <p className="interest">Media Interest</p>
                    <p className="score">{data.Media_Interest}</p>
                  </div>
                  <div className="media">
                    <p className="interest">Social Media Interest</p>
                    <p className="score">{data.Social_Media_Interest}</p>
                  </div>
                  <div className="media">
                    <p className="interest">News Interest</p>
                    <p className="score">{data.News_Interest}</p>
                  </div>
                  <div className="media">
                    <p className="interest">Overall Sentiment</p>
                    <p className="score">{data.Overall_Sentiment}</p>
                  </div>
                  <div className="media">
                    <p className="interest">Influencers</p>
                    <p className="score">{data.Influencers}</p>
                  </div>
                  {/* <div className="media">
                    <p className="interest">Top Related Topics</p>
                    <p className="score">50</p>
                  </div> */}
                </>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobeRegions;
