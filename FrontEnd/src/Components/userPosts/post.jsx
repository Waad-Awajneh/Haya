export const Post = () => {
  return (
    <>
      {/* Page Preloder */}
      <div id="preloder">
        <div className="loader" />
      </div>
      {/* Offcanvas Menu Section Begin */}
      <div className="offcanvas-menu-overlay" />
      <div className="offcanvas-menu-wrapper">
        <div className="canvas-close">
          <i className="fa fa-close" />
        </div>
        <div className="search-btn search-switch">
          <i className="fa fa-search" />
        </div>
        <div className="header__top--canvas">
          <div className="ht-info">
            <ul>
              <li>20:00 - May 19, 2019</li>
              <li>
                <a href="#">Sign in</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="ht-links">
            <a href="#">
              <i className="fa fa-facebook" />
            </a>
            <a href="#">
              <i className="fa fa-vimeo" />
            </a>
            <a href="#">
              <i className="fa fa-twitter" />
            </a>
            <a href="#">
              <i className="fa fa-google-plus" />
            </a>
            <a href="#">
              <i className="fa fa-instagram" />
            </a>
          </div>
        </div>
        <ul className="main-menu mobile-menu">
          <li className="active">
            <a href="./index.html">Home</a>
          </li>
          <li>
            <a href="./club.html">Club</a>
          </li>
          <li>
            <a href="./schedule.html">Schedule</a>
          </li>
          <li>
            <a href="./result.html">Results</a>
          </li>
          <li>
            <a href="#">Sport</a>
          </li>
          <li>
            <a href="#">Pages</a>
            <ul className="dropdown">
              <li>
                <a href="./blog.html">Blog</a>
              </li>
              <li>
                <a href="./blog-details.html">Blog Details</a>
              </li>
              <li>
                <a href="#">Schedule</a>
              </li>
              <li>
                <a href="#">Results</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="./contact.html">Contact Us</a>
          </li>
        </ul>
        <div id="mobile-menu-wrap" />
      </div>
      {/* Offcanvas Menu Section End */}
      {/* Header Section Begin */}
      <header className="header-section">
        <div className="header__top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="ht-info">
                  <ul>
                    <li>20:00 - May 19, 2019</li>
                    <li>
                      <a href="#">Sign in</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="ht-links">
                  <a href="#">
                    <i className="fa fa-facebook" />
                  </a>
                  <a href="#">
                    <i className="fa fa-vimeo" />
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fa fa-google-plus" />
                  </a>
                  <a href="#">
                    <i className="fa fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header__nav">
          <div className="container">
            <div className="row">
              <div className="col-lg-2">
                <div className="logo">
                  <a href="./index.html">
                    <img src="img/logo.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="col-lg-10">
                <div className="nav-menu">
                  <ul className="main-menu">
                    <li>
                      <a href="./index.html">Home</a>
                    </li>
                    <li>
                      <a href="./club.html">Club</a>
                    </li>
                    <li>
                      <a href="./schedule.html">Sporstpress</a>
                    </li>
                    <li className="active">
                      <a href="./result.html">News</a>
                    </li>
                    <li>
                      <a href="#">Sport</a>
                    </li>
                    <li>
                      <a href="#">Pages</a>
                      <ul className="dropdown">
                        <li>
                          <a href="./blog.html">Blog</a>
                        </li>
                        <li>
                          <a href="./blog-details.html">Blog Details</a>
                        </li>
                        <li>
                          <a href="#">Schedule</a>
                        </li>
                        <li>
                          <a href="#">Results</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="./contact.html">Contact Us</a>
                    </li>
                  </ul>
                  <div className="nm-right search-switch">
                    <i className="fa fa-search" />
                  </div>
                </div>
              </div>
            </div>
            <div className="canvas-open">
              <i className="fa fa-bars" />
            </div>
          </div>
        </div>
      </header>
      {/* Header End */}
      {/* Breadcrumb Section Begin */}
      <section
        className="breadcrumb-section set-bg"
        data-setbg="img/breadcrumb-bg.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="bs-text">
                <h2>Blog</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb Section End */}
      {/* Blog Section Begin */}
      <section className="blog-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 left-blog-pad">
              <div
                className="large-blog set-bg"
                data-setbg="img/blog/blog-1.jpg"
              >
                <div className="bi-tag">Soccer</div>
                <div className="bi-text">
                  <h3>
                    <a href="./blog-details.html">
                      England Women 1-0 Argentina Women: Taylor guarantees
                      Lionesses' path to last 16
                    </a>
                  </h3>
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
              <div className="blog-items">
                <div className="single-item">
                  <div className="bi-pic">
                    <img src="img/blog/blog-2.jpg" alt="" />
                  </div>
                  <div className="bi-text">
                    <h4>
                      <a href="./blog-details.html">
                        Jodie Taylor celebrates her first goal of the tournament
                      </a>
                    </h4>
                    <ul>
                      <li>
                        <i className="fa fa-calendar" /> May 19, 2019
                      </li>
                      <li>
                        <i className="fa fa-edit" /> 3 Comment
                      </li>
                    </ul>
                    <p>
                      It’s that time again when people start thinking about
                      their New Years Resolutions. Usually they involve, losing
                      weight, quitting smoking, and joining a gym, just to
                      mention a few.
                    </p>
                  </div>
                </div>
                <div className="single-item">
                  <div className="bi-pic">
                    <img src="img/blog/blog-3.jpg" alt="" />
                  </div>
                  <div className="bi-text">
                    <h4>
                      <a href="./blog-details.html">
                        Vanina Correa keeps out Nikita Parris' first-half
                        penalty
                      </a>
                    </h4>
                    <ul>
                      <li>
                        <i className="fa fa-calendar" /> May 19, 2019
                      </li>
                      <li>
                        <i className="fa fa-edit" /> 3 Comment
                      </li>
                    </ul>
                    <p>
                      It’s that time again when people start thinking about
                      their New Years Resolutions. Usually they involve, losing
                      weight, quitting smoking, and joining a gym, just to
                      mention a few.
                    </p>
                  </div>
                </div>
                <div className="single-item">
                  <div className="bi-pic">
                    <img src="img/blog/blog-4.jpg" alt="" />
                  </div>
                  <div className="bi-text">
                    <h4>
                      <a href="./blog-details.html">
                        Derby will demand £4m for Lampard next year
                      </a>
                    </h4>
                    <ul>
                      <li>
                        <i className="fa fa-calendar" /> May 19, 2019
                      </li>
                      <li>
                        <i className="fa fa-edit" /> 3 Comment
                      </li>
                    </ul>
                    <p>
                      It’s that time again when people start thinking about
                      their New Years Resolutions. Usually they involve, losing
                      weight, quitting smoking, and joining a gym, just to
                      mention a few.
                    </p>
                  </div>
                </div>
                <div className="single-item">
                  <div className="bi-pic">
                    <img src="img/blog/blog-5.jpg" alt="" />
                  </div>
                  <div className="bi-text">
                    <h4>
                      <a href="./blog-details.html">
                        Virgil van Dijk says Liverpool are hungry for more
                        success
                      </a>
                    </h4>
                    <ul>
                      <li>
                        <i className="fa fa-calendar" /> May 19, 2019
                      </li>
                      <li>
                        <i className="fa fa-edit" /> 3 Comment
                      </li>
                    </ul>
                    <p>
                      It’s that time again when people start thinking about
                      their New Years Resolutions. Usually they involve, losing
                      weight, quitting smoking, and joining a gym, just to
                      mention a few.
                    </p>
                  </div>
                </div>
              </div>
              <div className="more-blog">
                <a href="#">
                  <i className="fa fa-long-arrow-left" /> Older post
                </a>
                <a href="#">
                  Newer post <i className="fa fa-long-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-sidebar">
                <div className="bs-categories">
                  <div className="section-title sidebar-title">
                    <h5>Categories</h5>
                  </div>
                  <ul>
                    <li>
                      <a href="#">Fool Ball</a>
                    </li>
                    <li>
                      <a href="#">Soccer</a>
                    </li>
                    <li>
                      <a href="#">basketball</a>
                    </li>
                    <li>
                      <a href="#">Volleyball</a>
                    </li>
                    <li>
                      <a href="#">E-Sport</a>
                    </li>
                  </ul>
                </div>
                <div className="follow-links">
                  <div className="section-title sidebar-title">
                    <h5>Follow</h5>
                  </div>
                  <ul>
                    <li className="facebook">
                      <i className="fa fa-facebook" />
                      <div className="fl-name">Facebook</div>
                      <span className="fl-fan">2.530 Fans</span>
                    </li>
                    <li className="twitter">
                      <i className="fa fa-twitter" />
                      <div className="fl-name">Twitter</div>
                      <span className="fl-fan">2.046 Fans</span>
                    </li>
                    <li className="google">
                      <i className="fa fa-google" />
                      <div className="fl-name">Google</div>
                      <span className="fl-fan">1.170 Fans</span>
                    </li>
                  </ul>
                </div>
                <div className="bs-recent">
                  <div className="section-title sidebar-title">
                    <h5>Recent Post</h5>
                  </div>
                  <div className="news-item">
                    <div className="ni-pic">
                      <img src="img/news/ln-1.jpg" alt="" />
                    </div>
                    <div className="ni-text">
                      <h5>
                        <a href="#">How To Quit Smoking Using Zyban</a>
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
                  <div className="news-item">
                    <div className="ni-pic">
                      <img src="img/news/ln-2.jpg" alt="" />
                    </div>
                    <div className="ni-text">
                      <h5>
                        <a href="#">Decorate For Less With Art Posters</a>
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
                  <div className="news-item">
                    <div className="ni-pic">
                      <img src="img/news/ln-3.jpg" alt="" />
                    </div>
                    <div className="ni-text">
                      <h5>
                        <a href="#">Home Business Advertising Ideas</a>
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
                  <div className="news-item">
                    <div className="ni-pic">
                      <img src="img/news/ln-4.jpg" alt="" />
                    </div>
                    <div className="ni-text">
                      <h5>
                        <a href="#">Lasik Doesn T Stop Your Eyes From Aging</a>
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
                <div className="bs-popular-tag">
                  <div className="section-title sidebar-title">
                    <h5>Popular Tag</h5>
                  </div>
                  <div className="tags">
                    <a href="#">Seagame</a>
                    <a href="#">Fifa</a>
                    <a href="#">World Cup 2019</a>
                    <a href="#">Championship</a>
                    <a href="#">2019</a>
                    <a href="#">Qatar</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Section End */}
      {/* Footer Section Begin */}
      <footer className="footer-section set-bg" data-setbg="img/footer-bg.jpg">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="fs-logo">
                <div className="logo">
                  <a href="./index.html">
                    <img src="img/logo.png" alt="" />
                  </a>
                </div>
                <ul>
                  <li>
                    <i className="fa fa-envelope" /> Info.colorlib@gmail.com
                  </li>
                  <li>
                    <i className="fa fa-copy" /> +(12) 345 6789 10
                  </li>
                  <li>
                    <i className="fa fa-thumb-tack" /> 40 Baria Sreet 133/2 New
                    York City, United State
                  </li>
                </ul>
                <div className="fs-social">
                  <a href="#">
                    <i className="fa fa-facebook" />
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fa fa-tumblr" />
                  </a>
                  <a href="#">
                    <i className="fa fa-linkedin" />
                  </a>
                  <a href="#">
                    <i className="fa fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 offset-lg-1">
              <div className="fs-widget">
                <h4>Top Club</h4>
                <ul className="fw-links">
                  <li>
                    <a href="#">Brazil</a>
                  </li>
                  <li>
                    <a href="#">Germany</a>
                  </li>
                  <li>
                    <a href="#">Italy</a>
                  </li>
                  <li>
                    <a href="#">Argentina</a>
                  </li>
                  <li>
                    <a href="#">France</a>
                  </li>
                </ul>
                <ul className="fw-links">
                  <li>
                    <a href="#">England</a>
                  </li>
                  <li>
                    <a href="#">Netherlands</a>
                  </li>
                  <li>
                    <a href="#">Hungary</a>
                  </li>
                  <li>
                    <a href="#">Croatia</a>
                  </li>
                  <li>
                    <a href="#">Poland</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="fs-widget">
                <h4>Recent News</h4>
                <div className="fw-item">
                  <h5>
                    <a href="#">
                      England win shows they have the spark to go far at World
                      Cup
                    </a>
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
                <div className="fw-item">
                  <h5>
                    <a href="#">
                      Sri Lanka v Australia: Cricket World Cup 2019 – live!
                    </a>
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
        <div className="container">
          <div className="copyright-option">
            <div className="row">
              <div className="col-lg-12">
                <div className="co-text">
                  <p>
                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                    Copyright © All rights reserved | This template is made with{" "}
                    <i className="fa fa-heart" aria-hidden="true" /> by{" "}
                    <a href="https://colorlib.com" target="_blank">
                      Colorlib
                    </a>
                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  </p>
                </div>
                <div className="co-widget">
                  <ul>
                    <li>
                      <a href="#">Copyright notification</a>
                    </li>
                    <li>
                      <a href="#">Terms of Use</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer Section End */}
      {/* Search model Begin */}
      <div className="search-model">
        <div className="h-100 d-flex align-items-center justify-content-center">
          <div className="search-close-switch">
            <i className="fa fa-close" />
          </div>
          <form className="search-model-form">
            <input
              type="text"
              id="search-input"
              placeholder="Search here....."
            />
          </form>
        </div>
      </div>
      {/* Search model end */}
      {/* Js Plugins */}
    </>
  );
};
