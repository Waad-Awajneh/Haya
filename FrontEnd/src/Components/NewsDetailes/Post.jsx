import React from "react";
import { Link } from "react-router-dom";
import Comments from "./Comments";

function Post({ articleDetail, recentArticles }) {
  return (
    <div>
      <section className="blog-details-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 left-blog-pad">
              <div className="bd-text">
                <div className="bd-title">
                  <h1 className="title">{articleDetail.title}</h1>

                  <div className="author ">
                    <span className="d-flex align-items-center">
                      By : &nbsp;<p> {articleDetail.author} </p>&nbsp;&nbsp;
                      <i className="fa fa-calendar" style={{ color: "red" }} />
                      &nbsp;
                      {articleDetail.published_date}
                    </span>
                  </div>
                  <p>{articleDetail.excerpt}</p>
                </div>
                <div className="bd-pic">
                  <div className="row" style={{ width: "50%" }}>
                    <img src={articleDetail.media} alt="" />
                  </div>
                </div>

                <div className="bd-more-title">
                  <p>{articleDetail.summary}</p>
                </div>

                {/* <Comments comments={articleDetail.comments} /> */}
              </div>
            </div>

            <div className="col-lg-4">
              <div className="blog-sidebar">
                <div className="follow-links">
                  <div className="bs-recent">
                    <div className="section-title sidebar-title">
                      <h5>Recent News</h5>
                    </div>
                    {recentArticles.slice(0, 5).map((element) => {
                      return (
                        <div className="news-item">
                          <div className="ni-pic">
                            <img src={element.media} />
                          </div>
                          <div className="ni-text">
                            <h5>
                              <Link to={`/NewsDetailes/${element.article_id}`}>
                                {element.title}
                              </Link>
                            </h5>
                            <ul>
                              <li>
                                <i className="fa fa-calendar " />

                                {element.published_date}
                              </li>
                            </ul>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Post;
