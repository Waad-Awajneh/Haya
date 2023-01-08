import { Link } from "react-router-dom";

import { useAuthUser } from "react-auth-kit";
import { useIsAuthenticated } from "react-auth-kit";

const HeroSection = () => {
  const isAuthenticated = useIsAuthenticated();
  const auth = useAuthUser();

  return (
    <>
      {/* start of hero section and image  */}
      <section className="hero-section set-bg" data-setbg="img/hero/hero-1.jpg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hs-item">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="hs-text">
                        <h4>18 December 2022 / 10:00 PM</h4>
                        <h2>Argentina VS . France </h2>
                        <p>
                          Start with us on the predictions journey and follow
                          the latest match news with others{" "}
                        </p>

                        {!isAuthenticated() ? (
                          <Link
                            className="primary-btn"
                            style={{ backgrounColor: "#751f4a" }}
                            to={"register"}
                          >
                            Start Now
                          </Link>
                        ) : (
                          <Link
                            className="primary-btn"
                            style={{ backgrounColor: "#751f4a" }}
                            to={"Community"}
                          >
                            Start Now
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end of hero section and image */}
    </>
  );
};

export default HeroSection;
