import React, { useEffect } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import { ImGoogle } from "react-icons/im";
import LoginGoogle from "../Components/Google/login";


// import logo from "../asset/BrandFiles/3rood-low-resolution-logo-color-on-transparent-background.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useValidation from "../hooks/useValidation";
import axios from "axios";
import { useSignIn } from "react-auth-kit";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../fierbase";
import { v4 } from "uuid";
import $ from "jquery";

function Register() {
  const navigate = useNavigate();
  const signIn = useSignIn();
  const [image, setImage] = useState(null);
  const [userInfo, setUserInfo] = useState({
    first_name: "",
    last_name: "",
    password: "",
    profile_image: "",
    password_confirmation: "",
    email: "",
  });
  useEffect(() => {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  }, []);
  const {
    NameValidation,
    emailValidation,
    passwordValidation,
    message,
    setMessage,
    isNotEmptyValidation,
  } = useValidation();
  const config = {
    method: "post",
    url: "http://127.0.0.1:8000/api/register",
    headers: {
      Accept: "application/vnd.api+json",
      "Content-Type": "application/vnd.api+json",
    },
    data: userInfo,
  };
  const handleOnChange = (e) => {
    setUserInfo((pervs) => ({ ...pervs, [e.target.name]: e.target.value }));
  };
  const checkValidation = () => {
    let fName = NameValidation("first_name", userInfo.first_name);
    let lName = NameValidation("last_name", userInfo.last_name);
    let email = emailValidation(userInfo.email);
    let profile_image = isNotEmptyValidation(
      "profile_image",
      userInfo.profile_image
    );
    let pass = passwordValidation(
      userInfo.password,
      userInfo.password_confirmation
    );
    if (fName && lName && email && pass && profile_image) {
      return true;
    } else return false;
  };
  const uploadImage = () => {
    if (image == null) return;
    const imageRef = ref(storage, `userImage/${image.name + v4()}`);
    uploadBytes(imageRef, image).then((res) => {
      console.log(res);
      getDownloadURL(res.ref).then((response) => {
        console.log(response);
        setUserInfo((pervs) => ({ ...pervs, profile_image: response }));
      });
    });
  };
  const handleRegister = (e) => {
    e.preventDefault();
    if (checkValidation()) {
      console.log(userInfo);
      axios(config)
        .then(function (res) {
          if (
            signIn({
              token: res.data.token,
              expiresIn: 1000,
              tokenType: "Bearer",
              authState: {
                user: res.data.data.user,
                token: res.data.data.token,
                role: res.data.data.user.role,
              },
            })
          ) {
            return navigate("/");
          }
        })
        .catch(function (error) {
          console.log(error);
          setMessage({
            email: error.response.data.message,
          });
        });
    }
  };
  return (
    <>
      <MDBContainer
        fluid
        className="p-4 position-relative"
        style={{
          backgroundImage:
            'URL("https://digitalhub.fifa.com/transform/0321ae6b-d024-470f-95ae-09a1cd02b3ef/Commercial-Affiliates-Marketing-Workshop-Day-5?io=transform:fill,height:485,width:1023&quality=75")',
          backgroundSize: "cover",
        }}
      >
        <div className="overlay">
          <div
            className="position-absolute "
            style={{
              backgroundColor: "#00000069",

              height: "100%",
              width: "100%",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          ></div>
        </div>
        <MDBRow className="justify-content-around">
          <MDBCol
            md="6"
            className="text-center text-md-start d-flex flex-column justify-content-center"
          >
            <div
              style={{ backgroundColor: "#1400068f", zIndex: 1 }}
              className="rounded-5 text-center"
            >
              <h3 className="my-5 display-3 fw-bold ls-tight px-3 text-light">
                What you are waiting for? Join Us
              </h3>
            </div>
          </MDBCol>
          <MDBCol md="5">
            <form
              onSubmit={(e) => {
                handleRegister(e);
              }}
            >
              <MDBCard className="my-5">
                <MDBCardBody className="p-5">
                  <div className="text-center mb-5">
                    {/*     <img src={logo} height="60" alt="" loading="lazy" />*/}
                  </div>
                  <MDBRow className="d-flex justify-content-between">
                    <div className="col-6 ">
                      <p className="text-danger m-0 small">
                        {message.first_name}
                      </p>
                      <MDBInput
                        wrapperClass="mb-4"
                        label="First Name"
                        name="first_name"
                        id="form1"
                        type="text"
                        onChange={handleOnChange}
                      />
                    </div>
                    <div className="col-6 ">
                      <p className="text-danger m-0 small">
                        {message.last_name}
                      </p>
                      <MDBInput
                        wrapperClass="mb-4"
                        label="Last Name"
                        name="last_name"
                        id="form1"
                        type="text"
                        onChange={handleOnChange}
                      />
                    </div>
                    <div className="col-12 ">
                      <p className="text-danger m-0 small">{message.email}</p>
                      <MDBInput
                        wrapperClass="mb-4"
                        label="Email"
                        type="email"
                        name="email"
                        onChange={handleOnChange}
                      />
                    </div>
                    <p className="text-danger m-0 small">
                      {message.profile_image}
                    </p>

                    <p className="m-0">profile image</p>
                    <div className="col-8">
                      <MDBInput
                        wrapperClass="mb-4"
                        type="file"
                        name="profile_image"
                        onChange={(e) => {
                          setImage(e.target.files[0]);
                        }}
                      />
                    </div>
                    <div className="col-4 ">
                      <MDBBtn
                        className="w-100 mb-2"
                        size="md"
                        color="dark"
                        type="button"
                        onClick={uploadImage}
                      >
                        <i class="fas fa-cloud-upload-alt"></i>
                      </MDBBtn>
                    </div>
                    <p className="text-danger m-0 small">{message.password}</p>
                    <div className="col-6 ">
                      <MDBInput
                        wrapperClass="mb-4"
                        label="Password"
                        type="password"
                        name="password"
                        onChange={handleOnChange}
                      />
                    </div>
                    <div className="col-6 ">
                      <MDBInput
                        wrapperClass="mb-4"
                        label="Confirm Password"
                        type="password"
                        name="password_confirmation"
                        onChange={handleOnChange}
                      />
                    </div>
                  </MDBRow>

                  <MDBBtn className="w-100 mb-2" size="md" color="dark">
                    sign up
                  </MDBBtn>

                  <p className="text-center mb-1">or </p>
                  <LoginGoogle />

                  <div className="text-center mt-4">
                    do you have account ?
                    <Link className="text-dark" to="/login">
                      Login
                    </Link>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default Register;
