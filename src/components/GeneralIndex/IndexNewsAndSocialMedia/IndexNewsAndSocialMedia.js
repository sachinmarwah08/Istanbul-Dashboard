import React from "react";
import "./IndexNewsAndSocialMedia.scss";
import {
  Area,
  XAxis,
  ReferenceLine,
  ResponsiveContainer,
  AreaChart,
} from "recharts";

const data = [];
const launchDate = 2003;

const rand = 200;
for (let i = 0; i < 7; i++) {
  const year = 2000 + i;
  const value = Math.random() * (rand + 50) + 100;
  let d = {
    year: year,
    value: year < launchDate ? undefined : value,
    beforeLaunch: year <= launchDate ? value : undefined,
  };

  data.push(d);
}

function nFormatter(num) {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "G";
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  }
  return num;
}

// change type to see that the overlap might not be appropriate towards the
// end of the shorter chart
const type = "monotone";

const percentage = 100 - ((7 - 4 - 1) / (7 - 1)) * 100;

const IndexNewsAndSocialMedia = () => {
  return (
    <>
      <div>
        <h1 className="General-index-heading">
          General indexes based on news feeds and social media sentiment
        </h1>
      </div>
      <div className="chart-outside-index-two">
        <div className="chart-news-index">
          <h1 className="index-news-heading">ESG News and Media Index </h1>
          <div className="index-score">
            <div className="score-wrapper">
              <p className="score-white">{nFormatter(10000)}</p>
              <p className="title">Index Value</p>
            </div>

            <div className="score-wrapper">
              <p className="score-red">-0.61%</p>
              <p className="title-red">Sentiment Value</p>
            </div>
          </div>
          <ResponsiveContainer width="99%" height="auto" aspect={3.5}>
            <AreaChart width="auto" height="auto" data={data}>
              <defs>
                <linearGradient id="red" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FF3D00" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#FF3D00" stopOpacity={0.1} />
                  <stop offset="95%" stopColor="#FF3D00" stopOpacity={0} />
                </linearGradient>
              </defs>
              <defs>
                <linearGradient id="white" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#E4E7EC" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#E4E7EC" stopOpacity={0.1} />
                  <stop offset="95%" stopColor="#E4E7EC" stopOpacity={0.0} />
                </linearGradient>
              </defs>
              <Area
                type={type}
                dataKey="value"
                fill="url(#red)"
                stroke="#FF3D00"
                strokeWidth={4}
                dot={false}
              />
              <Area
                type={type}
                dataKey="beforeLaunch"
                stroke="#E4E7EC"
                fill="url(#white)"
                strokeWidth={4}
                dot={false}
              />
              <XAxis dataKey="year" dx={0} dy={30} />
              {/* <YAxis /> */}
              <ReferenceLine
                x={launchDate}
                strokeDasharray="4 4"
                label={{
                  value: "Sep 26",
                  fill: "#F9FAFB",
                  fontSize: "12px",
                  fontWeight: 300,
                  fontFamily: "Sora",
                  position: "bottom",
                }}
                color="#9E86FF"
                strokeWidth={2}
                fontWeight={400}
                fontSize="0.875rem"
              />
            </AreaChart>
          </ResponsiveContainer>

          <p className="news-index-percentage">
            The index value and sentiment of news and social media that links to
            the ESG category
          </p>
        </div>
        <div className="chart-news-index">
          <h1 className="index-news-heading">
            Environment News and Media Index
          </h1>
          <div className="index-score">
            <div className="score-wrapper">
              <p className="score-white">{nFormatter(10000)}</p>
              <p className="title">Index Value</p>
            </div>

            <div className="score-wrapper">
              <p className="score-green">80%</p>
              <p className="title-green">Sentiment Value</p>
            </div>
          </div>
          <ResponsiveContainer width="99%" height="auto" aspect={3.5}>
            <AreaChart width="auto" height="auto" data={data}>
              <defs>
                <linearGradient id="green" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#73E700" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#73E700" stopOpacity={0.1} />
                  <stop offset="95%" stopColor="#73E700" stopOpacity={0} />
                </linearGradient>
              </defs>
              <defs>
                <linearGradient id="white" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#E4E7EC" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#E4E7EC" stopOpacity={0.1} />
                  <stop offset="95%" stopColor="#E4E7EC" stopOpacity={0.0} />
                </linearGradient>
              </defs>

              <Area
                type={type}
                dataKey="value"
                fill="url(#green)"
                stroke="#73E700"
                strokeWidth={4}
                dot={false}
              />
              <Area
                type={type}
                dataKey="beforeLaunch"
                stroke="#E4E7EC"
                fill="url(#white)"
                strokeWidth={4}
                dot={false}
              />

              <XAxis dataKey="year" dx={0} dy={30} />
              {/* <YAxis /> */}
              <ReferenceLine
                x={launchDate}
                strokeDasharray="4 4"
                label={{
                  value: "Sep 26",
                  fill: "#F9FAFB",
                  fontSize: "12px",
                  fontWeight: 300,
                  fontFamily: "Sora",
                  position: "bottom",
                }}
                color="#9E86FF"
                strokeWidth={2}
                fontWeight={400}
                fontSize="0.875rem"
              />
            </AreaChart>
          </ResponsiveContainer>

          <p className="news-index-percentage">
            The index value and sentiment of news and social media that links to
            the Environment category
          </p>
        </div>
      </div>
      <div className="chart-outside-index">
        <div className="chart-news-index">
          <h1 className="index-news-heading">Istanbul Fake News</h1>
          <div className="index-score">
            <div className="score-wrapper">
              <p className="score-white">{nFormatter(10000)}</p>
              <p className="title">Index Value</p>
            </div>

            <div className="score-wrapper">
              <p className="score-red">-0.61%</p>
              <p className="title-red">Sentiment Value</p>
            </div>
          </div>
          <ResponsiveContainer width="99%" height="auto" aspect={3.5}>
            <AreaChart width="auto" height="auto" data={data}>
              <defs>
                <linearGradient id="red" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FF3D00" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#FF3D00" stopOpacity={0.1} />
                  <stop offset="95%" stopColor="#FF3D00" stopOpacity={0} />
                </linearGradient>
              </defs>
              <defs>
                <linearGradient id="white" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#E4E7EC" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#E4E7EC" stopOpacity={0.1} />
                  <stop offset="95%" stopColor="#E4E7EC" stopOpacity={0.0} />
                </linearGradient>
              </defs>
              <Area
                type={type}
                dataKey="value"
                fill="url(#red)"
                stroke="#FF3D00"
                strokeWidth={4}
                dot={false}
              />
              <Area
                type={type}
                dataKey="beforeLaunch"
                stroke="#E4E7EC"
                fill="url(#white)"
                strokeWidth={4}
                dot={false}
              />
              <XAxis dataKey="year" dx={0} dy={30} />
              {/* <YAxis /> */}
              <ReferenceLine
                x={launchDate}
                strokeDasharray="4 4"
                label={{
                  value: "Sep 26",
                  fill: "#F9FAFB",
                  fontSize: "12px",
                  fontWeight: 300,
                  fontFamily: "Sora",
                  position: "bottom",
                }}
                color="#9E86FF"
                strokeWidth={2}
                fontWeight={400}
                fontSize="0.875rem"
              />
            </AreaChart>
          </ResponsiveContainer>

          <p className="news-index-percentage">
            The % of news that links the Coronavirus to fake news
          </p>
        </div>
        <div className="chart-news-index">
          <h1 className="index-news-heading">Istanbul Panic Index</h1>
          <div className="index-score">
            <div className="score-wrapper">
              <p className="score-white">{nFormatter(10000)}</p>
              <p className="title">Index Value</p>
            </div>

            <div className="score-wrapper">
              <p className="score-green">80%</p>
              <p className="title-green">Sentiment Value</p>
            </div>
          </div>
          <ResponsiveContainer width="99%" height="auto" aspect={3.5}>
            <AreaChart width="auto" height="auto" data={data}>
              <defs>
                <linearGradient id="green" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#73E700" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#73E700" stopOpacity={0.1} />
                  <stop offset="95%" stopColor="#73E700" stopOpacity={0} />
                </linearGradient>
              </defs>
              <defs>
                <linearGradient id="white" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#E4E7EC" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#E4E7EC" stopOpacity={0.1} />
                  <stop offset="95%" stopColor="#E4E7EC" stopOpacity={0.0} />
                </linearGradient>
              </defs>

              <Area
                type={type}
                dataKey="value"
                fill="url(#green)"
                stroke="#73E700"
                strokeWidth={4}
                dot={false}
              />
              <Area
                type={type}
                dataKey="beforeLaunch"
                stroke="#E4E7EC"
                fill="url(#white)"
                strokeWidth={4}
                dot={false}
              />

              <XAxis dataKey="year" dx={0} dy={30} />
              {/* <YAxis /> */}
              <ReferenceLine
                x={launchDate}
                strokeDasharray="4 4"
                label={{
                  value: "Sep 26",
                  fill: "#F9FAFB",
                  fontSize: "12px",
                  fontWeight: 300,
                  fontFamily: "Sora",
                  position: "bottom",
                }}
                color="#9E86FF"
                strokeWidth={2}
                fontWeight={400}
                fontSize="0.875rem"
              />
            </AreaChart>
          </ResponsiveContainer>

          <p className="news-index-percentage">
            The % of news about panic and the Coronavirus
          </p>
        </div>
        <div className="chart-news-index">
          <h1 className="index-news-heading">Istanbul Media Hype Index</h1>
          <div className="index-score">
            <div className="score-wrapper">
              <p className="score-white">{nFormatter(10000)}</p>
              <p className="title">Index Value</p>
            </div>

            <div className="score-wrapper">
              <p className="score-green">80%</p>
              <p className="title-green">Sentiment Value</p>
            </div>
          </div>
          <ResponsiveContainer width="99%" height="auto" aspect={3.5}>
            <AreaChart width="auto" height="auto" data={data}>
              <defs>
                <linearGradient id="green" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#73E700" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#73E700" stopOpacity={0.1} />
                  <stop offset="95%" stopColor="#73E700" stopOpacity={0} />
                </linearGradient>
              </defs>
              <defs>
                <linearGradient id="white" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#E4E7EC" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#E4E7EC" stopOpacity={0.1} />
                  <stop offset="95%" stopColor="#E4E7EC" stopOpacity={0.0} />
                </linearGradient>
              </defs>

              <Area
                type={type}
                dataKey="value"
                fill="url(#green)"
                stroke="#73E700"
                strokeWidth={4}
                dot={false}
              />
              <Area
                type={type}
                dataKey="beforeLaunch"
                stroke="#E4E7EC"
                fill="url(#white)"
                strokeWidth={4}
                dot={false}
              />

              <XAxis dataKey="year" dx={0} dy={30} />
              {/* <YAxis /> */}
              <ReferenceLine
                x={launchDate}
                strokeDasharray="4 4"
                label={{
                  value: "Sep 26",
                  fill: "#F9FAFB",
                  fontSize: "12px",
                  fontWeight: 300,
                  fontFamily: "Sora",
                  position: "bottom",
                }}
                color="#9E86FF"
                strokeWidth={2}
                fontWeight={400}
                fontSize="0.875rem"
              />
            </AreaChart>
          </ResponsiveContainer>

          <p className="news-index-percentage">
            The % of total news about the Coronavirus
          </p>
        </div>
        <div className="chart-news-index">
          <h1 className="index-news-heading">Istanbul Media Coverage Index</h1>
          <div className="index-score">
            <div className="score-wrapper">
              <p className="score-white">{nFormatter(10000)}</p>
              <p className="title">Index Value</p>
            </div>

            <div className="score-wrapper">
              <p className="score-red">-0.61%</p>
              <p className="title-red">Sentiment Value</p>
            </div>
          </div>
          <ResponsiveContainer width="99%" height="auto" aspect={3.5}>
            <AreaChart width="auto" height="auto" data={data}>
              <defs>
                <linearGradient id="red" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FF3D00" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#FF3D00" stopOpacity={0.1} />
                  <stop offset="95%" stopColor="#FF3D00" stopOpacity={0} />
                </linearGradient>
              </defs>
              <defs>
                <linearGradient id="white" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#E4E7EC" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#E4E7EC" stopOpacity={0.1} />
                  <stop offset="95%" stopColor="#E4E7EC" stopOpacity={0.0} />
                </linearGradient>
              </defs>

              <Area
                type={type}
                dataKey="value"
                fill="url(#red)"
                stroke="#FF3D00"
                strokeWidth={4}
                dot={false}
              />
              <Area
                type={type}
                dataKey="beforeLaunch"
                stroke="#E4E7EC"
                fill="url(#white)"
                strokeWidth={4}
                dot={false}
              />

              <XAxis dataKey="year" dx={0} dy={30} />
              {/* <YAxis /> */}
              <ReferenceLine
                x={launchDate}
                strokeDasharray="4 4"
                label={{
                  value: "Sep 26",
                  fill: "#F9FAFB",
                  fontSize: "12px",
                  fontWeight: 300,
                  fontFamily: "Sora",
                  position: "bottom",
                }}
                color="#9E86FF"
                strokeWidth={2}
                fontWeight={400}
                fontSize="0.875rem"
              />
            </AreaChart>
          </ResponsiveContainer>

          <p className="news-index-percentage">
            The % of all news sources covering the Coronavirus
          </p>
        </div>
        <div className="chart-news-index">
          <h1 className="index-news-heading">
            Istanbul Worldwide Sentiment Index
          </h1>
          <div className="index-score">
            <div className="score-wrapper">
              <p className="score-white">{nFormatter(10000)}</p>
              <p className="title">Index Value</p>
            </div>

            <div className="score-wrapper">
              <p className="score-red">-0.61%</p>
              <p className="title-red">Sentiment Value</p>
            </div>
          </div>
          <ResponsiveContainer width="99%" height="auto" aspect={3.5}>
            <AreaChart width="auto" height="auto" data={data}>
              <defs>
                <linearGradient id="red" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FF3D00" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#FF3D00" stopOpacity={0.1} />
                  <stop offset="95%" stopColor="#FF3D00" stopOpacity={0} />
                </linearGradient>
              </defs>
              <defs>
                <linearGradient id="white" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#E4E7EC" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#E4E7EC" stopOpacity={0.1} />
                  <stop offset="95%" stopColor="#E4E7EC" stopOpacity={0.0} />
                </linearGradient>
              </defs>

              <Area
                type={type}
                dataKey="value"
                fill="url(#red)"
                stroke="#FF3D00"
                strokeWidth={4}
                dot={false}
              />
              <Area
                type={type}
                dataKey="beforeLaunch"
                stroke="#E4E7EC"
                fill="url(#white)"
                strokeWidth={4}
                dot={false}
              />

              <XAxis dataKey="year" dx={0} dy={30} />
              {/* <YAxis /> */}
              <ReferenceLine
                x={launchDate}
                strokeDasharray="4 4"
                label={{
                  value: "Sep 26",
                  fill: "#F9FAFB",
                  fontSize: "12px",
                  fontWeight: 300,
                  fontFamily: "Sora",
                  position: "bottom",
                }}
                color="#9E86FF"
                strokeWidth={2}
                fontWeight={400}
                fontSize="0.875rem"
              />
            </AreaChart>
          </ResponsiveContainer>

          <p className="news-index-percentage">
            The level of sentiment from all news about the Coronavirus
          </p>
        </div>
        <div className="chart-news-index">
          <h1 className="index-news-heading">Istanbul Panic Index</h1>
          <div className="index-score">
            <div className="score-wrapper">
              <p className="score-white">{nFormatter(10000)}</p>
              <p className="title">Index Value</p>
            </div>

            <div className="score-wrapper">
              <p className="score-red">-0.61%</p>
              <p className="title-red">Sentiment Value</p>
            </div>
          </div>
          <ResponsiveContainer width="99%" height="auto" aspect={3.5}>
            <AreaChart width="auto" height="auto" data={data}>
              <defs>
                <linearGradient id="red" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FF3D00" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#FF3D00" stopOpacity={0.1} />
                  <stop offset="95%" stopColor="#FF3D00" stopOpacity={0} />
                </linearGradient>
              </defs>
              <defs>
                <linearGradient id="white" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#E4E7EC" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#E4E7EC" stopOpacity={0.1} />
                  <stop offset="95%" stopColor="#E4E7EC" stopOpacity={0.0} />
                </linearGradient>
              </defs>

              <Area
                type={type}
                dataKey="value"
                fill="url(#red)"
                stroke="#FF3D00"
                strokeWidth={4}
                dot={false}
              />
              <Area
                type={type}
                dataKey="beforeLaunch"
                stroke="#E4E7EC"
                fill="url(#white)"
                strokeWidth={4}
                dot={false}
              />

              <XAxis dataKey="year" dx={0} dy={30} />
              {/* <YAxis /> */}
              <ReferenceLine
                x={launchDate}
                strokeDasharray="4 4"
                label={{
                  value: "Sep 26",
                  fill: "#F9FAFB",
                  fontSize: "12px",
                  fontWeight: 300,
                  fontFamily: "Sora",
                  position: "bottom",
                }}
                color="#9E86FF"
                strokeWidth={2}
                fontWeight={400}
                fontSize="0.875rem"
              />
            </AreaChart>
          </ResponsiveContainer>

          <p className="news-index-percentage">
            The % of news about panic and the Coronavirus
          </p>
        </div>
      </div>
    </>
  );
};

export default IndexNewsAndSocialMedia;
