import axios from "axios";
import { MDBBtn, MDBCard, MDBCardImage, MDBTextArea } from "mdb-react-ui-kit";
import React, { useState } from "react";
import { useAuthUser } from "react-auth-kit";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { getPosts } from "../../Reducers/PostReduser";

export const AddPost = () => {
  const auth = useAuthUser();
  const [newPost, setNewPost] = useState({
    content: "",
  });
  const dispatch = useDispatch();

  const config = {
    method: "post",
    url: `http://127.0.0.1:8000/api/post/`,
    headers: {
      Accept: "application/vnd.api+json",
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${auth().token}`,
    },
    data: newPost,
  };
  const handleAddNewPost = () => {
    if (newPost.content === "") return null;
    axios(config)
      .then(function (res) {
        console.log(res.data);
        const Toast = Swal.mixin({
          toast: true,
          position: "top-right",
          iconColor: "white",
          customClass: {
            popup: "colored-toast",
          },
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
        });
        Toast.fire({
          icon: "success",
          title: "your post published successfully",
        });
        dispatch(getPosts());
        setNewPost((pervs) => ({ ...pervs, content: "" }));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <MDBCard className="py-3 px-4">
        <div className="d-flex flex-column w-100">
          <div className="d-flex flex-start align-items-center py-3">
            <MDBCardImage
              className="rounded-circle shadow-1-strong me-3"
              src={auth().user.profileImage}
              alt="avatar"
              width="60"
              height="60"
            />
            <h6 className="fw-bold mb-1 " style={{ color: "#751f4a" }}>
              {auth().user.firstName + " " + auth().user.lastName}
            </h6>
            <div></div>
          </div>
          <MDBTextArea
            label="Write your Post"
            id="textAreaExample"
            rows={3}
            value={newPost.content}
            style={{ backgroundColor: "#fff" }}
            wrapperClass="w-100"
            onChange={(e) => {
              setNewPost((pervs) => ({ ...pervs, content: e.target.value }));
            }}
          />
          <div className="text-end mt-3">
            <MDBBtn
              style={{ backgroundColor: "#751f4a" }}
              onClick={handleAddNewPost}
            >
              {" "}
              <i class="fas fa-share-square"></i> Share
            </MDBBtn>
          </div>
        </div>
      </MDBCard>
    </>
  );
};
