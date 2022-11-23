import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import "./MapAndLineChart.scss";
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import { format, parsseISO, subDays } from "date-fns";
import moment from "moment";
import { data as jsonData } from "./Data/data";
import { data as stats } from "../GlobeRegions/data";
import infoCircle from "../../Images/infoCircle.svg";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import "tippy.js/dist/svg-arrow.css";

const MapAndLineChart = () => {
  const selectedCategory = useSelector(
    (state) => state.globalData.selectedCategory
  );

  const [localData, setLocalData] = useState([]);
  const [statatics, setStatatics] = useState({
    Media_Interest: "",
    News_Interest: "",
    Social_Media_Interest: "",
    Overall_Sentiment: "",
  });

  useEffect(() => {
    let category = selectedCategory || "General";
    console.log(category, "category");
    let tempData = [];

    for (let i = 0; i < jsonData.length; i++) {
      let obj = {
        month: jsonData[i].Dates,
        value: +jsonData[i][category],
        generalSentiment: +jsonData[i].GeneralSentiment,
        govermentSentiment: +jsonData[i].GovernmentSentiment,
        economicsSentiment: +jsonData[i].EconomicsSentiment,
        lifestyleSentiment: +jsonData[i].LifestyleSentiment,
        healthSentiment: +jsonData[i].HealthSentiment,
        cultureSentiment: +jsonData[i].CultureSentiment,
        educationSentiment: +jsonData[i].EducationSentiment,
        trafficSentiment: +jsonData[i].TrafficSentiment,
      };
      tempData.push(obj);
    }
    console.log(tempData);
    setLocalData(tempData);
    setStatatics(stats[category]);
  }, [selectedCategory]);

  function renderTooltip(item) {
    if (item && item.payload && item.payload.length) {
      console.log(item && item.payload && item.payload.length);
      return (
        <>
          <div>
            {/* <p
              style={{
                fontSize: "20px",
                color: "#D0D5DD",
                fontWeight: 700,
                marginTop: 0,
                marginBottom: "0.5rem",
                width: "max-content",
              }}
            >
              {selectedCategory}
            </p> */}
            <p
              style={{
                fontSize: "20px",
                color: "#D0D5DD",
                fontWeight: 700,
                marginTop: 0,
                marginBottom: "0.5rem",
                width: "max-content",
              }}
            >
              {item.payload[0].payload.month}
            </p>
          </div>
          <div>
            {item.payload[0].payload.value >= 0 && (
              <p
                style={{
                  fontSize: "20px",
                  color: "#ffffff",
                  fontWeight: 700,
                  marginTop: 0,
                  margin: 0,
                  width: "max-content",
                }}
              >
                Media Interest : {item.payload[0].payload.value}
              </p>
            )}
          </div>

          {selectedCategory === "General" && (
            <div>
              {item.payload[0].payload.generalSentiment && (
                <p
                  style={{
                    fontSize: "20px",
                    color: "#ffffff",
                    fontWeight: 700,
                    marginTop: 0,
                    margin: 0,
                    width: "max-content",
                  }}
                >
                  Sentiment : {item.payload[0].payload.generalSentiment}
                </p>
              )}
            </div>
          )}
          {selectedCategory === "Government" && (
            <div>
              {item.payload[0].payload.govermentSentiment && (
                <p
                  style={{
                    fontSize: "20px",
                    color: "#ffffff",
                    fontWeight: 700,
                    marginTop: 0,
                    margin: 0,
                    width: "max-content",
                  }}
                >
                  Sentiment : {item.payload[0].payload.govermentSentiment}
                </p>
              )}
            </div>
          )}
          {selectedCategory === "Economics" && (
            <div>
              {item.payload[0].payload.economicsSentiment && (
                <p
                  style={{
                    fontSize: "20px",
                    color: "#ffffff",
                    fontWeight: 700,
                    marginTop: 0,
                    margin: 0,
                    width: "max-content",
                  }}
                >
                  Sentiment : {item.payload[0].payload.economicsSentiment}
                </p>
              )}
            </div>
          )}
          {selectedCategory === "Lifestyle" && (
            <div>
              {item.payload[0].payload.lifestyleSentiment && (
                <p
                  style={{
                    fontSize: "20px",
                    color: "#ffffff",
                    fontWeight: 700,
                    marginTop: 0,
                    margin: 0,
                    width: "max-content",
                  }}
                >
                  Sentiment : {item.payload[0].payload.lifestyleSentiment}
                </p>
              )}
            </div>
          )}
          {selectedCategory === "Health" && (
            <div>
              {item.payload[0].payload.healthSentiment && (
                <p
                  style={{
                    fontSize: "20px",
                    color: "#ffffff",
                    fontWeight: 700,
                    marginTop: 0,
                    margin: 0,
                    width: "max-content",
                  }}
                >
                  Sentiment : {item.payload[0].payload.healthSentiment}
                </p>
              )}
            </div>
          )}
          {selectedCategory === "Culture" && (
            <div>
              {item.payload[0].payload.cultureSentiment && (
                <p
                  style={{
                    fontSize: "20px",
                    color: "#ffffff",
                    fontWeight: 700,
                    marginTop: 0,
                    margin: 0,
                    width: "max-content",
                  }}
                >
                  Sentiment : {item.payload[0].payload.cultureSentiment}
                </p>
              )}
            </div>
          )}
          {selectedCategory === "Education" && (
            <div>
              {item.payload[0].payload.educationSentiment && (
                <p
                  style={{
                    fontSize: "20px",
                    color: "#ffffff",
                    fontWeight: 700,
                    marginTop: 0,
                    margin: 0,
                    width: "max-content",
                  }}
                >
                  Sentiment : {item.payload[0].payload.educationSentiment}
                </p>
              )}
            </div>
          )}
          {selectedCategory === "Traffic" && (
            <div>
              {item.payload[0].payload.trafficSentiment && (
                <p
                  style={{
                    fontSize: "20px",
                    color: "#ffffff",
                    fontWeight: 700,
                    marginTop: 0,
                    margin: 0,
                    width: "max-content",
                  }}
                >
                  Sentiment : {item.payload[0].payload.trafficSentiment}
                </p>
              )}
            </div>
          )}
        </>
      );
    }
  }

  return (
    <>
      {/* <div className="new-map-chart-wrapper">
        <h1 className="heading">Chart’s name</h1>

        <div className="new-map-radio-button">
          <RadioButton name="Positive Sentiment" />
          <RadioButton name="Negative Sentiment" />
        </div>

        <div className="new-map-filter-wrapper">
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
        </div>

        <div className="new-map-chart">
          <div className="map-chart-bg"></div>
        </div>
      </div> */}
      <div className="new-line-chart-wrapper">
        <div className="heading-info">
          <h1 className="heading">
            Media Interest and Sentiment Analysis Over Time
          </h1>
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
                This graph displays the average sentiment score and the trend of
                the number of positive, neutral, and negative tweets and news
                stories from Twitter and News media.
              </div>
            }
          >
            <img className="info" src={infoCircle} />
          </Tippy>
        </div>

        {/* <div className="new-line-chart-buttons-wrapper">
          <div className="left-buttons">
            <button className="country-list">
              Worldwide <FontAwesomeIcon icon={faAngleDown} />
            </button>
          </div>
          <div className="right-buttons">
            <button className="compare-country">
              <FontAwesomeIcon icon={faPlus} /> Compare Country
            </button>
            <button className="compare-time">
              <FontAwesomeIcon icon={faPlus} /> Compare Country
            </button>
          </div>
        </div> */}

        <div className="media-wrapper">
          <div className="media-content">
            <span className="title">Media Interest</span>
            <span className="count">{statatics.Media_Interest}</span>
          </div>
          <div className="media-content">
            <span className="title">Social Media Interest</span>
            <span className="count">{statatics.Social_Media_Interest}</span>
          </div>
          <div className="media-content">
            <span className="title">News Interest</span>
            <span className="count">{statatics.News_Interest}</span>
          </div>
          <div className="media-content">
            <span className="title">Overall Sentiment</span>
            <span className="count">{statatics.Overall_Sentiment}</span>
          </div>
          <div className="media-content">
            <span className="title">Influencers</span>
            <span className="count">{statatics.Influencers}</span>
          </div>
          {/* <div className="media-content">
            <span className="title">Top Related Topics</span>
            <span className="count">50</span>
          </div> */}
        </div>

        <div className="new-line-chart">
          <ResponsiveContainer width="100%" height="100%" aspect={4}>
            <AreaChart
              width="100%"
              height="auto"
              data={localData}
              margin={{ top: 10, right: 45, left: -20, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FFB800" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#FFF0CA" stopOpacity={0} />
                  <stop offset="95%" stopColor="#FFB800" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
              </defs>

              <Tooltip
                content={(item, index) => renderTooltip(item, index)}
                wrapperStyle={{
                  boxShadow:
                    "-4px 0px 8px rgba(0, 0, 0, 0.08), 0px 4px 8px rgba(0, 0, 0, 0.1)",
                  borderRadius: "0.5rem",
                  zIndex: "99",
                  border: "1px solid #EEEEEE",
                  outline: "none",
                }}
              />

              <XAxis
                dataKey="month"
                // axisLine={true}
                // tickLine={false}
                minTickGap={60}
                fill="#D0D5DD"
                fontSize="12px"
                dy={8}
              />

              {/* <YAxis
                datakey="value"
                axisLine={false}
                tickLine={false}
                tickCount={8}
                tickFormatter={(number) => `$${number.toFixed(2)}`}
                stroke="#9CA3AF"
                fontWeight={500}
                fontSize="0.875rem"
              /> */}
              {/* <XAxis
            style={{ fontFamily: "Sora" }}
            dataKey="name"
            stroke="#9CA3AF"
            fontWeight={600}
            dy={8}
            fontSize="0.875rem"
            interval={"preserveStartEnd"}
            // tickFormatter={(value) => value + ""}
          />
          <YAxis
            style={{ fontFamily: "Sora" }}
            // tickFormatter={nFormatter}
            type="number"
            dy={-4}
            fontWeight={500}
            fontSize="0.875rem"
            domain={["dataMin", "dataMax"]}
            allowDecimals={false}
            scale="auto"
            stroke="#9CA3AF"
          /> */}
              <YAxis
                type="number"
                dy={-4}
                fontWeight={500}
                fontSize="0.875rem"
                domain={["dataMin", "dataMax"]}
                dataKey="value"
              />
              {/* <CartesianGrid
                horizontal={false}
                strokeDasharray="3 3"
                opacity={0.2}
              /> */}
              {/* <Tooltip /> */}
              <Area
                type="monotone"
                dataKey="value"
                strokeWidth={3}
                stroke="#FFB800"
                fillOpacity={2}
                fill="url(#colorUv)"
              />
              {/* <Area
            type="linear"
            dataKey="pv"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          /> */}
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default MapAndLineChart;
