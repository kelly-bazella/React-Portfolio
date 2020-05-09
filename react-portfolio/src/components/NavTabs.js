import React from "react";

function NavTabs(props) {
  return (
    // <div className="container">
      <div className="row">
        <div className="col-md-8">
          <a
            href="#about"
            onClick={() => props.handlePageChange("About")}
            className="nav-link"
            style={{
              textDecoration: "none",
              color: "black",
              fontFamily: "Montserrat",
            }}
          >
            <h1>Kelly Bazella</h1>
          </a>
        </div>
        <div className="col-md-4" >
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a
                  href="#about"
                  onClick={() => props.handlePageChange("About")}
                  className="nav-link"
                  style={{textDecoration: "none",
                  color: "black",}}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#portfolio"
                  onClick={() => props.handlePageChange("Portfolio")}
                  className="nav-link"
                  style={{textDecoration: "none",
                  color: "black",}}
                >
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#contact"
                  onClick={() => props.handlePageChange("Contact")}
                  className="nav-link"
                  style={{textDecoration: "none",
                  color: "black",}}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    // </div>
  );
}

export default NavTabs;
