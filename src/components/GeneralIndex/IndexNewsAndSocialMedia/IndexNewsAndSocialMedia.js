import React from "react";
import "./IndexNewsAndSocialMedia.scss";
import Chart from "../Chart";
import { data as jsonData } from "./Data/general";

const IndexNewsAndSocialMedia = () => {
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
          indexValue={158}
          jsonData={jsonData}
          category="generel"
          heading="General News and Media Index"
          description="The Interest value and sentiment of news and social media that links to the General category"
        />
        <Chart
          sentimentValue={0}
          indexValue={3}
          jsonData={jsonData}
          category="goverment"
          heading="Goverment News and Media Index"
          description="The Interest value and sentiment of news and social media that links to the Goverment category"
        />
      </div>

      <div className="chart-outside-index">
        <Chart
          sentimentValue={0}
          indexValue={1}
          jsonData={jsonData}
          category="traffic"
          heading="Traffic News and Media Index"
          description="The Interest value and sentiment of news and social media that links to the Traffic category"
        />

        <Chart
          sentimentValue={0}
          indexValue={1}
          jsonData={jsonData}
          category="health"
          heading="Health News and Media Index"
          description="The Interest value and sentiment of news and social media that links to the Health category"
        />
        <Chart
          sentimentValue={0}
          indexValue={4}
          jsonData={jsonData}
          category="education"
          heading="Education News and Media Index"
          description="The Interest value and sentiment of news and social media that links to the Education category"
        />
        <Chart
          sentimentValue={0}
          indexValue={9}
          jsonData={jsonData}
          category="lifestyle"
          heading="Lifestyle News and Media Index"
          description="The Interest value and sentiment of news and social media that links to the Lifestyle category"
        />
        <Chart
          sentimentValue={0}
          indexValue={1}
          jsonData={jsonData}
          category="economics"
          heading="Economics News and Media Index"
          description="The Interest value and sentiment of news and social media that links to the Economics category"
        />
        <Chart
          sentimentValue={13}
          indexValue={14}
          jsonData={jsonData}
          category="culture"
          heading="Culture News and Media Index"
          description="The Interest value and sentiment of news and social media that links to the Culture category"
        />
      </div>
    </>
  );
};

export default IndexNewsAndSocialMedia;
