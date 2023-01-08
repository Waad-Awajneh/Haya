import { Link } from "react-router-dom"


const SoccerFeed = () => {

    return (
        <>
            {/* start Soccer Feed */}
        <section className="soccer-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 p-0">
                <div className="section-title">
                  <h3>
                    Soccer <span>Feed</span>
                  </h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-sm-6 p-0">
                <div
                  className="soccer-item set-bg"
                  data-setbg="img/soccer/soccer-1.jpg"
                >
                  <div className="si-tag">Soccer</div>
                  <div className="si-text">
                    <h5>
                      <Link to={''}>Counting Your Chicken Before They Hatch</Link>
                    </h5>
                    <ul>
                      <li>
                        <i className="fa fa-calendar" /> May 19, 2019
                      </li>
                      <li>
                        <i className="fa fa-edit" /> 3 Comment
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 p-0">
                <div
                  className="soccer-item set-bg"
                  data-setbg="img/soccer/soccer-2.jpg"
                >
                  <div className="si-tag">Soccer</div>
                  <div className="si-text">
                    <h5>
                      <Link to={''}>
                        Hypnotherapy For Motivation Getting The Drive Back
                      </Link>
                    </h5>
                    <ul>
                      <li>
                        <i className="fa fa-calendar" /> May 19, 2019
                      </li>
                      <li>
                        <i className="fa fa-edit" /> 3 Comment
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 p-0">
                <div
                  className="soccer-item set-bg"
                  data-setbg="img/soccer/soccer-3.jpg"
                >
                  <div className="si-tag">Soccer</div>
                  <div className="si-text">
                    <h5>
                      <Link to={''}>Astronomy Binoculars A Great Alternative</Link>
                    </h5>
                    <ul>
                      <li>
                        <i className="fa fa-calendar" /> May 19, 2019
                      </li>
                      <li>
                        <i className="fa fa-edit" /> 3 Comment
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 p-0">
                <div
                  className="soccer-item set-bg"
                  data-setbg="img/soccer/soccer-4.jpg"
                >
                  <div className="si-tag">Soccer</div>
                  <div className="si-text">
                    <h5>
                      <Link to={''}>Decorate For Less With Art Posters</Link>
                    </h5>
                    <ul>
                      <li>
                        <i className="fa fa-calendar" /> May 19, 2019
                      </li>
                      <li>
                        <i className="fa fa-edit" /> 3 Comment
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end soccer feed */}
        </>
    ) 

}

export default SoccerFeed;