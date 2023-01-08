import React from "react";
import img from "../../asset/breadcrumb-bg.jpg";
export const Hero = () => {
  return (
    <>
      <section className="breadcrumb-section set-bg" data-setbg={img}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="bs-text">
                <h2>Club</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
