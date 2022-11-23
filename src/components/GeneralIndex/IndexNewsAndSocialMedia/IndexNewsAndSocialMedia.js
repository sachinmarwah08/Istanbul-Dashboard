import React from "react";
import "./IndexNewsAndSocialMedia.scss";
import Chart from "../Chart";
import { data as jsonData } from "./Data/general";

const IndexNewsAndSocialMedia = ({ active }) => {
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
          indexValue="5.8K"
          jsonData={jsonData}
          category="generel"
          heading="General News and Media Index"
          description="The Interest value and sentiment of news and social media that links to the General category"
        />
        <Chart
          sentimentValue="Positive"
          active={active}
          indexValue="881"
          jsonData={jsonData}
          category="goverment"
          heading="Goverment News and Media Index"
          description="The Interest value and sentiment of news and social media that links to the Goverment category"
        />
      </div>

      <div className="chart-outside-index">
        <Chart
          sentimentValue="Neutral"
          active={active}
          indexValue="630"
          jsonData={jsonData}
          category="economics"
          heading="Economics News and Media Index"
          description="The Interest value and sentiment of news and social media that links to the Economics category"
        />

        <Chart
          sentimentValue="Positive"
          active={active}
          indexValue="549"
          jsonData={jsonData}
          category="lifestyle"
          heading="Lifestyle News and Media Index"
          description="The Interest value and sentiment of news and social media that links to the Lifestyle category"
        />

        <Chart
          sentimentValue="Positive"
          active={active}
          indexValue="543"
          jsonData={jsonData}
          category="health"
          heading="Health News and Media Index"
          description="The Interest value and sentiment of news and social media that links to the Health category"
        />

        <Chart
          sentimentValue="Positive"
          active={active}
          indexValue="520"
          jsonData={jsonData}
          category="culture"
          heading="Culture News and Media Index"
          description="The Interest value and sentiment of news and social media that links to the Culture category"
        />

        <Chart
          sentimentValue="Positive"
          active={active}
          indexValue="495"
          jsonData={jsonData}
          category="education"
          heading="Education News and Media Index"
          description="The Interest value and sentiment of news and social media that links to the Education category"
        />

        <Chart
          sentimentValue="Neutral"
          active={active}
          indexValue="455"
          jsonData={jsonData}
          category="traffic"
          heading="Traffic News and Media Index"
          description="The Interest value and sentiment of news and social media that links to the Traffic category"
        />
      </div>
    </>
  );
};

export default IndexNewsAndSocialMedia;
