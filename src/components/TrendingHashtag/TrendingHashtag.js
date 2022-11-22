import React, { useState } from "react";
import FilterButton from "../Buttons/FilterButton/FilterButton";
import SearchBar from "../SearchBar/SearchBar";
import "react-tree-graph/dist/style.css";
import "./TrendingHashtag.scss";
import { Tree } from "react-tree-graph";
import { Trendingdata } from "./data";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import {
  treeData,
  treeDataCulture,
  treeDataEconomics,
  treeDataEducation,
  treeDataGovernmnet,
  treeDataHealth,
  treeDataLifestyle,
  treeDataTraffic,
} from "./TreeData";

const TrendingHashtag = () => {
  const selectedCategory =
    useSelector((state) => state.globalData.selectedCategory) || "General";

  const globeFilterDrodownList = ["Country", "Influencer", "Hashtag"];
  const [globeFilter, setGlobeFilter] = useState("Filters");
  const [selectedHtag, setSelectedHtag] = useState(
    Trendingdata.General.topTwentyHtag
  );
  const [treeDataLocalState, setTreeDataLocalState] = useState(treeData);
  const [treeDataGovernmentLocalState, setTreeDataGovernmentLocalState] =
    useState(treeDataGovernmnet);
  const [healthLocalState, setHealthLocalState] = useState(treeDataHealth);
  const [educationLoacalState, setEducationLoacalState] =
    useState(treeDataEducation);
  const [lifestyleLocalState, setLifestyleLocalState] =
    useState(treeDataLifestyle);
  const [economicsLocalState, setEconomicsLocalState] =
    useState(treeDataEconomics);
  const [cultureLocalState, setCultureLocalState] = useState(treeDataCulture);
  const [isHtagSelected, setIsHtagSelected] = useState();

  const onHtagClick = (category) => {
    if (category === "istanbulhtag") {
      setTreeDataLocalState([treeData[0]]);
      setTreeDataGovernmentLocalState([treeDataGovernmnet[0]]);
      setHealthLocalState([treeDataHealth[0]]);
      setEducationLoacalState([treeDataEducation[0]]);
      setLifestyleLocalState([treeDataLifestyle[0]]);
      setEconomicsLocalState([treeDataEconomics[0]]);
      setCultureLocalState([treeDataCulture[0]]);
    } else if (category === "ekkanHTag") {
      setTreeDataLocalState([treeData[1]]);
      setTreeDataGovernmentLocalState([treeDataGovernmnet[1]]);
      setHealthLocalState([treeDataHealth[1]]);
      setEducationLoacalState([treeDataEducation[1]]);
      setLifestyleLocalState([treeDataLifestyle[1]]);
      setEconomicsLocalState([treeDataEconomics[1]]);
      setCultureLocalState([treeDataCulture[1]]);
    } else if (category === "duybeniHtag") {
      setTreeDataLocalState([treeData[2]]);
      setTreeDataGovernmentLocalState([treeDataGovernmnet[2]]);
      setHealthLocalState([treeDataHealth[2]]);
      setEducationLoacalState([treeDataEducation[2]]);
      setLifestyleLocalState([treeDataLifestyle[2]]);
      setEconomicsLocalState([treeDataEconomics[2]]);
      setCultureLocalState([treeDataCulture[2]]);
    } else if (category === "turkeyHtag") {
      setTreeDataLocalState([treeData[3]]);
      setTreeDataGovernmentLocalState([treeDataGovernmnet[3]]);
      setHealthLocalState([treeDataHealth[3]]);
      setEducationLoacalState([treeDataEducation[3]]);
      setLifestyleLocalState([treeDataLifestyle[3]]);
      setEconomicsLocalState([treeDataEconomics[3]]);
      setCultureLocalState([treeDataCulture[3]]);
    }
    setSelectedHtag(Trendingdata[selectedCategory][category]);
    setIsHtagSelected(category);
  };

  useEffect(() => {
    if (selectedCategory) {
      console.log(selectedCategory, "hello");
      setSelectedHtag(Trendingdata[selectedCategory]["topTwentyHtag"]);
    }
  }, [selectedCategory]);

  const clearHClick = () => {
    setSelectedHtag(Trendingdata[selectedCategory].topTwentyHtag);
    setIsHtagSelected("");
    setTreeDataLocalState(treeData);
    setTreeDataGovernmentLocalState(treeDataGovernmnet);
    setHealthLocalState(treeDataHealth);
    setEducationLoacalState(treeDataEducation);
    setLifestyleLocalState(treeDataLifestyle);
    setEconomicsLocalState(treeDataEconomics);
    setCultureLocalState(treeDataCulture);
  };

  return (
    <div className="trending-hashtag-wrapper">
      <div className="trending-hashtag-container">
        <div className="trending-hashtag-header">
          <div className="trending-hashtag-header-left">
            <h1 className="trending-hashtag-heading">Trending Hashtags</h1>
            <p className="trending-hashtag-title">
              Top 20 Hashtags related and Associations
            </p>
          </div>
          {/* <div className="trending-hashtag-header-right">
            <SearchBar />
            <FilterButton
              data={globeFilter}
              setData={setGlobeFilter}
              dropdownList={globeFilterDrodownList}
            />
          </div> */}
        </div>

        <div className="treding-hashtag-content-wrapper">
          <div className="trending-hashtag-content">
            <div className="trending-hashtag-content-left">
              {selectedHtag.map((item) => (
                <div className="top-hashtags-wrapper">
                  <p className="top-hastag-container">{item}</p>
                </div>
              ))}
            </div>
            <div className="trending-hashtag-content-right">
              {selectedCategory === "General" && (
                <div className="tree-graph">
                  {treeDataLocalState.map((item) => (
                    <Tree
                      svgProps={{
                        className: "custom",
                      }}
                      animated={true}
                      data={item}
                      nodeRadius={15}
                      margins={{ top: 100, bottom: 80, left: -10, right: 80 }}
                      height={`${isHtagSelected ? 730 : 440}`}
                      direction="rtl"
                      width={1050}
                    />
                  ))}
                </div>
              )}

              {selectedCategory === "Government" && (
                <div className="tree-graph">
                  {treeDataGovernmentLocalState.map((item) => (
                    <Tree
                      svgProps={{
                        className: "custom",
                      }}
                      animated={true}
                      data={item}
                      nodeRadius={15}
                      margins={{ top: 100, bottom: 80, left: -10, right: 80 }}
                      height={`${isHtagSelected ? 730 : 440}`}
                      direction="rtl"
                      width={1050}
                    />
                  ))}
                </div>
              )}

              {selectedCategory === "Traffic" && (
                <div className="tree-graph">
                  {treeDataTraffic.map((item) => (
                    <Tree
                      svgProps={{
                        className: "custom",
                      }}
                      animated={true}
                      data={item}
                      nodeRadius={15}
                      margins={{ top: 100, bottom: 80, left: -10, right: 80 }}
                      height={`${isHtagSelected ? 730 : 530}`}
                      direction="rtl"
                      width={1050}
                    />
                  ))}
                </div>
              )}

              {selectedCategory === "Health" && (
                <div className="tree-graph">
                  {healthLocalState.map((item) => (
                    <Tree
                      svgProps={{
                        className: "custom",
                      }}
                      animated={true}
                      data={item}
                      nodeRadius={15}
                      margins={{ top: 100, bottom: 80, left: -10, right: 80 }}
                      height={`${isHtagSelected ? 730 : 440}`}
                      direction="rtl"
                      width={1050}
                    />
                  ))}
                </div>
              )}

              {selectedCategory === "Education" && (
                <div className="tree-graph">
                  {educationLoacalState.map((item) => (
                    <Tree
                      svgProps={{
                        className: "custom",
                      }}
                      animated={true}
                      data={item}
                      nodeRadius={15}
                      margins={{ top: 100, bottom: 80, left: -10, right: 80 }}
                      height={`${isHtagSelected ? 730 : 440}`}
                      direction="rtl"
                      width={1050}
                    />
                  ))}
                </div>
              )}

              {selectedCategory === "Lifestyle" && (
                <div className="tree-graph">
                  {lifestyleLocalState.map((item) => (
                    <Tree
                      svgProps={{
                        className: "custom",
                      }}
                      animated={true}
                      data={item}
                      nodeRadius={15}
                      margins={{ top: 100, bottom: 80, left: -10, right: 80 }}
                      height={`${isHtagSelected ? 730 : 440}`}
                      direction="rtl"
                      width={1050}
                    />
                  ))}
                </div>
              )}

              {selectedCategory === "Economics" && (
                <div className="tree-graph">
                  {economicsLocalState.map((item) => (
                    <Tree
                      svgProps={{
                        className: "custom",
                      }}
                      animated={true}
                      data={item}
                      nodeRadius={15}
                      margins={{ top: 100, bottom: 80, left: -10, right: 80 }}
                      height={`${isHtagSelected ? 730 : 440}`}
                      direction="rtl"
                      width={1050}
                    />
                  ))}
                </div>
              )}

              {selectedCategory === "Culture" && (
                <div className="tree-graph">
                  {cultureLocalState.map((item) => (
                    <Tree
                      svgProps={{
                        className: "custom",
                      }}
                      animated={true}
                      data={item}
                      nodeRadius={15}
                      margins={{ top: 100, bottom: 80, left: -10, right: 80 }}
                      height={`${isHtagSelected ? 730 : 440}`}
                      direction="rtl"
                      width={1050}
                    />
                  ))}
                </div>
              )}

              {isHtagSelected ? (
                <p
                  onClick={() => clearHClick()}
                  className={`${
                    isHtagSelected
                      ? "top-four-hashtag-one-condition"
                      : "top-four-hashtag-one"
                  }`}
                >
                  {Trendingdata[selectedCategory].topFourHObj[isHtagSelected]}
                </p>
              ) : (
                <>
                  <p
                    className="top-four-hashtag-one"
                    onClick={() => onHtagClick("istanbulhtag")}
                  >
                    {Trendingdata[selectedCategory].topFourHasgtag[0]}
                  </p>
                  <p
                    onClick={() => onHtagClick("ekkanHTag")}
                    className="top-four-hashtag-two"
                  >
                    {Trendingdata[selectedCategory].topFourHasgtag[1]}
                  </p>
                  <p
                    onClick={() => onHtagClick("duybeniHtag")}
                    className="top-four-hashtag-three"
                  >
                    {Trendingdata[selectedCategory].topFourHasgtag[2]}
                  </p>
                  <p
                    onClick={() => onHtagClick("turkeyHtag")}
                    className="top-four-hashtag-four"
                  >
                    {Trendingdata[selectedCategory].topFourHasgtag[3]}
                  </p>
                </>
              )}

              {/* <p className="top-four-hashtag-two">#sustainability</p>
              <p className="top-four-hashtag-three">#csr</p>
              <p className="top-four-hashtag-four">#investment</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingHashtag;
