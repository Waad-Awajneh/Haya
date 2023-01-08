import React from "react";

function Comments({ comments }) {
  console.log(comments);
  if (comments.length == 0) return "loading";
  return (
    <>
      <div className="comment-option">
        <h4>{comments.length} Comments</h4>

        {comments?.map((comment) => {
          let date = comment.created_at.split("T");
          console.log(date);
          return (
            <div className="single-comment-item ">
              <div className="sc-author">
                <img src={comment.user_info.profile_image} alt="" />
              </div>
              <div className="sc-text">
                <span>{date[0]}</span>
                <h5>
                  {comment.user_info.first_name}&nbsp;
                  {comment.user_info.last_name}
                </h5>
                <p>{comment.comment_content}</p>
                <a href="#" className="comment-btn like-btn">
                  Like
                </a>
                <a href="#" className="comment-btn">
                  Reply
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <div className="comment-form">
        <h4>Leave A Comment</h4>
        <form action="#">
          <div className="row">
            <div className="col-lg-6">
              <input type="text" placeholder="Name" />
            </div>
            <div className="col-lg-6">
              <input type="text" placeholder="Email" />
            </div>
            <div className="col-lg-12">
              <textarea placeholder="Comment" defaultValue={""} />
              <button type="submit">Post Comment</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Comments;
