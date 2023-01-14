import React, { useEffect, useState } from "react";
import ChartistGraph from "react-chartist";
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

function Dashboard() {
  const [counts, setCounts] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8000/api/data-counts").then((response) => {
      setCounts(response.data.data);
    });
  }, []);

  return (
    <>
      <Container fluid>
        <Row className="justify-content-center align-content-start">
          <Col lg="4" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-single-02 text-warning"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Total Users</p>
                      <Card.Title as="h4">{counts.users}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <Link to={"table"}>
                  <div className="stats">
                    <i className="nc-icon nc-paper-02 mr-1"></i>
                    Total Users
                  </div>
                </Link>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="4" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-light-3 text-success"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Total News</p>
                      <Card.Title as="h4">{counts.news}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <Link to={"news"}>
                  <div className="stats">
                    <i className="far fa-calendar-alt mr-1"></i>
                    Total news
                  </div>
                </Link>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="4" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-paper-2 text-danger"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Total Posts</p>
                      <Card.Title as="h4">{counts.posts}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <Link to={"allposts"}>
                  <div className="stats">
                    <i className="far fa-clock-o mr-1"></i>
                    Total Posts
                  </div>
                </Link>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="4" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-chat-round text-primary"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Total Comments</p>
                      <Card.Title as="h4">{counts.cmments}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <Link to={"comments"}>
                  <div className="stats">
                    <i className="fas fa-redo mr-1"></i>
                    Total Comments
                  </div>
                </Link>
              </Card.Footer>
            </Card>
          </Col>

          <Col lg="4" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i
                        className="nc-icon nc-alien-33

text-primary"
                      ></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Expectations</p>
                      <Card.Title as="h4">{counts.expectation}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <Link to={"expectation"}>
                  <div className="stats">
                    <i className="fas fa-redo mr-1"></i>
                    Total Expectations
                  </div>
                </Link>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
