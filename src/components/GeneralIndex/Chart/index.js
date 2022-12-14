import React from "react";
import {
  Area,
  XAxis,
  ReferenceLine,
  ResponsiveContainer,
  AreaChart,
  YAxis,
  Tooltip,
} from "recharts";
import { useEffect } from "react";
import { useState } from "react";

const type = "monotone";

const Chart = ({
  category,
  jsonData,
  sentimentValue,
  indexValue,
  heading,
  description,
  active,
}) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (category) {
      let tempData = [];
      console.log(jsonData);
      const dynamicData = jsonData[category];
      console.log(dynamicData, "he");
      for (let i = 0; i < 162; i++) {
        let obj = {};
        if (i < 81) {
          obj["value"] = +dynamicData[i]["IndexValue"];
          obj["sentiment"] =
            i === 80 ? +dynamicData[0]["SentimentValue"] : undefined;
          obj["year"] = dynamicData[i]["Dates"];
        } else {
          obj["value"] = undefined;
          obj["sentiment"] = +dynamicData[i - 81]["SentimentValue"];
          obj["year"] = dynamicData[i - 81]["Dates"];
        }
        tempData.push(obj);
      }
      console.log(tempData);
      setData(tempData);
    }
  }, [category]);

  function renderTooltip(item) {
    if (item && item.payload && item.payload.length) {
      console.log(item.payload[0].payload, "hello");
      return (
        <>
          <div>
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
              {item.payload[0].payload.year}
            </p>
          </div>

          {active === "index-news-feeds" && (
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
                  News Interest : {item.payload[0].payload.value}%
                </p>
              )}
            </div>
          )}

          {active === "index-social-media-feeds" && (
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
                  Social Media Interest : {item.payload[0].payload.value}%
                </p>
              )}
            </div>
          )}

          {active === "index-news-and-social-media" && (
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
                  Media Interest : {item.payload[0].payload.value}%
                </p>
              )}
            </div>
          )}

          {active === "index-news-feeds" && (
            <div>
              {item.payload[0].payload.sentiment === 0 && (
                <p className="sentiment-value">
                  News Sentiment : {item.payload[0].payload.sentiment}
                </p>
              )}
            </div>
          )}
          {active === "index-social-media-feeds" && (
            <div>
              {item.payload[0].payload.sentiment && (
                <p className="sentiment-value">
                  Social Media Sentiment : {item.payload[0].payload.sentiment}
                </p>
              )}
            </div>
          )}
          {active === "index-news-and-social-media" && (
            <div>
              {item.payload[0].payload.sentiment && (
                <p className="sentiment-value">
                  Media Sentiment : {item.payload[0].payload.sentiment}
                </p>
              )}
            </div>
          )}
        </>
      );
    }
  }
  return (
    <div className="chart-news-index">
      <h1 className="index-news-heading">{heading}</h1>
      <div className="index-score">
        <div className="score-wrapper">
          <p className="score-white">{indexValue}</p>

          <p className="title">Interest Value</p>
        </div>
        {sentimentValue < 0 ? (
          <div className="score-wrapper">
            <p className="score-red">{sentimentValue}</p>
            <p className="title-red">Sentiment Value</p>
          </div>
        ) : (
          <div className="score-wrapper">
            <p className="score-green">{sentimentValue}</p>
            <p className="title-green">Sentiment Value</p>
          </div>
        )}
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

          <defs>
            <linearGradient id="green" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#73E700" stopOpacity={0.25} />
              <stop offset="99%" stopColor="#73E700" stopOpacity={0.25} />
              <stop offset="95%" stopColor="#73E700" stopOpacity={0} />
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
          <Area
            type={type}
            dataKey="value"
            fill="url(#red)"
            stroke="#E4E7EC"
            strokeWidth={4}
            dot={false}
          />
          <Area
            type={type}
            dataKey="sentiment"
            stroke={`${sentimentValue < 0 ? "#FF3D00" : "#73E700"}`}
            fill={`${sentimentValue < 0 ? "url(#red)" : "url(#green)"}`}
            strokeWidth={4}
            dot={false}
          />
          <XAxis dataKey="year" dx={0} dy={30} />
          {/* <YAxis domain={["dataMin", "dataMax"]} /> */}
          <ReferenceLine
            x={80}
            strokeDasharray="4 4"
            label={{
              value: "Nov 20",
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

      <p className="news-index-percentage">{description}</p>
    </div>
  );
};

export default Chart;
