import React from "react";
import "./IndexNewsFeeds.scss";
import Chart from "../Chart";
import { data as jsonData } from "./Data/general";

const IndexNewsFeeds = ({ active }) => {
  return (
    <>
      <div>
        {/* <h1 className="General-index-heading">
          General indexes based on news feeds and social media sentiment
        </h1> */}
      </div>
      <div className="chart-outside-index-two">
        <Chart
          sentimentValue="Positive"
          active={active}
          indexValue="0.8K"
          jsonData={jsonData}
          category="generel"
          heading="General News Index"
          description="The Interest value and sentiment of news that links to the General category"
        />
        <Chart
          sentimentValue="Positive"
          active={active}
          indexValue="27"
          jsonData={jsonData}
          category="goverment"
          heading="Goverment News Index"
          description="The Interest value and sentiment of news that links to the Goverment category"
        />
      </div>

      <div className="chart-outside-index">
        <Chart
          sentimentValue="Neutral"
          active={active}
          indexValue="490"
          jsonData={jsonData}
          category="economics"
          heading="Economics News Index"
          description="The Interest value and sentiment of news that links to the Economics category"
        />

        <Chart
          sentimentValue="Positive"
          active={active}
          indexValue="270"
          jsonData={jsonData}
          category="lifestyle"
          heading="Lifestyle News Index"
          description="The Interest value and sentiment of news that links to the Lifestyle category"
        />

        <Chart
          sentimentValue="Positive"
          active={active}
          indexValue="27"
          jsonData={jsonData}
          category="health"
          heading="Health News Index"
          description="The Interest value and sentiment of news that links to the Health category"
        />

        <Chart
          sentimentValue="Positive"
          active={active}
          indexValue="325"
          jsonData={jsonData}
          category="culture"
          heading="Culture News Index"
          description="The Interest value and sentiment of news that links to the Culture category"
        />

        <Chart
          sentimentValue="Positive"
          active={active}
          indexValue="319"
          jsonData={jsonData}
          category="education"
          heading="Education News Index"
          description="The Interest value and sentiment of news that links to the Education category"
        />

        <Chart
          sentimentValue="Neutral"
          active={active}
          indexValue="180"
          jsonData={jsonData}
          category="traffic"
          heading="Traffic News Index"
          description="The Interest value and sentiment of news that links to the Traffic category"
        />
      </div>
    </>
  );
};

export default IndexNewsFeeds;
