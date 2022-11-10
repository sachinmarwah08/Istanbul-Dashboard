import React, { useState } from "react";
import "./RealTimeTweets.scss";
import twitterLogo from "../../../Images/TwitterLogo.svg";
import FilterButton from "../../Buttons/FilterButton/FilterButton";
import RadioButton from "../../Buttons/RadioButton/RadioButton";
import SearchBar from "../../SearchBar/SearchBar";

const data = [
  {
    id: 1,
    username: "iHireJobAlerts",
    hashtag:
      "#job #animalcare #reptiles #luxuryvinyltile #preventivecare #anesthesia #surgery #clientservices #xrays #wellness #software #highschooldiploma #mentoring",
    name: "Breaking: UK Advertising Standards Authority bans @HSBC ads featuring tree planting and net zero claims given the bank has financed more than $100 billion in fossil fuels since 2016 and funds deforestation. #ESG",
  },
  {
    id: 2,
    username: "iHireJobAlerts",
    hashtag:
      "#job #animalcare #reptiles #luxuryvinyltile #preventivecare #anesthesia #surgery #clientservices #xrays #wellness #software #highschooldiploma #mentoring",
    name: "Excellent piece highlighting @ScottAdamsSays’s #Dilbert’s reporting on the marketing brilliance of the #ESG movement.",
  },
  {
    id: 3,
    username: "iHireJobAlerts",
    hashtag:
      "#job #animalcare #reptiles #luxuryvinyltile #preventivecare #anesthesia #surgery #clientservices #xrays #wellness #software #highschooldiploma #mentoring",
    name: "Skeptics will always be prevalent in #ESG investing. However, do not let this deter you. #Sustainablity will advance every company and prioritizing your finances to do the same will reap massive benefits. @CNBC",
  },
  {
    id: 4,
    username: "iHireJobAlerts",
    hashtag:
      "#job #animalcare #reptiles #luxuryvinyltile #preventivecare #anesthesia #surgery #clientservices #xrays #wellness #software #highschooldiploma #mentoring",
    name: "Sustainable Investing. Is your Roth IRA, Traditional IRA, or Investment account invested in a Socially Responsible Manner? Let's Make a Difference Together. Countact us for a free Review. #ESG #Sustainability #GreenInvesting",
  },
  {
    id: 5,
    username: "iHireJobAlerts",
    hashtag:
      "#job #animalcare #reptiles #luxuryvinyltile #preventivecare #anesthesia #surgery #clientservices #xrays #wellness #software #highschooldiploma #mentoring",
    name: " Now Hiring: Licensed Veterinary Technician (#Birmingham, Alabama  Banfield Pet Hospital #job #AnimalCare #Reptiles #LuxuryVinylTile #PreventiveCare #Anesthesia #Surgery #ClientServices #XRays #Wellness #Software #HighSchoolDiploma #Mentoring https://t.co/0YSDkt7iIB https://t.co/lMJw5s1tH2",
  },
  {
    id: 6,
    username: "iHireJobAlerts",
    hashtag:
      "#job #animalcare #reptiles #luxuryvinyltile #preventivecare #anesthesia #surgery #clientservices #xrays #wellness #software #highschooldiploma #mentoring",
    name: "PSA: The ESG folks are selling us all Theranos stock via legislative mandates and social pressure.",
  },
  {
    id: 7,
    username: "iHireJobAlerts",
    hashtag:
      "#job #animalcare #reptiles #luxuryvinyltile #preventivecare #anesthesia #surgery #clientservices #xrays #wellness #software #highschooldiploma #mentoring",
    name: " Now Hiring: Licensed Veterinary Technician (#Birmingham, Alabama  Banfield Pet Hospital #job #AnimalCare #Reptiles #LuxuryVinylTile #PreventiveCare #Anesthesia #Surgery #ClientServices #XRays #Wellness #Software #HighSchoolDiploma #Mentoring https://t.co/0YSDkt7iIB https://t.co/lMJw5s1tH2",
  },
  {
    id: 8,
    username: "iHireJobAlerts",
    hashtag:
      "#job #animalcare #reptiles #luxuryvinyltile #preventivecare #anesthesia #surgery #clientservices #xrays #wellness #software #highschooldiploma #mentoring",
    name: " Now Hiring: Licensed Veterinary Technician (#Birmingham, Alabama  Banfield Pet Hospital #job #AnimalCare #Reptiles #LuxuryVinylTile #PreventiveCare #Anesthesia #Surgery #ClientServices #XRays #Wellness #Software #HighSchoolDiploma #Mentoring https://t.co/0YSDkt7iIB https://t.co/lMJw5s1tH2",
  },
];

