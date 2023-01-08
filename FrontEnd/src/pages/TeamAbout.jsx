import React from "react";
import { ClubContent } from "../Components/teamAboutComponents/ClubContent";
import { Hero } from "../Components/teamAboutComponents/Hero";
import { Players } from "../Components/teamAboutComponents/Players";

export const TeamAbout = () => {
  return (
    <>
      <Hero />

      {/* Club Section Begin */}
      <section className="club-section spad">
        <div className="container">
          <ClubContent />
          <Players />
        </div>
      </section>
      {/* Club Section End */}
    </>
  );
};
