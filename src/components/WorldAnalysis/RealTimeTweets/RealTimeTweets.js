import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./RealTimeTweets.scss";
import twitterLogo from "../../../Images/TwitterLogo.svg";
import FilterButton from "../../Buttons/FilterButton/FilterButton";
import RadioButton from "../../Buttons/RadioButton/RadioButton";
import SearchBar from "../../SearchBar/SearchBar";
import { data } from "./data";
import { useEffect } from "react";

const RealTimeTweets = () => {
  const selectedCategory = useSelector(
    (state) => state.globalData.selectedCategory
  );
  const globeFilterDrodownList = ["Influencer", "Hashtag"];
  const [globeFilter, setGlobeFilter] = useState("Filters");
  const [localData, setLocalData] = useState(data);
  const [radioCheck, setRadioCheck] = useState("All");
  const [inputValue, setInputValue] = useState("");
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [droplist, setDropList] = useState(data);

  useEffect(() => {
    if (selectedCategory) {
      let tempData = data.filter((item) => item.Category === selectedCategory);
      console.log(tempData);
      setLocalData(tempData);
    } else {
      setLocalData(data);
    }
  }, [selectedCategory]);

  const onRadioChange = (cat) => {
    let tempData = data.filter(
      (item) => item.CategoryAll === cat || item.SentimentCategory === cat
    );
    setRadioCheck(cat);
    setLocalData(tempData);
  };

  const onHandleChange = (e) => {
    setInputValue(e.target.value);
    if (globeFilter === "Influencer") {
      setIsFilterActive(true);
      let tempData = data.filter((item) => {
        return item.Username.toLowerCase().includes(inputValue.toLowerCase());
      });
      setDropList(tempData);
    } else if (globeFilter === "Filters") {
      let tempData = data.filter((item) => {
        return (
          item.Username.toLowerCase().includes(inputValue.toLowerCase()) ||
          item.Event.toLowerCase().includes(inputValue.toLowerCase()) ||
          item.URL.toLowerCase().includes(inputValue.toLowerCase())
        );
      });
      setLocalData(tempData);
    }
  };

  const onDropDownClick = (option) => {
    setInputValue(option);
    setIsFilterActive(false);
    let tempData = data.filter((item) => item.Username === option);
    setLocalData(tempData);
  };

  return (
    <>
      <div className="second-content-wrapper">
        <div className="radio-btn-wrapper-analysis">
          <>
            <RadioButton
              checked={radioCheck}
              radioName="realTimeTweets"
              value="All"
              onRadioChange={onRadioChange}
              name="All"
            />
            <RadioButton
              checked={radioCheck}
              radioName="realTimeTweets"
              value="Positive"
              onRadioChange={onRadioChange}
              name="Positive"
            />
            <RadioButton
              checked={radioCheck}
              radioName="realTimeTweets"
              name="Negative"
              value="Negative"
              onRadioChange={onRadioChange}
            />
          </>
        </div>
      </div>
      <div className="searchBar-wrapper-analysis">
        <SearchBar
          isFilterActive={isFilterActive}
          data={droplist}
          handleChange={onHandleChange}
          inputValue={inputValue}
          searchBarDropDownClick={onDropDownClick}
        />
        {/* <FilterButton
          data={globeFilter}
          setData={setGlobeFilter}
          dropdownList={globeFilterDrodownList}
        /> */}
      </div>

      <div className="left-content-wrapper-tweets">
        {localData.map((item) => (
          <div className="left-content-tweets">
            <a
              rel="noreferrer"
              target="_blank"
              className="left-content-heading"
            >
              {item.Event}
            </a>

            <p className="hashtags">{item.Htag}</p>

            <p className="url-link">
              <a className="url-link" target="_blank" href={item.URL}>
                {item.URL}
              </a>
            </p>

            <div className="twitter-details">
              <img
                alt="twitter"
                className="twitter-logo"
                src={twitterLogo}
              ></img>
              <p className="username">
                {/* {item.username} */} @{item.Username}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RealTimeTweets;
