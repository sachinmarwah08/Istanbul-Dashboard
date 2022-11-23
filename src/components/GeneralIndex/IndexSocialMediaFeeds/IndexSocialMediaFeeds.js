import React from "react";
import "./IndexSocialMediaFeeds.scss";
import Chart from "../Chart";
import { data as jsonData } from "./Data/general";

const IndexSocialMediaFeeds = ({ active }) => {
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
          indexValue="5K"
          jsonData={jsonData}
          category="generel"
          heading="General Social Media Index"
          description="The Interest value and sentiment of social media that links to the General category"
        />

        <Chart
          sentimentValue="Positive"
          active={active}
          indexValue="854"
          jsonData={jsonData}
          category="goverment"
          heading="Goverment Social Media Index"
          description="The Interest value and sentiment of social media that links to the Goverment category"
        />
      </div>

      <div className="chart-outside-index">
        <Chart
          sentimentValue="Neutral"
          active={active}
          indexValue="140"
          jsonData={jsonData}
          category="economics"
          heading="Economics Social Media Index"
          description="The Interest value and sentiment of social media that links to the Economics category"
        />

        <Chart
          sentimentValue="Positive"
          active={active}
          indexValue="279"
          jsonData={jsonData}
          category="lifestyle"
          heading="Lifestyle Social Media Index"
          description="The Interest value and sentiment of social media that links to the Lifestyle category"
        />

        <Chart
          sentimentValue="Positive"
          active={active}
          indexValue="516"
          jsonData={jsonData}
          category="health"
          heading="Health Social Media Index"
          description="The Interest value and sentiment of social media that links to the Health category"
        />

        <Chart
          sentimentValue="Positive"
          active={active}
          indexValue="195"
          jsonData={jsonData}
          category="culture"
          heading="Culture Social Media Index"
          description="The Interest value and sentiment of social media that links to the Culture category"
        />

        <Chart
          sentimentValue="Positive"
          active={active}
          indexValue="176"
          jsonData={jsonData}
          category="education"
          heading="Education Social Media Index"
          description="The Interest value and sentiment of social media that links to the Education category"
        />

        <Chart
          sentimentValue="Neutral"
          active={active}
          indexValue="275"
          jsonData={jsonData}
          category="traffic"
          heading="Traffic Social Media Index"
          description="The Interest value and sentiment of social media that links to the Traffic category"
        />
      </div>
    </>
  );
};

export default IndexSocialMediaFeeds;
