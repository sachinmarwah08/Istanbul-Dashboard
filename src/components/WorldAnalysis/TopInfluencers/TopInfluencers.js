import React, { useState } from "react";
import "./TopInfluencers.scss";
import FilterButton from "../../Buttons/FilterButton/FilterButton";
import RadioButton from "../../Buttons/RadioButton/RadioButton";
import SearchBar from "../../SearchBar/SearchBar";

const data = [
  {
    id: 1,
    name: "Prof Michael E. Mann",
    lastThirtyDays: "2.9M",
    engagement: "5.56%",
    likePerPost: "2.9K",
  },
  {
    id: 2,
    name: "Alexander Verbeek",
    lastThirtyDays: "1.7M",
    engagement: "2.9%",
    likePerPost: "25.7K",
  },
  {
    id: 3,
    name: "Jim McClelland",
    lastThirtyDays: "1.9M",
    engagement: "6.7%",
    likePerPost: "27.6K",
  },
  {
    id: 4,
    name: "Joel Makower",
    lastThirtyDays: "2.7M",
    engagement: "5.56%",
    likePerPost: "23.8K",
  },
  {
    id: 5,
    name: "Tim Mohin",
    lastThirtyDays: "1.1M",
    engagement: "5.56%",
    likePerPost: "2.9K",
  },
];

const TopInfluencers = () => {
  const globeFilterDrodownList = ["Country", "Influencer", "Hashtag"];
  const [globeFilter, setGlobeFilter] = useState("Filters");
  return (
    <>
      <div className="second-content-wrapper">
        <div className="radio-btn-wrapper-analysis">
          <>
            <RadioButton name="All" />
            <RadioButton name="Person" />
            <RadioButton name="Organisation" />
          </>
        </div>
      </div>
      <div className="searchBar-wrapper-analysis">
        <SearchBar />
        <FilterButton
          data={globeFilter}
          setData={setGlobeFilter}
          dropdownList={globeFilterDrodownList}
        />
      </div>

      <div className="table-wrapper">
        <div className="table-border">
          <table className="fixed_header">
            <thead>
              <tr>
                <th
                  style={{
                    textAlign: "left",
                  }}
                >
                  Influencer
                </th>
                <th>Last 30 days</th>
                <th>Engagement</th>
                <th>Likes per post</th>
              </tr>
            </thead>
            <tbody style={{ marginTop: "0.5rem", height: "24.5rem" }}>
              {data.map((item) => (
                <tr
                  key={item.id}
                  style={{
                    borderBottom: "1px solid #2b356e",
                    paddingTop: "1rem",
                    paddingBottom: "1rem",
                  }}
                >
                  <td
                    style={{
                      textAlign: "left",
                      fontWeight: 600,
                      color: "white",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <p style={{ width: "2rem", margin: 0 }}>{item.id}</p>
                      {item.name}
                    </div>
                  </td>

                  <td>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "center",
                      }}
                    >
                      <p
                        style={{
                          margin: "0",
                          fontWeight: 600,
                          fontSize: "24px",
                          lineHeight: "30px",
                        }}
                      >
                        {item.lastThirtyDays}
                      </p>
                      <p style={{ margin: "0" }}>Followers</p>
                    </div>
                  </td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "center",
                      }}
                    >
                      <p
                        style={{
                          margin: "0",
                          fontWeight: 600,
                          fontSize: "24px",
                          lineHeight: "30px",
                        }}
                      >
                        {item.engagement}
                      </p>
                      <p style={{ margin: "0" }}>Engagement</p>
                    </div>
                  </td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "center",
                      }}
                    >
                      <p
                        style={{
                          margin: "0",
                          fontWeight: 600,
                          fontSize: "24px",
                          lineHeight: "30px",
                        }}
                      >
                        {item.likePerPost}
                      </p>
                      <p style={{ margin: "0" }}>Likes per post</p>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TopInfluencers;
