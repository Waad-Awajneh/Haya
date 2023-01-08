import React from "react";

function HeroDetailes({ articleDetail }) {
  return (
    <div>
      <>
        <section
          className="blog-hero-section "
          style={{
            backgroundImage: `url(${articleDetail.media})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          data-setbg="img/blog/details/details-1.jpg"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div
                  className="bh-text"
                  style={{ backgroundColor: `#0000009c` }}
                >
                  <h2>{articleDetail.title}</h2>
                  <ul></ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
}

export default HeroDetailes;
