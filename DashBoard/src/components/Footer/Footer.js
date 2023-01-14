import React, { Component } from "react";
import { Container } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer className="footer px-0 px-lg-3">
        <Container fluid>
          <nav className="d-flex justify-content-center">
            <p className="copyright text-center" style={{ color: "#59303e" }}>
              © {new Date().getFullYear()} Copyright: Hayya
            </p>
          </nav>
        </Container>
      </footer>
    );
  }
}

export default Footer;
