import React, { useState } from "react";
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
// import logo from "../asset/BrandFiles/3rood-low-resolution-logo-color-on-transparent-background.png";
import { Link, useNavigate } from "react-router-dom";
import { useSignIn } from "react-auth-kit";
import axios from "axios";
import LoginGoogle from "../Components/Google/login";
import Logout from "../Components/Google/logout";

function Login() {
  const [credential, seCredential] = useState({ email: "", password: "" });
  const [message, setMessage] = useState({ clintError: "", serverError: "" });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const signIn = useSignIn();
  const navigate = useNavigate();
  const data = new FormData();

  let config = {
    method: "post",
    url: "http://127.0.0.1:8000/api/login",
    headers: {
      Acc: "application/vnd.api+json",
      "Content-Type": "application/vnd.api+json",
    },
    data: data,
  };
  const handleChange = (e) => {
    seCredential({ ...credential, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    setError(false);
    setMessage({ clintError: "", serverError: "" });
    //check if email and pass in not empty
    if (credential.email == "" || credential.password == "") {
      setError(true);
      setMessage({
        serverError: "",
        clintError: "please inter your email and password",
      });
    } else {
      setLoading(true);
      // append email and pass with request
      data.append("email", credential.email);
      data.append("password", credential.password);
      axios(config)
        .then(function (res) {
          console.log(res.data);
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
          setLoading(false);
        })
        .catch(function (error) {
          setError(true);
          setMessage({
            clintError: "",
            serverError: error.response.data.message,
          });
          console.log(error);
          setLoading(false);
        });
    }
  };
  return (
    <>
      <MDBContainer
        fluid
        className="p-4 position-relative "
        style={{
          backgroundImage:
            'URL("https://digitalhub.fifa.com/transform/29f0eb54-ee32-4c22-a829-52ea02a6ffae/qvbxqr5uir54g7nxgsea-jpg")',
          backgroundSize: "cover",
        }}
      >
        <div class="overlay">
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
        <MDBRow className="justify-content-around me-md-4">
          <MDBCol
            md="6"
            className="text-center text-md-start d-flex flex-column justify-content-center"
          >
            <div
              style={{ backgroundColor: "#00000069", zIndex: 1 }}
              className="rounded-5 text-center"
            >
              <h3 className="my-5 display-3 fw-bold ls-tight px-3 text-light">
                Happy to see you again, Log In!
              </h3>
            </div>
          </MDBCol>
          <MDBCol md="4">
            <MDBCard className="my-5">
              <MDBCardBody className="p-5">
                <div className="text-center mb-3">
                  {/*  <img src={logo} height="60" alt="" loading="lazy" />*/}
                  <h5 className="mt-3 m-0">Welcome Again </h5>
                </div>
                {error ? (
                  <div
                    className="text-danger text-center p-2 mb-2 rounded-5 small"
                    style={{ backgroundColor: "#f9c7c4" }}
                  >
                    {message.clintError}
                    {message.serverError}
                  </div>
                ) : (
                  ""
                )}
                <MDBInput
                  wrapperClass="mb-4"
                  label="Email"
                  type="email"
                  name="email"
                  onChange={handleChange}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  type="password"
                  name="password"
                  onChange={handleChange}
                />
                {!loading ? (
                  <MDBBtn
                    className="w-100 mb-2"
                    size="md"
                    color="dark"
                    onClick={handleSubmit}
                  >
                    Login
                  </MDBBtn>
                ) : (
                  <MDBBtn
                    className="w-100 mb-2"
                    size="md"
                    color="dark"
                    disabled
                  >
                    <span
                      class="spinner-border spinner-border-sm text-light"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Loading...
                  </MDBBtn>
                )}
                <p className="text-center mb-1">or </p>
                {/* <MDBBtn className="w-100 mb-2" size="md" color="dark"> */}
                <LoginGoogle />

                {/* <Logout /> */}
                {/* </MDBBtn> */}
                <div className="text-center mt-4">
                  you don't have account ?
                  <Link className="text-dark" to="/register">
                    Register
                  </Link>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default Login;
