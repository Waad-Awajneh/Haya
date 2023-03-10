import React, { useEffect } from "react";
import HeroSection from "../Components/homeComponents/HeroSection";

import LatestNews from "../Components/homeComponents/LatestNews";
import Matches from "../Components/homeComponents/Matches";
import Videos from "../Components/homeComponents/Videos";
import Popular from "../Components/homeComponents/Popular";
import TrendingNews from "../Components/homeComponents/TrendingNews";

import { useIsAuthenticated } from "react-auth-kit";
import $ from "jquery";
export const Home = () => {
  const isAuth = useIsAuthenticated();
  useEffect(() => {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  }, []);
  return (
    <>
      <HeroSection />
      <TrendingNews />
      <Matches />
      <LatestNews />

      <Videos />
      {isAuth() ? <Popular /> : ""}
   
    </>
  );
};
