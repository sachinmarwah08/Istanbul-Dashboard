import React, { useState } from "react";
import "./TopInfluencers.scss";
import { useSelector } from "react-redux";
import FilterButton from "../../Buttons/FilterButton/FilterButton";
import RadioButton from "../../Buttons/RadioButton/RadioButton";
import SearchBar from "../../SearchBar/SearchBar";
import { useEffect } from "react";
import { data } from "./data";

const TopInfluencers = () => {
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
      let tempData = data.filter((item) => item.CategoryAll);
      setLocalData(tempData);
    }
  }, [selectedCategory]);

  const onRadioChange = (cat) => {
    let tempData = data.filter(
      (item) => item.SentimentAll === cat || item.Sentiment_Category === cat
    );
    setRadioCheck(cat);
    setLocalData(tempData);
  };

  const onHandleChange = (e) => {
    setInputValue(e.target.value);
    setIsFilterActive(true);
    let tempData = data.filter((item) => {
      return item.Username.toLowerCase().includes(inputValue.toLowerCase());
    });
    setDropList(tempData);
  };

  const onDropDownClick = (option) => {
    setInputValue(option);
    setIsFilterActive(false);
    let tempData = data.filter((item) => item.Username === option);
    setLocalData(tempData);
  };

  function nFormatter(num) {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "G";
    }
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, "") + "k";
    }
    return num;
  }
  return (
    <>
      <div className="second-content-wrapper">
        {/* <div className="radio-btn-wrapper-analysis">
          <>
            <RadioButton name="All" />
            <RadioButton name="Person" />
            <RadioButton name="Organisation" />
          </>
        </div> */}
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

      <div className="table-wrapper">
        <div className="table-border">
          <table className="fixed_header">
            <thead>
              <tr>
                <th
                  style={{
                    textAlign: "left",
                  }}
                >
                  Influencer
                </th>
                <th>Media Impact</th>
                <th>Followers</th>
                {/* <th>Engagement</th> */}
              </tr>
            </thead>
            <tbody style={{ marginTop: "0.5rem", height: "26rem" }}>
              {localData.map((item) => (
                <tr
                  key={item.id}
                  style={{
                    borderBottom: "1px solid #2b356e",
                    paddingTop: "1rem",
                    paddingBottom: "1rem",
                  }}
                >
                  <td
                    style={{
                      textAlign: "left",
                      fontWeight: 600,
                      color: "white",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <p style={{ width: "2rem", margin: 0 }}>{item.id}</p>
                      {item.Username}
                    </div>
                  </td>

                  <td>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "center",
                      }}
                    >
                      <p
                        style={{
                          margin: "0",
                          fontWeight: 600,
                          fontSize: "24px",
                          lineHeight: "30px",
                        }}
                      >
                        {nFormatter(item.MediaImpact)}
                      </p>
                      <p style={{ margin: "0" }}>Media Impact</p>
                    </div>
                  </td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "center",
                      }}
                    >
                      <p
                        style={{
                          margin: "0",
                          fontWeight: 600,
                          fontSize: "24px",
                          lineHeight: "30px",
                        }}
                      >
                        {nFormatter(item.Followers)}
                      </p>
                      <p style={{ margin: "0" }}>Followers</p>
                    </div>
                  </td>
                  {/* <td>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "center",
                      }}
                    >
                      <p
                        style={{
                          margin: "0",
                          fontWeight: 600,
                          fontSize: "24px",
                          lineHeight: "30px",
                        }}
                      >
                        {nFormatter(item.MediaImpact)}
                      </p>
                      <p style={{ margin: "0" }}>Engagement</p>
                    </div>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TopInfluencers;
