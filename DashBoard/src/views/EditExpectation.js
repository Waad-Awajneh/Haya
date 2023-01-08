import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBCardImage,
  MDBTextArea,
  MDBInput,
} from "mdb-react-ui-kit";

import axios from "axios";
import Swal from "sweetalert2";

const qs = require("qs");

export default function EditExpectation({
  basicModal,
  setBasicModal,
  toggleShow,
  update,
  setUpdate,
  expectation,
}) {
  console.log(expectation.id);

  const [expectationData, setExpectationData] = useState(expectation);

  function handleEditExpectation(e) {
    console.log(e.target.name);
    setExpectationData({ ...expectationData, [e.target.name]: e.target.value });
  }

  const config = {
    method: "put",
    url: `http://127.0.0.1:8000/api/expectation/${expectation.id}`,
    headers: {
      Accept: "application/vnd.api+json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: qs.stringify(expectationData),
  };

  const handleEdit = () => {
    if (expectationData == "") return null;
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
          title: res.data.message,
        });
        setUpdate(!update);
        toggleShow();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
        <MDBModalDialog size="lg">
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Edit expectation </MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <div className="row  w-100">
                <div className="col-6 my-3">
                  <MDBInput
                    label="First Team"
                    type="text"
                    name="team_1"
                    style={{ backgroundColor: "#fff" }}
                    wrapperClass="w-100"
                    value={expectationData.team_1}
                    onChange={(e) => {
                      handleEditExpectation(e);
                    }}
                  />
                </div>
                <div className="col-6 my-3">
                  <MDBInput
                    name="team_1_picture"
                    rows={6}
                    type="file"
                    style={{ backgroundColor: "#fff" }}
                    wrapperClass="w-100"
                    //   value={expectation.team_1_picture}
                    onChange={(e) => {
                      handleEditExpectation(e);
                    }}
                  />
                </div>
                <div className="col-6 my-3">
                  <MDBInput
                    label="Second Team"
                    type="text"
                    name="team_2"
                    rows={6}
                    style={{ backgroundColor: "#fff" }}
                    wrapperClass="w-100"
                    value={expectationData.team_2}
                    onChange={(e) => {
                      handleEditExpectation(e);
                    }}
                  />
                </div>
                <div className="col-6 my-3">
                  <MDBInput
                    name="Second Team-Logo"
                    type="file"
                    rows={6}
                    style={{ backgroundColor: "#fff" }}
                    wrapperClass="w-100"
                    //   value={expectation.team_2_picture}
                    onChange={(e) => {
                      handleEditExpectation(e);
                    }}
                  />
                </div>
                <div className="col-12 my-3">
                  <MDBInput
                    label="Points"
                    type="number"
                    id="textAreaExample"
                    name="points"
                    rows={6}
                    style={{ backgroundColor: "#fff" }}
                    wrapperClass="w-100"
                    value={expectationData.points}
                    onChange={(e) => {
                      handleEditExpectation(e);
                    }}
                  />
                </div>
                <div className="col-12 my-3">
                  <MDBInput
                    label="Date"
                    id="textAreaExample"
                    type="date"
                    name="date"
                    rows={6}
                    style={{ backgroundColor: "#fff" }}
                    wrapperClass="w-100"
                    value={expectationData.date}
                    onChange={(e) => {
                      handleEditExpectation(e);
                    }}
                  />
                </div>
                <div className="col-12 my-3">
                  <MDBInput
                    label="Result"
                    type="text"
                    name="result"
                    rows={12}
                    style={{ backgroundColor: "#fff" }}
                    wrapperClass="w-100"
                    value={expectationData.result}
                    onChange={(e) => {
                      handleEditExpectation(e);
                    }}
                  />
                </div>
              </div>
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn
                color="danger"
                onClick={() => {
                  //   setExpectationData((pervs) =>
                  //     ...pervs

                  //   );
                  toggleShow();
                }}
              >
                Close
              </MDBBtn>
              <MDBBtn onClick={handleEdit}>
                <i class="fas fa-share-square"></i>Save changes
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
