import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import $ from "jquery";

import "./about.css";
import { Link } from "react-router-dom";
import { useJquery } from "../hooks/useJquery";

function About() {
  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  }, []);
  const { reloadJquery } = useJquery();

  useEffect(() => {
    reloadJquery();
  });
  return (
    <>
      <section
        className="breadcrumb-section set-bg"
        data-setbg="img/breadcrumb-bg.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="bs-text">
                <h2>About Us</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="img">
        <div className="container">
          <div class="we-are-block">
            <div id="about-us-section" data-aos="fade-down-right">
              <div class="about-us-image">
                <img
                  src="https://images.pexels.com/photos/270085/pexels-photo-270085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  width="808"
                  height="458"
                  alt="Lobby Image"
                />
              </div>

              <div class="about-us-info">
                <h2>Who Are We?</h2>

                <p>
                  website is an sports news website in the Middle East,
                  headquartered in Jordan, owned by United Media Group,The site
                  was established in 2022 and has specialized in providing
                  exclusive sports news, videos, live broadcast of events, match
                  summaries, TV broadcast schedules and many other services that
                  address the Arab world
                </p>

                <a href="../contact" title="About Us Button">
                  CONTACT US
                </a>
              </div>
            </div>

            <div id="history-section">
              <div class="history-image">
                <img
                  src="https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  width="951"
                  height="471"
                  alt="Building Pic"
                />
              </div>

              <div class="history-info">
                <h2>Mission</h2>

                <p>
                  Our website will also provide you with the best experience for
                  watching matches, daily summaries in all tournaments, by
                  working to put all the details for each match through a
                  special page for each match, to which the channels
                  transmitting match summaries and commentators are provided,
                  and match summaries are provided for most Arab countries,
                  while ensuring that the latest news is posted. European and
                  Arab sports, local and international, that the site will
                  provide you with full information about all European and Arab
                  teams
                </p>

                <Link to="/#hotVideo" title="History Button">
                  RESULTS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
