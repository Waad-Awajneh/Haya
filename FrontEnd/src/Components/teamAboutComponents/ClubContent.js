import React from "react";

export const ClubContent = () => {
  return (
    <div>
      <div className="club-content">
        <div className="row">
          <div className="col-lg-5">
            <div className="cc-pic">
              <img src="img/club-logo.png" alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="cc-text">
              <div className="ct-title">
                <h3>Club Brazil</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.{" "}
                </p>
              </div>
              <div className="ct-widget">
                <ul>
                  <li>
                    <h5>Established</h5>
                    <p>Since 1987</p>
                  </li>
                  <li>
                    <h5>Former President</h5>
                    <p>John Martin</p>
                  </li>
                  <li>
                    <h5>A skipper</h5>
                    <p>Jack Hadison</p>
                  </li>
                  <li>
                    <h5>Total Matches</h5>
                    <p>78</p>
                  </li>
                  <li>
                    <h5>Location</h5>
                    <p>Brasilia, Brazil</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};