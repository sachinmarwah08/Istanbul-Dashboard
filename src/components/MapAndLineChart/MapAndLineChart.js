import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import FilterButton from "../Buttons/FilterButton/FilterButton";
import SearchBar from "../SearchBar/SearchBar";
import earthIcon from "../../Images/Earth-icon.svg";
import earthIconColored from "../../Images/Earth-iconColored.svg";
import tableIcon from "../../Images/Table-icon.svg";
import arrowIcon from "../../Images/Arrow-icon.svg";
import "./MapAndLineChart.scss";
import RadioButton from "../Buttons/RadioButton/RadioButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  ReferenceLine,
} from "recharts";
import { format, parsseISO, subDays } from "date-fns";
import moment from "moment";
import { data as jsonData } from "./Data/data";
import { data as stats } from "../GlobeRegions/data";

// const data = [];
// for (let num = 30; num >= 0; num--) {
//   data.push({
//     date: subDays(new Date(), num).toISOString().substring(0, 10),
//     value: 1 + Math.random(),
//   });
// }

const month = moment().format("MMM");

const data = [];

const rand = 300;
for (let i = 1; i < 7; i++) {
  let d = {
    year: month + " " + i,
    value: Math.random() * (rand + 50) + 100,
  };

  data.push(d);
}

const MapAndLineChart = () => {
  const selectedCategory = useSelector(
    (state) => state.globalData.selectedCategory
  );
  const [show, setShow] = useState("Globe");
  const globeFilterDrodownList = ["Country", "Influencer", "Hashtag"];
  const [globeFilter, setGlobeFilter] = useState("Filters");

  const [localData, setLocalData] = useState([]);
  const [statatics, setStatatics] = useState({
    Media_Interest: "",
    News_Interest: "",
    Social_Media_Interest: "",
    Overall_Sentiment: "",
  });

  useEffect(() => {
    let category = selectedCategory || "General";
    let tempData = [];

    for (let i = 0; i < jsonData.length; i++) {
      let obj = {
        month: jsonData[i].Dates,
        value: +jsonData[i][category],
      };
      tempData.push(obj);
    }
    console.log(tempData);
    setLocalData(tempData);
    setStatatics(stats[category]);
  }, [selectedCategory]);

  function renderTooltip(item) {
    if (item && item.payload && item.payload.length) {
      console.log(item.payload[0].payload, "hello");
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
                Index : {item.payload[0].payload.value}
              </p>
            )}
          </div>
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
        <h1 className="heading">Sentiment Mentions per 100,000 people</h1>

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
              margin={{ top: 10, right: 40, left: -20, bottom: 0 }}
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
                fill="#D0D5DD"
                fontSize="12px"
                dy={8}
              />

              <ReferenceLine
                x={month}
                // x={launchDate}
                strokeDasharray="4 4"
                // label={{
                //   value: "Sep 26",
                //   fill: "#F9FAFB",
                //   fontSize: "12px",
                //   fontWeight: 300,
                //   fontFamily: "Sora",
                //   position: "bottom",
                // }}
                color="#D0D5DD"
                strokeWidth={2}
                fontWeight={400}
                fontSize="12px"
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
