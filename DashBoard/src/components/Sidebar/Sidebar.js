import React, { Component } from "react";
import { useLocation, NavLink } from "react-router-dom";

import { Nav } from "react-bootstrap";

function Sidebar({ color, image, routes }) {
  const location = useLocation();
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };

  return (
    <div className="sidebar" data-image={image} data-color={color}>
      <div
        className="sidebar-background"
        style={{
          backgroundImage:
            "url('https://r1.ilikewallpaper.net/iphone-wallpapers/download/80252/green-sports-court-illustration-iphone-wallpaper-ilikewallpaper_com.jpg')",
          backgroundImage:
            "url('https://r1.ilikewallpaper.net/iphone-wallpapers/download/80252/green-sports-court-illustration-iphone-wallpaper-ilikewallpaper_com.jpg')",
        }}
      />
      <div className="sidebar-wrapper">
        <div className="logo d-flex align-items-center justify-content-start">
          <div className="logo-img">
            <img src={require("assets/img/logo.png")} alt="..." />
          </div>

          <h1 className="simple-text">Hayya Dashboard </h1>
        </div>
        <Nav>
          {routes.map((prop, key) => {
            if (!prop.redirect)
              return (
                <li>
                  <NavLink
                    to={prop.layout + prop.path}
                    className={"nav-link "}
                    style={{
                      fontStyle: activeRoute(prop.layout + prop.path)
                        ? "italic"
                        : "",
                      fontWeight: activeRoute(prop.layout + prop.path)
                        ? "900"
                        : "light",
                      color: activeRoute(prop.layout + prop.path)
                        ? "#e8708bfc"
                        : "white",
                    }}
                  >
                    <i className={prop.icon} />
                    <p>{prop.name}</p>
                  </NavLink>
                </li>
              );
            return null;
          })}
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;
