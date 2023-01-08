import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getArticles } from "../../Reducers/ArticleReducer";
import { useJquery } from "../../hooks/useJquery";

const TrendingNews = () => {
  const articles = useSelector((state) => state.articles.articlesData);
  const dispatch = useDispatch();
  const { reloadJquery } = useJquery();

  useEffect(() => {
    reloadJquery();
  });

  useEffect(() => {
    dispatch(getArticles());
  }, []);

  return (
    <>
      {/* treding news (slider)======================== */}
      <div className="trending-news-section">
        <div className="container">
          <div className="tn-title">
            <i className="fa fa-caret-right" /> Trending News
          </div>
          <div className="news-slider owl-carousel">
            {articles?.slice(0, 1).map((news) => {
              return <div className="nt-item ms-3">{news.title}</div>;
            })}
          </div>
        </div>
      </div>
      {/* trending news end============================= */}
    </>
  );
};

export default TrendingNews;
