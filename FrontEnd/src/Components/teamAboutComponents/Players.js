import React from "react";

export const Players = () => {
  return (
    <>
      <div className="club-tab-list">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item ">
                <p className="nav-link active" data-toggle="tab" role="tab">
                  Substitute
                </p>
              </li>
              <li className="nav-item">
                <p className="nav-link" data-toggle="tab" role="tab">
                  Midfielder
                </p>
              </li>
              <li className="nav-item">
                <p className="nav-link" data-toggle="tab" role="tab">
                  Forward
                </p>
              </li>
              <li className="nav-item">
                <p className="nav-link" data-toggle="tab" role="tab">
                  Goalkeeper
                </p>
              </li>
              <li className="nav-item">
                <p className="nav-link" data-toggle="tab" role="tab">
                  Sweeper
                </p>
              </li>
            </ul>

            {/* Tab panes */}
            <div className="tab-content">
              <div className="tab-pane active" id="tabs-1" role="tabpanel">
                <div className="club-tab-content">
                  <div className="ct-item">
                    <div className="ci-text">
                      <img src="img/club/p-1.jpg" alt="" />
                      <h5>12. Buddy Peck</h5>
                    </div>
                    <div className="ci-name">Forward</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
