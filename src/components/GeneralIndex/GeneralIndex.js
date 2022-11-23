import Tippy from "@tippyjs/react";
import React, { useState } from "react";
import "./GeneralIndex.scss";
import IndexNewsAndSocialMedia from "./IndexNewsAndSocialMedia/IndexNewsAndSocialMedia";
import IndexNewsFeeds from "./IndexNewsFeeds/IndexNewsFeeds";
import IndexSocialMediaFeeds from "./IndexSocialMediaFeeds/IndexSocialMediaFeeds";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import "tippy.js/dist/svg-arrow.css";

const GeneralIndex = () => {
  const [active, setActive] = useState("index-news-feeds");
  return (
    <div className="general-analysis-container-wrapper">
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
                  The interest value graph shows the percentage trend of the
                  number of positive, neutral, and negative news stories from
                  News media. The sentiment value graph shows the average
                  sentiment scores, on a scale of -1 to 1, of news stories from
                  News media.
                </div>
              }
            >
              <div
                onClick={() => setActive("index-news-feeds")}
                className={
                  active === "index-news-feeds"
                    ? "real-time-news-colored"
                    : "real-time-news"
                }
              >
                Index on News feeds
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
                  The interest value graph shows the percentage trend of the
                  number of positive, neutral, and negative tweets from Twitter.
                  The sentiment value graph shows the average sentiment scores,
                  on a scale of -1 to 1, of tweets from Twitter.
                </div>
              }
            >
              <div
                onClick={() => setActive("index-social-media-feeds")}
                className={
                  active === "index-social-media-feeds"
                    ? "real-time-tweets-colored"
                    : "real-time-tweets"
                }
              >
                Index on Social Media feeds
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
                  The interest value graph shows the percentage trend of the
                  number of positive, neutral, and negative tweets and news
                  stories from Twitter and News media. The sentiment value graph
                  shows the average sentiment scores, on a scale of -1 to 1, of
                  tweets and news stories from Twitter and News media.
                </div>
              }
            >
              <div
                onClick={() => setActive("index-news-and-social-media")}
                className={
                  active === "index-news-and-social-media"
                    ? "top-influencers-colored"
                    : "top-influencers"
                }
              >
                Indexes on News & Social Media
              </div>
            </Tippy>
          </div>
        </div>
        <div className="border-bottom"></div>

        <div className="table-wrapper-analysis">
          {active === "index-news-feeds" && <IndexNewsFeeds />}
          {/* {active === "index-social-media-feeds" && <IndexSocialMediaFeeds />}
          {active === "index-news-and-social-media" && (
            <IndexNewsAndSocialMedia />
          )} */}
        </div>
      </div>
    </div>
  );
};

export default GeneralIndex;
