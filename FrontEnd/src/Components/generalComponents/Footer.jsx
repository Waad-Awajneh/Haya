import { Link } from "react-router-dom";
import { AiFillTwitterCircle} from 'react-icons/ai';
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCardImage,
} from "mdb-react-ui-kit";
import logo from "../../asset/logo.png";

export default function Footer() {
  return (
    <MDBFooter className=" text-white" style={{ backgroundColor: "#751f4a" }}>
      <MDBContainer className="p-4">
        <MDBRow>
          <MDBCol lg="6" md="12" className="mb-4 mb-md-0">
            <MDBCardImage src={logo} alt="avatar" height="80" />
<div style={{marginTop:"30px",paddingLeft:"30px", fontSize:"20px"}}>

            <a href={'/https://www.facebook.com/HAYYA-107115075582816'}> 
                                    < GrFacebookOption/> </a>
                                    <a href={'https://www.linkedin.com/company/hayya/?viewAsMember=true'}>
                                    < AiFillLinkedin /></a>

                                    <a href={'https://twitter.com/jardat_rama'}>
                                    <AiFillTwitterCircle /> </a>
                                    <a href={'https://www.youtube.com/@hayya3947'}>
       <AiOutlineYoutube /></a>
</div>
          </MDBCol>

          <MDBCol lg="3" md="12" className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Pages</h5>

            <ul className="list-unstyled mb-0">
              <li>
                <Link to="/" className="text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/About" className="text-white">
About </Link>
              </li>
              <li>
                <Link to="/Contact" className="text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white">
Blog                </Link>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-0 ">Contact Info</h5>

            <ul className="list-unstyled mt-2">
              <li>
              Amman , Jordan
              </li>
              <li>
              <a  href="tel:+962778084901" style={{color:"white"}}>+962778084901</a>
              </li>
              <li>
              <a  href="mailto:hayya@gmail.com" style={{color:"white"}}>hayya@gmail.com </a>
              </li>
             
            </ul>
          </MDBCol>
        </MDBRow>
   
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2022 Copyright:Hayya    
       
      </div>
    </MDBFooter>
  );
}
