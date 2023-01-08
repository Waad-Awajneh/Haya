import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useJquery } from "../hooks/useJquery";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../Reducers/PostReduser";
import { getArticles, getRandomArticles } from "../Reducers/ArticleReducer";
import $ from "jquery";
function Blog(props) {
  const { reloadJquery } = useJquery();
  useEffect(() => {
    reloadJquery();
  });
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles.articlesData);
  const [randomArticles, setRandomArticles] = useState([]);
  useEffect(() => {
    dispatch(getArticles());
  }, []);
  useEffect(() => {
    if (articles.length > 0) {
      let temp = [];
      for (let i = 0; i < 6; i++) {
        let random = Math.round(Math.random() * articles.length);
        temp = [...temp, articles[random]];

        console.log(randomArticles);
      }
      setRandomArticles([...temp]);
    }
  }, [articles]);

  {
    /***************************************************** */
  }

  useEffect(() => {
    reloadJquery();
  });
  const approvedPost = useSelector((state) => state.postsData.postsData);
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  console.log(approvedPost);
  useEffect(() => {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  }, []);

  if (articles.length === 0) return "loading...";
  return (
    <>
      <section
        // style={{ filter: "brightness(0.5)" }}
        className="breadcrumb-section set-bg"
        data-setbg="
        https://st2.depositphotos.com/1754991/8188/i/950/depositphotos_81881196-stock-photo-panorama-of-professional-football-stadium.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="bs-text py-3 "
                style={{ backgroundColor: "#00000091" }}
              >
                <h2>News</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-section spad">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-7 left-blog-pad">
              {/* <div
                className="large-blog"
                style={{ backgroundImage: `url(${articles[0].media})` }}
              >
                {console.log(articles[0]?.title)}
                <div className="bi-text">
                  <h3>
                    <Link to={`/NewsDetailes/${articles[0].article_id}`}>
                      {articles[0]?.title}
                    </Link>
                  </h3>
                  <ul>
                    <li>
                      <i className="fa fa-calendar" />
                      {articles[0].published_date}
                    </li>
                  </ul>
                </div>
             </div>*/}
              <div className="blog-items">
                {articles.slice(1, 5).map((article) => {
                  return (
                    <div
                      className="single-item "
                      style={{ float: "left", marginRight: "30px" }}
                    >
                      <img
                        style={{ borderRadius: " 2px", minWidth: "100%" }}
                        src={article.media}
                        alt=""
                      />

                      <div
                        className="bi-text"
                        style={{ overFlow: "hidden", paddingTop: "10px" }}
                      >
                        <h4>
                          <Link to={`/NewsDetailes/${article.article_id}`}>
                            {article.title}
                          </Link>
                        </h4>
                        <ul>
                          <li>
                            <i className="fa fa-calendar" />
                            {article.published_date}
                          </li>
                        </ul>
                        <p>{article.excerpt}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* <div className="more-blog">
                <a href="#">
                  <i className="fa fa-long-arrow-left" /> Older post
                </a>
                <a href="#">
                  Newer post <i className="fa fa-long-arrow-right" />
                </a>
              </div> */}
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-sidebar">
                <div className="bs-recent">
                  <div className="section-title sidebar-title">
                    <h5>Trending News</h5>
                  </div>
                  {randomArticles.slice(0, 5).map((article) => {
                    console.log(article);
                    return (
                      <div className="news-item">
                        <div className="ni-pic">
                          <img src={article.media} alt="" />
                        </div>
                        <div className="ni-text">
                          <h5>
                            <Link to={`/NewsDetailes/${article.article_id}`}>
                              {article.title}
                            </Link>
                          </h5>
                          <ul>
                            <li>
                              <i className="fa fa-calendar" />
                              {article.published_date}
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
      </section>
    </>
  );
}

export default Blog;
