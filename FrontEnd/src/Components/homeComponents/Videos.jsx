/* eslint-disable no-undef */
import { MDBSpinner } from "mdb-react-ui-kit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useJquery } from "../../hooks/useJquery";
import { fetchVideo } from "../../Reducers/VedioReducer";

const Videos = () => {
  const dispatch = useDispatch();
  const { reloadJquery } = useJquery();
  const videos = useSelector((state) => state.videos.data);
  useEffect(() => {
    reloadJquery();
  });
  useEffect(() => {
    if (videos.length == 0) {
      dispatch(fetchVideo());
    }
  }, []);

  if (videos.length == 0) {
    console.log("sss");
    return (
      <MDBSpinner className="me-2" style={{ width: "3rem", height: "3rem" }}>
        <span className="visually-hidden">Loading...</span>
      </MDBSpinner>
    );
  }
  return (
    <>
      {/* start vedios section */}
      <section className="video-section" id="#hotVideo">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h3>
                  Hot <span>Videos</span>
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="video-slider owl-carousel">
              {videos.map((ele) => {
                console.log(ele.snippet.title);
                return (
                  <div className="px-3" key={ele.id}>
                    <div
                      className="video-item set-bg"
                      data-setbg={ele.snippet.thumbnails.high.url}
                    >
                      <a
                        href={
                          "https://www.youtube.com/watch?v=" +
                          ele.snippet.resourceId.videoId
                        }
                        className="play-btn video-popup"
                      >
                        <img src="img/videos/play.png" alt="" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* end vedios section */}
    </>
  );
};
export default Videos;
