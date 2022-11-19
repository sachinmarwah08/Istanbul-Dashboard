import React from "react";
import "./IndexSocialMediaFeeds.scss";
import Chart from "../Chart";
import { data as jsonData } from "./Data/general";

const IndexSocialMediaFeeds = () => {
  return (
    <>
      <div>
        <h1 className="General-index-heading">
          General indexes based on news feeds and social media sentiment
        </h1>
      </div>
      <div className="chart-outside-index-two">
        <Chart
          sentimentValue={50}
          indexValue={17}
          jsonData={jsonData}
          category="generel"
          heading="General Social Media Index"
          description="The index value and sentiment of social media that links to the General category"
        />
        <Chart
          sentimentValue={0}
          indexValue={3}
          jsonData={jsonData}
          category="goverment"
          heading="Goverment Social Media Index"
          description="The index value and sentiment of social media that links to the Goverment category"
        />
      </div>

      <div className="chart-outside-index">
        <Chart
          sentimentValue={0}
          indexValue={0}
          jsonData={jsonData}
          category="traffic"
          heading="Traffic Social Media Index"
          description="The index value and sentiment of social media that links to the Traffic category"
        />

        <Chart
          sentimentValue={0}
          indexValue={1}
          jsonData={jsonData}
          category="health"
          heading="Health Social Media Index"
          description="The index value and sentiment of social media that links to the Health category"
        />
        <Chart
          sentimentValue={0}
          indexValue={4}
          jsonData={jsonData}
          category="education"
          heading="Education Social Media Index"
          description="The index value and sentiment of social media that links to the Education category"
        />
        <Chart
          sentimentValue={0}
          indexValue={9}
          jsonData={jsonData}
          category="lifestyle"
          heading="Lifestyle Social Media Index"
          description="The index value and sentiment of social media that links to the Lifestyle category"
        />
        <Chart
          sentimentValue={0}
          indexValue={1}
          jsonData={jsonData}
          category="economics"
          heading="Economics Social Media Index"
          description="The index value and sentiment of social media that links to the Economics category"
        />
        <Chart
          sentimentValue={13}
          indexValue={14}
          jsonData={jsonData}
          category="culture"
          heading="Culture Social Media Index"
          description="The index value and sentiment of social media that links to the Culture category"
        />
      </div>
    </>
  );
};

export default IndexSocialMediaFeeds;
