import React from "react";
import {
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
  MDBInput,
} from "mdb-react-ui-kit";

export default function Expextation({
  handeLOnChange,
  expectation,
  handelOnSubmit,
}) {
  return (
    <>
      <MDBCol md="6" lg="5" className="mt-5">
        <MDBCard style={{ borderRadius: "15px", backgroundColor: "#751f4a" }}>
          <MDBCardBody className="p-4 text-black">
            <div>
              <MDBTypography
                tag="h6"
                className="text-center text-white text-capitalize"
              >
                expect who will win
              </MDBTypography>
              <div className="d-flex align-items-center justify-content-between mb-1">
                <div className="flex-shrink-0 text-center">
                  <MDBCardImage
                    style={{ width: "70px", height: "70px" }}
                    className="img-fluid rounded-circle "
                    src={expectation.team_1_picture}
                    alt="Generic placeholder image"
                    fluid
                  />
                  <p className="mb-3 me-2 mt-2 ms-2 h6 text-white text-capitalize">
                    {expectation.team_1}
                  </p>
                  <MDBInput
                    label={expectation.team_1}
                    type="number"
                    name="team_1"
                    min={0}
                    // value={expectation.team_1}
                    style={{ width: "80px", backgroundColor: "white" }}
                    onChange={handeLOnChange}
                  />
                </div>
                <p className="mb-3 me-2 mt-2 ms-2 h4 text-white text-capitalize">
                  VS
                </p>
                <div className="flex-shrink-0 text-center">
                  <MDBCardImage
                    style={{ width: "70px", height: "70px" }}
                    className="img-fluid rounded-circle "
                    src={expectation.team_2_picture}
                    alt="Generic placeholder image"
                    fluid
                  />
                  <p className="mb-3   my-2  h6 text-white text-capitalize  ">
                    {expectation.team_2}
                  </p>{" "}
                  <MDBInput
                    label={expectation.team_2}
                    type="number"
                    name="team_2"
                    min={0}
                    // value={expectation.team_2}
                    style={{ width: "80px", backgroundColor: "white" }}
                    onChange={handeLOnChange}
                  />
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center mb-4 text-white">
              <div className="flex-grow-1 ms-3"></div>
            </div>

            <MDBBtn
              color="dark"
              rounded
              block
              size="lg"
              onClick={() => {
                handelOnSubmit(expectation.id);
              }}
            >
              Submit
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </>
  );
}
