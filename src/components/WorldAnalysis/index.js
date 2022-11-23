import React, { useState } from "react";
import RealTimeNews from "./RealTimeNews/RealTimeNews";
import RealTimeTweets from "./RealTimeTweets/RealTimeTweets";
import TopInfluencers from "./TopInfluencers/TopInfluencers";
import "./index.scss";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import "tippy.js/dist/svg-arrow.css";

const WorldAnalysis = () => {
  const [active, setActive] = useState("real-time-news");

  return (
    <div className="analysis-container-wrapper">
      <div className="container-content">
        <div className="heading-wrapper">
          <div className="container-headings">
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
                  You can access the news of interest based on its sentiment by
                  clicking on it.
                </div>
              }
            >
              <div
                onClick={() => setActive("real-time-news")}
                className={
                  active === "real-time-news"
                    ? "real-time-news-colored"
                    : "real-time-news"
                }
              >
                Real-time News
              </div>
            </Tippy>
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
                  You can access the tweet of interest based on its sentiment by
                  clicking on it.
                </div>
              }
            >
              <div
                onClick={() => setActive("real-time-tweets")}
                className={
                  active === "real-time-tweets"
                    ? "real-time-tweets-colored"
                    : "real-time-tweets"
                }
              >
                Real-time Tweets
              </div>
            </Tippy>
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
                  This table displays the well-known influencers with a
                  significant media impact and their corresponding followers.
                </div>
              }
            >
              <div
                onClick={() => setActive("top-influencers")}
                className={
                  active === "top-influencers"
                    ? "top-influencers-colored"
                    : "top-influencers"
                }
              >
                Influencer Analysis
              </div>
            </Tippy>
          </div>
        </div>
        <div className="border-bottom"></div>

        <div className="table-wrapper-analysis">
          {active === "real-time-news" && <RealTimeNews />}
          {active === "real-time-tweets" && <RealTimeTweets />}
          {active === "top-influencers" && <TopInfluencers />}
        </div>
      </div>
    </div>
  );
};

export default WorldAnalysis;
