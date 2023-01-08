import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useJquery } from "../hooks/useJquery";
import { getPosts } from "../Reducers/PostReduser";
import PostINAll from "./PostINAll";
import $ from "jquery";
import { AddPost } from "../Components/profileComponents/AddPost";

export const AllPosts = () => {
  const { reloadJquery } = useJquery();
  const dispatch = useDispatch();
  useEffect(() => {
    reloadJquery();
  });
  const approved = useSelector((state) => state.postsData.postsData);
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  console.log(approved);
  useEffect(() => {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  }, []);
  return (
    <>
      <section className="popular-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 my-4">
              <AddPost />
              {approved.map((ele) => {
                return <PostINAll postData={ele} />;
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
