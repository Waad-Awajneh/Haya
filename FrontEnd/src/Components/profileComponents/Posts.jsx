import axios from "axios";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBIcon,
  MDBPopover,
  MDBPopoverBody,
  MDBTypography,
} from "mdb-react-ui-kit";
import React, { useState } from "react";
import { useAuthUser } from "react-auth-kit";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getPosts } from "../../Reducers/PostReduser";
import { fetchUserData } from "../../Reducers/ProfileReducer";
import EditPost from "./EditPost";
import ProfilePostModel from "./ProfilePostModel";

export const Posts = ({ postData }) => {
  const [optSmModal, setOptSmModal] = useState(false);
  const [optSmModal2, setOptSmModal2] = useState(false);
  const toggleShow = () => setOptSmModal(!optSmModal);
  const toggleShow2 = () => setOptSmModal2(!optSmModal2);
  const auth = useAuthUser();
  const dispatch = useDispatch();

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
    const profileConfig = {
      method: "get",
      url: "http://127.0.0.1:8000/api/profile",
      headers: {
        Accept: "application/vnd.api+json",
        "Content-Type": "application/vnd.api+json",
        Authorization: `Bearer ${auth().token}`,
      },
    };
    axios(config).then((resp) => {
      console.log(resp);
      dispatch(fetchUserData(profileConfig));
    });
  };
  return (
    <>
      <MDBCol md="10" lg="12" xl="12">
        <div className="d-flex flex-start mb-4">
          <img
            className="rounded-circle shadow-1-strong me-3"
            src={postData.post_Owner_photo}
            alt="avatar"
            width="65"
            height="65"
          />

          <MDBCard className="w-100">
            <MDBCardBody className="p-4">
              <div>
                <div className="d-flex justify-content-between ">
                  <div>
                    <MDBTypography tag="h5">{postData.postOwner}</MDBTypography>
                    <p className="small">
                      {postData.created_at.split("T")[0]} at{" "}
                      {postData.created_at.split("T")[1].slice(0, 5)}
                    </p>
                  </div>
                  <div>
                    <MDBIcon
                      fas
                      className="me-3"
                      icon="edit"
                      onClick={toggleShow2}
                      style={{ fontSize: 20, cursor: "pointer" }}
                    />
                    <EditPost
                      toggleShow={toggleShow2}
                      setBasicModal={setOptSmModal2}
                      basicModal={optSmModal2}
                      postId={postData.postId}
                    />
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
                  </div>
                </div>
                <p>{postData.content}</p>

                <div className="d-flex justify-content-between align-items-center">
                  <p></p>
                  <Link className="link-muted" onClick={toggleShow}>
                    <MDBIcon fas icon="reply me-1" />
                    View Comments
                  </Link>
                  <ProfilePostModel
                    toggleShow={toggleShow}
                    setOptSmModal={setOptSmModal}
                    optSmModal={optSmModal}
                    postData={postData}
                  />
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </div>
      </MDBCol>
    </>
  );
};
