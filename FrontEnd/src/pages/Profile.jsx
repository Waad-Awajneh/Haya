import React, { useEffect } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
  MDBSpinner,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { Posts } from "../Components/profileComponents/Posts";
import { useAuthUser } from "react-auth-kit";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../Reducers/ProfileReducer";
import { useJquery } from "../hooks/useJquery";
import $ from "jquery";

function Profile() {
  const auth = useAuthUser();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData.data);
  const { reloadJquery } = useJquery();
  useEffect(() => {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  }, []);
  const config = {
    method: "get",
    url: "http://127.0.0.1:8000/api/profile",
    headers: {
      Accept: "application/vnd.api+json",
      "Content-Type": "application/vnd.api+json",
      Authorization: `Bearer ${auth().token}`,
    },
  };
  useEffect(() => {
    reloadJquery();
  });
  useEffect(() => {
    dispatch(fetchUserData(config));
  }, []);
  if (userData.length == 0) {
    return (
      <div
        style={{ height: "65vh" }}
        className="d-flex justify-content-center align-items-center"
      >
        <MDBSpinner className="me-2 " style={{ width: "3rem", height: "3rem" }}>
          <span className="visually-hidden">Loading...</span>
        </MDBSpinner>
      </div>
    );
  }

  return (
    <div className="gradient-custom-2" style={{ backgroundColor: "#e9e9e9" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="12" xl="12">
            <MDBCard>
              <div
                className="rounded-top text-white d-flex flex-row"
                style={{ backgroundColor: "#000", height: "200px" }}
              >
                <div
                  className="ms-4 mt-5 d-flex flex-column"
                  style={{ width: "180px" }}
                >
                  <MDBCardImage
                    src={userData.data.profileImage}
                    alt="Generic placeholder image"
                    className="mt-4 mb-2 img-thumbnail"
                    fluid
                    style={{ width: "180px", zIndex: "1" }}
                  />
                </div>
                <div
                  className="ms-3 text-capitalize"
                  style={{ marginTop: "130px" }}
                >
                  <MDBTypography tag="h5">
                    {userData.data.firstName} {userData.data.lastName}
                  </MDBTypography>
                  <MDBCardText>{userData.data.email}</MDBCardText>
                </div>
              </div>
              <div
                className="p-4 text-black"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                <div className="d-flex justify-content-end text-center py-1">
                  <div>
                    <MDBCardText className="mb-1 h5">
                      {userData.data.User_posts.length}
                    </MDBCardText>
                    <MDBCardText className="small text-muted mb-0">
                      Posts
                    </MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="mb-1 h5">
                      {userData.data.userPoints}
                    </MDBCardText>
                    <MDBCardText className="small text-muted mb-0">
                      Points
                    </MDBCardText>
                  </div>
                </div>
              </div>
              <MDBCardBody className="text-black p-4">
                {/* ----------------------------posts---------------------------------------- */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <MDBCardText className="lead fw-normal mb-0">
                    Recent Posts
                  </MDBCardText>
                </div>
                <MDBRow className="justify-content-center">
                  {userData.data.User_posts.map((ele) => {
                    if (ele.status == "approved") {
                      return <Posts postData={ele} />;
                    }
                  })}
                </MDBRow>
                {/* <hr /> */}
                {/* -----------------------------saved news-------------------------------------- */}
                {/* <div className="">
                  <p className="lead fw-normal mb-1">Saved News</p>
                  <div className="mt-3 row">
                    {userData.data.saved_Articles.map((ele) => {
                      return (
                        <div className="col-md-4">
                          <div
                            className="news-item popular-item set-bg"
                            data-setbg={ele.media}
                            style={{ filter: "brightness(0.6)" }}
                          >
                            <div className="ni-text">
                              <h5>
                                <Link to={""}>{ele.title}</Link>
                              </h5>
                              <ul>
                                <li>
                                  <i className="fa fa-calendar" /> May 19, 2019
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div> */}
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
export default Profile;
