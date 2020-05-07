import React from "react";

function NavTabs(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <h1>Kelly Bazella</h1>
        </div>
        <div className="col-md-4">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a
                  href="#about"
                  onClick={() => props.handlePageChange("About")}
                  className="nav-link"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#portfolio"
                  onClick={() => props.handlePageChange("Portfolio")}
                  className="nav-link"
                >
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#contact"
                  onClick={() => props.handlePageChange("Contact")}
                  className="nav-link"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default NavTabs;
