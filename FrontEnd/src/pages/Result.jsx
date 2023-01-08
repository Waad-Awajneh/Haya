import React from "react";
import HeroResult from "../Components/resultComponents/HeroResult";
import OtherSport from "../Components/resultComponents/OtherSport";
import ResultMatches from "../Components/resultComponents/ResultMatches";
import Schedule from "../Components/resultComponents/Schedule";
import TopLeagues from "../Components/resultComponents/TopLeagues";

 const Result = () => {
  return (
    <>
      {/* Breadcrumb Section Begin */}
      <HeroResult/>
      {/* Breadcrumb Section End */}
      {/* Results Section Begin */}
      <section className="schedule-section spad">
        <div className="container">
          <div className="row">            
              <ResultMatches/>                    
            <div className="col-lg-4 col-md-6">
              <div className="schedule-sidebar">
                <Schedule/>                
                <TopLeagues/>                
                <OtherSport/>                
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Results Section End */}
    </>
  );
};

export default Result;