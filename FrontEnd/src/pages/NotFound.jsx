import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function NotFound() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="text-center">
          <h1 className="display-1 fw-bold">404</h1>
          <p className="fs-3">
            {" "}
            <span className="text-danger">Opps!</span> Page not found.
          </p>
          <p className="lead">The page you’re looking for doesn’t exist.</p>
          <Link
            to="/"
            className="btn text-light "
            style={{ backgroundColor: "#8A1538" }}
          >
            Go Home
          </Link>
        </div>
      </div>
    </>
  );
}

export default NotFound;