const RealTimeTweets = () => {
  const globeFilterDrodownList = ["Country", "Influencer", "Hashtag"];
  const [globeFilter, setGlobeFilter] = useState("Filters");
  return (
    <>
      <div className="second-content-wrapper">
        <div className="radio-btn-wrapper-analysis">
          <>
            <RadioButton name="All" />
            <RadioButton name="Positive" />
            <RadioButton name="Negative" />
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

      <div className="left-content-wrapper-tweets">
        {/* {data.map((item) => ( */}
        <div className="left-content-tweets">
          <a
            //   href={item.url}
            rel="noreferrer"
            target="_blank"
            className="left-content-heading"
          >
            Breaking: UK Advertising Standards Authority bans
            <span className="colored-hashtag">@HSBC</span> ads featuring tree
            planting and net zero claims given the bank has financed more than
            $100 billion in fossil fuels since 2016 and funds deforestation.{" "}
            <span className="colored-hashtag">#ESG</span>
          </a>

          <p className="hashtags">
            https://twitter.com/R_BrooksStand/status/1582557855881707521
          </p>

          <div className="twitter-details">
            <img alt="twitter" className="twitter-logo" src={twitterLogo}></img>
            <p className="username">{/* {item.username} */} @R_BrooksStand</p>
          </div>
        </div>
        <div className="left-content-tweets">
          <a
            //   href={item.url}
            rel="noreferrer"
            target="_blank"
            className="left-content-heading"
          >
            Excellent piece highlighting
            <span className="colored-hashtag">
              @ScottAdamsSays’s #Dilbert’s
            </span>{" "}
            reporting on the marketing brilliance of the
            <span className="colored-hashtag">#ESG</span> movement.
          </a>

          <p className="hashtags">
            https://twitter.com/ISAACforTexas/status/1585046676783259648
          </p>

          <div className="twitter-details">
            <img alt="twitter" className="twitter-logo" src={twitterLogo}></img>
            <p className="username">{/* {item.username} */} @ISAACforTexas</p>
          </div>
        </div>
        <div className="left-content-tweets">
          <a
            //   href={item.url}
            rel="noreferrer"
            target="_blank"
            className="left-content-heading"
          >
            Skeptics will always be prevalent in
            <span className="colored-hashtag">#ESG</span> investing. However, do
            not let this deter you.{" "}
            <span className="colored-hashtag">#Sustainablity</span> will advance
            every company and prioritizing your finances to do the same will
            reap massive benefits.{" "}
            <span className="colored-hashtag">@CNBC</span>
          </a>

          <p className="hashtags">
            https://twitter.com/mgspellacy/status/1584906381337022464
          </p>

          <div className="twitter-details">
            <img alt="twitter" className="twitter-logo" src={twitterLogo}></img>
            <p className="username">{/* {item.username} */} @mgspellacy</p>
          </div>
        </div>
        <div className="left-content-tweets">
          <a
            //   href={item.url}
            rel="noreferrer"
            target="_blank"
            className="left-content-heading"
          >
            Sustainable Investing. Is your Roth IRA, Traditional IRA, or
            Investment account invested in a Socially Responsible Manner? Let's
            Make a Difference Together. Countact us for a free Review.{" "}
            <span className="colored-hashtag">
              #ESG #Sustainability #GreenInvesting
            </span>
          </a>

          <p className="hashtags">
            https://twitter.com/Egea_SRI/status/1582550874856964096
          </p>

          <div className="twitter-details">
            <img alt="twitter" className="twitter-logo" src={twitterLogo}></img>
            <p className="username">{/* {item.username} */} @Egea_SRI</p>
          </div>
        </div>
        <div className="left-content-tweets">
          <a
            //   href={item.url}
            rel="noreferrer"
            target="_blank"
            className="left-content-heading"
          >
            PSA: The ESG folks are selling us all Theranos stock via legislative
            mandates and social pressure.
          </a>

          <p className="hashtags">
            https://twitter.com/Mining_Atoms/status/1585281602401116161
          </p>

          <div className="twitter-details">
            <img alt="twitter" className="twitter-logo" src={twitterLogo}></img>
            <p className="username">{/* {item.username} */} @Mining_Atoms</p>
          </div>
        </div>
        {/* ))} */}
      </div>
    </>
  );
};

export default RealTimeTweets;
