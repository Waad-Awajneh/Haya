import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardImage,
  MDBCol,
  MDBIcon,
  MDBPopover,
  MDBPopoverBody,
  MDBRow,
  MDBTextArea,
} from "mdb-react-ui-kit";
import { useAuthUser } from "react-auth-kit";
import { useJquery } from "../hooks/useJquery";
import { useDispatch } from "react-redux";
import axios from "axios";
import { getPosts } from "../Reducers/PostReduser";
import EditComment from "../Components/profileComponents/EditComment";
import EditPostCommunity from "../Components/profileComponents/EditPostCommunity";

export default function PostINAll({ postData }) {
  const { reloadJquery } = useJquery();
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(2);
  const [optSmModal, setOptSmModal] = useState(false);
  const toggleShow = () => setOptSmModal(!optSmModal);

  useEffect(() => {
    reloadJquery();
  });
  const [comment, setComment] = useState({
    content: "",
    post_id: postData.postId,
  });
  const dispatch = useDispatch();
  const auth = useAuthUser();

  const commentConfig = {
    method: "post",
    url: "http://127.0.0.1:8000/api/comment",
    headers: {
      Accept: "application/vnd.api+json",
      "Content-Type": "application/vnd.api+json",
      Authorization: `Bearer ${auth().token}`,
    },
    data: comment,
  };
  const handleComment = () => {
    if (comment.content === "") return null;
    axios(commentConfig)
      .then(function (res) {
        console.log(res.data);
        dispatch(getPosts());
        setLoading(!loading);
        setComment((pervs) => ({
          ...pervs,
          content: "",
        }));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleDelete = (id, action) => {
    const config = {
      method: "delete",
      url: `http://127.0.0.1:8000/api/${action}/${id}`,
      headers: {
        Accept: "application/vnd.api+json",
        "Content-Type": "application/vnd.api+json",
        Authorization: `Bearer ${auth().token}`,
      },
    };
    axios(config).then((resp) => {
      console.log(resp);
      dispatch(getPosts());
      setLoading(!loading);
    });
  };
  return (
    <section>
      <MDBRow className="justify-content-center py-3 ">
        <MDBCol>
          <MDBCard>
            <MDBCardBody className="py-0 pt-3 px-0">
              <div className="d-flex justify-content-between align-items-center px-3">
                <div className="d-flex flex-start align-items-center px-3">
                  <MDBCardImage
                    className="rounded-circle shadow-1-strong me-3"
                    src={postData.post_Owner_photo}
                    alt="avatar"
                    width="60"
                    height="60"
                  />
                  <div>
                    <h6 className="fw-bold  mb-1 " style={{ color: "#751f4a" }}>
                      {postData.postOwner}
                    </h6>
                    <p className="text-muted small mb-0">
                      {postData.created_at?.split("T")[0]} at{" "}
                      {postData.created_at?.split("T")[1].slice(0, 5)}
                    </p>
                  </div>
                </div>
                <div
                  className="align-self-start  rounded"
                  style={{ backgroundColor: "#e9e9e9" }}
                >
                  {postData.postOwnerId == auth().user.user_id ? (
                    <div>
                      <MDBPopover
                        size="sm"
                        color="danger"
                        btnChildren={<MDBIcon fas icon="trash-alt" />}
                        dismiss
                      >
                        <MDBPopoverBody>
                          <h6>Are you sure?</h6>
                          <p>You won't be able to revert this!</p>
                          <MDBBtn
                            color="danger"
                            onClick={() => {
                              handleDelete(postData.postId, "post");
                            }}
                          >
                            delete
                          </MDBBtn>
                        </MDBPopoverBody>
                      </MDBPopover>

                      <MDBIcon
                        fas
                        icon="edit"
                        className=" mx-2 "
                        style={{ fontSize: 18, cursor: "pointer" }}
                        onClick={toggleShow}
                      />
                      <EditPostCommunity
                        setBasicModal={setOptSmModal}
                        basicModal={optSmModal}
                        toggleShow={toggleShow}
                        postData={postData}
                      />
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>
              <p className="mt-3 mb-4 pb-2  px-4">{postData.content}</p>

              <MDBCardBody
                className="p-0 py-2 rounded  px-4"
                style={{ background: "#f9f9f9" }}
              >
                {postData.postComments.length > count ? (
                  <p
                    className="text-end me-3"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setCount(5 + count);
                    }}
                  >
                    View More Comments
                  </p>
                ) : null}
                {/* ------------------start post comments ---------------------- */}
                {postData.postComments.length != 0
                  ? postData.postComments.slice(-count).map((comment) => {
                      return (
                        <>
                          <div className="d-flex flex-column ">
                            <div className="d-flex flex-row align-items-center justify-content-between mb-3">
                              <div className="d-flex ">
                                <MDBCardImage
                                  src={comment.comment_Owner_photo}
                                  alt="avatar"
                                  width="45"
                                  height="45"
                                  className="rounded"
                                />
                                <span className="h6 mb-0 ms-2">
                                  {comment.comment_Owner}
                                  <p className="mb-0 small text-muted">
                                    {comment.updated_at.split("T")[0]} at{" "}
                                    {comment.updated_at
                                      ?.split("T")[1]
                                      ?.slice(0, 5)}
                                  </p>
                                </span>
                              </div>
                              {comment.comment_Owner_id ==
                              auth().user.user_id ? (
                                <div>
                                  <MDBPopover
                                    size="sm"
                                    color="danger"
                                    btnChildren={
                                      <MDBIcon fas icon="trash-alt" />
                                    }
                                    dismiss
                                  >
                                    <MDBPopoverBody>
                                      <h6>Are you sure?</h6>
                                      <p>You won't be able to revert this!</p>
                                      <MDBBtn
                                        color="danger"
                                        onClick={() => {
                                          handleDelete(
                                            comment.comment_id,
                                            "comment"
                                          );
                                        }}
                                      >
                                        delete
                                      </MDBBtn>
                                    </MDBPopoverBody>
                                  </MDBPopover>

                                  <MDBIcon
                                    fas
                                    icon="edit"
                                    className="ms-3 "
                                    style={{ fontSize: 18, cursor: "pointer" }}
                                    onClick={toggleShow}
                                  />
                                  <EditComment
                                    setBasicModal={setOptSmModal}
                                    basicModal={optSmModal}
                                    toggleShow={toggleShow}
                                    comment={comment}
                                  />
                                </div>
                              ) : (
                                <div></div>
                              )}
                            </div>
                            <div
                              className="d-flex flex-row align-items-center mx-5 text-muted p-2 rounded-5"
                              style={{ background: "#e9e9e9" }}
                            >
                              {comment.comment_content}
                            </div>
                          </div>
                          <hr className="w-75 mx-auto " />
                        </>
                      );
                    })
                  : null}
                {/* ------------------end post comments ---------------------- */}
              </MDBCardBody>
            </MDBCardBody>
            <MDBCardFooter
              className="py-3 border-0"
              style={{ backgroundColor: "#f8f9fa" }}
            >
              <div className="d-flex flex-start w-100">
                <MDBCardImage
                  className="rounded-circle shadow-1-strong me-3"
                  src={auth().user.profileImage}
                  alt="avatar"
                  width="40"
                  height="40"
                />
                <MDBTextArea
                  label="Write your Comment"
                  id="textAreaExample"
                  value={comment.content}
                  rows={2}
                  style={{ backgroundColor: "#fff" }}
                  wrapperClass="w-100"
                  onChange={(e) => {
                    setComment((pervs) => ({
                      ...pervs,
                      content: e.target.value,
                    }));
                  }}
                />
                <div className="d-flex align-items-center mx-2">
                  <MDBBtn
                    onClick={handleComment}
                    style={{ backgroundColor: "#751f4a" }}
                  >
                    <i class="fas fa-paper-plane"></i>
                  </MDBBtn>
                </div>
              </div>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </section>
  );
}
