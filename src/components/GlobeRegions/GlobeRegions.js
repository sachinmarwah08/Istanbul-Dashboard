import React from "react";
// import FilterButton from "../Buttons/FilterButton/FilterButton";
// import earthIcon from "../../Images/Earth-icon.svg";
// import earthIconColored from "../../Images/Earth-iconColored.svg";
// import tableIcon from "../../Images/Table-icon.svg";
// import arrowIcon from "../../Images/Arrow-icon.svg";
// import SearchBar from "../SearchBar/SearchBar";
import bar from "../../Images/istanbul-bar.png";
import "./GlobeRegions.scss";
import GlobalButtons from "../Buttons/GlobalButtons/GlobalButtons";

const GlobeRegions = () => {
  // const [show, setShow] = useState("Globe");
  // const globeFilterDrodownList = ["Country", "Influencer", "Hashtag"];
  // const [globeFilter, setGlobeFilter] = useState("Filters");

  return (
    <div className="global-regions-wrapper">
      <div className="global-regions-container">
        <img className="global-bar" src={bar}></img>
        <div className="globar-bar-text-wrapper">
          <span className="globar-bar-text">Media Interest</span>
          <span className="globar-bar-text-count">5.5K</span>
        </div>
        <img className="global-bar-two" src={bar}></img>
        <div className="globar-bar-two-text-wrapper">
          <span className="globar-bar-text">Overall Sentiment</span>
          <span className="globar-bar-text-count">80% (Positive)</span>
        </div>
        <img className="global-bar-three" src={bar}></img>
        <div className="globar-bar-three-text-wrapper">
          <span className="globar-bar-text">Top Related Topics</span>
          <span className="globar-bar-text-count">50</span>
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
            <GlobalButtons />
            <div className="globe-container-wrapper">
              <div className="globe-left">
                <button className="range-btn">
                  Range: 1st Sep - 5th Oct 2022
                </button>

                <h1 className="esg-heading-globe">
                  Istanbul City Media Sentiment Monitor
                </h1>

                <div className="media">
                  <p className="interest">Media Interest</p>
                  <p className="score">11.2K</p>
                </div>
                <div className="media">
                  <p className="interest">News Interest</p>
                  <p className="score">1K</p>
                </div>
                <div className="media">
                  <p className="interest">Social Media Interest</p>
                  <p className="score">10.2K</p>
                </div>
                <div className="media">
                  <p className="interest">Overall Sentiment</p>
                  <p className="score">80% (Positive)</p>
                </div>
                <div className="media">
                  <p className="interest">Influencers</p>
                  <p className="score">5.5K</p>
                </div>
                <div className="media">
                  <p className="interest">Top Related Topics</p>
                  <p className="score">50</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobeRegions;
