import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import FilterButton from "../../Buttons/FilterButton/FilterButton";
import RadioButton from "../../Buttons/RadioButton/RadioButton";
import SearchBar from "../../SearchBar/SearchBar";
import "./RealTimeNews.scss";
import { data } from "./data";

const RealTimeNews = () => {
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
      setLocalData(tempData);
    } else {
      setLocalData(data);
    }
  }, [selectedCategory]);

  const onRadioChange = (value) => {
    if (selectedCategory) {
      let tempData = data.filter(
        (item) =>
          item.Sentiment_Category === value &&
          item.Category === selectedCategory
      );
      setLocalData(tempData);
    } else {
      let tempData = data.filter(
        (item) =>
          item.CategoryAll === value || item.Sentiment_Category === value
      );

      setLocalData(tempData);
    }
    setRadioCheck(value);
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
          item.URL.toLowerCase().includes(inputValue.toLowerCase()) ||
          item.Datetime.toLowerCase().includes(inputValue.toLowerCase())
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
              radioName="realTimeNews"
              value="All"
              onRadioChange={onRadioChange}
              name="All"
            />
            <RadioButton
              checked={radioCheck}
              radioName="realTimeNews"
              value="Positive"
              onRadioChange={onRadioChange}
              name="Positive"
            />
            <RadioButton
              checked={radioCheck}
              radioName="realTimeNews"
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
        <FilterButton
          data={globeFilter}
          setData={setGlobeFilter}
          dropdownList={globeFilterDrodownList}
        />
      </div>

      <div className="left-content-wrapper-news">
        {localData.map((item) => (
          <div className="left-content-News">
            <div className="news-date-title">
              <p className="date-ago">{item.Datetime}</p>
              <p className="news-title-content">{item.Username}</p>
            </div>

            <a
              // href={item.url}
              rel="noreferrer"
              target="_blank"
              className="left-content-heading-news"
            >
              {/* {item.news_source} */}
              {item.Event}
            </a>
            {/* <p className="hashtags-news"> */}
            {/* {item.headline} */}

            {/* {item.headline}
            </p> */}
          </div>
        ))}
      </div>
    </>
  );
};

export default RealTimeNews;
