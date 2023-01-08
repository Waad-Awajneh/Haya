import React, { useEffect, useState } from "react";
import {
  MDBAccordion,
  MDBAccordionItem,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTextArea,
  MDBTypography,
} from "mdb-react-ui-kit";

import { useSelector } from "react-redux";
import { useAuthUser } from "react-auth-kit";
import { useJquery } from "../hooks/useJquery";
import axios from "axios";

export default function SinglePost({ postId, toggleShow }) {
  const { reloadJquery } = useJquery();
  useEffect(() => {
    reloadJquery();
  });
  const userPosts = useSelector(
    (state) =>
      state.userData.data.data.User_posts.filter((ele) => {
        return ele.postId === postId;
      })[0]
  );
  const [comment, setComment] = useState({ content: "", post_id: postId });
  const auth = useAuthUser();
  const config = {
    method: "post",
    url: "http://127.0.0.1:8000/api/comment",
    headers: {
      Accept: "application/vnd.api+json",
      "Content-Type": "application/vnd.api+json",
      Authorization: "Bearer 4|qolVZ8XAw2ntBvUlrZnfeZsTeMNYWQ51cae8RKs3",
    },
    data: comment,
  };
  const handleComment = () => {
    axios(config)
      .then(function (response) {
        console.log(response.data);
        // toggleShow();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <section>
      <MDBContainer className="py-3" style={{ maxWidth: "1000px" }}>
        <MDBRow className="justify-content-center">
          <MDBCol md="12" lg="12" xl="12">
            <MDBCard>
              <MDBCardBody className="py-0 pt-3">
                <div className="d-flex flex-start align-items-center">
                  <MDBCardImage
                    className="rounded-circle shadow-1-strong me-3"
                    src={userPosts.post_Owner_photo}
                    alt="avatar"
                    width="60"
                    height="60"
                  />
                  <div>
                    <h6 className="fw-bold text-primary mb-1">
                      {userPosts.postOwner}
                    </h6>
                    <p className="text-muted small mb-0">
                      {userPosts.created_at.split("T")[0]} at{" "}
                      {userPosts.created_at.split("T")[1].slice(0, 5)}
                    </p>
                  </div>
                </div>

                <p className="mt-3 mb-4 pb-2">{userPosts.content}</p>

                <MDBAccordion flush className="p-0">
                  <MDBAccordionItem collapseId={1} headerTitle="Show Comments">
                    <MDBCardBody className="p-0 py-2">
                      {userPosts.postComments.map((comment) => {
                        return (
                          <div className="d-flex flex-start py-4">
                            <MDBCardImage
                              className="rounded-circle shadow-1-strong me-3"
                              src={comment.comment_Owner_photo}
                              alt="avatar"
                              width="60"
                              height="60"
                            />
                            <div>
                              <MDBTypography tag="h6" className="fw-bold mb-1">
                                {comment.comment_Owner}
                              </MDBTypography>
                              <div className="d-flex align-items-center mb-3">
                                <p className="mb-0 small text-muted">
                                  {comment.updated_at.split("T")[0]} at{" "}
                                  {comment.updated_at.split("T")[1].slice(0, 5)}
                                </p>
                              </div>
                              <p className="mb-0 text-dark">
                                {comment.comment_content}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </MDBCardBody>
                  </MDBAccordionItem>
                </MDBAccordion>
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
                    label="Message"
                    id="textAreaExample"
                    rows={2}
                    onChange={(e) => {
                      setComment((pervs) => ({
                        ...pervs,
                        content: e.target.value,
                      }));
                    }}
                    style={{ backgroundColor: "#fff" }}
                    wrapperClass="w-100"
                  />
                  <div className="d-flex align-items-center mx-2">
                    <MDBBtn onClick={handleComment}>
                      <i class="fas fa-paper-plane"></i>
                    </MDBBtn>
                  </div>
                </div>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
