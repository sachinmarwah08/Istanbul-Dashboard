// import React from "react";
import Header from "./Layouts/Header/Header";
import GlobalFilter from "./GlobalFilter/GlobalFilter";
import GlobeRegions from "./GlobeRegions/GlobeRegions";
import LineChart from "./Charts/LineChart";
import WorldAnalysis from "./WorldAnalysis";
import AreaChart from "./Charts/AreaChart";
import Footer from "./Layouts/Footer/Footer";
import FilterProvider from "../context/FilterContext";
import CountryChart from "./Charts/CountryChart";
import GeneralIndex from "./GeneralIndex/GeneralIndex";
import TrendingHashtag from "./TrendingHashtag/TrendingHashtag";
import MapAndLineChart from "./MapAndLineChart/MapAndLineChart";

const Main = () => {
  return (
    <>
      <FilterProvider>
        <Header />
        {/* <GlobalFilter /> */}
        <GlobeRegions />
        <MapAndLineChart />
        <WorldAnalysis />
        <TrendingHashtag />
        <GeneralIndex />
        {/* <AreaChart /> */}
        {/* <CountryChart />*/}
        <Footer />
      </FilterProvider>
    </>
  );
};

export default Main;
