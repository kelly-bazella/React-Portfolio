import React from "react";

function Portfolio() {
  return (
    <div className="container">
      <h2>Portfolio</h2>

      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <img
              src="Assets/images/TravelMaster.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Travel Master</h5>
              <p className="card-text">
                This project helped to showcase the knowledge gained using HTML,
                CSS, JavaScript, and jQuery. My team and I also worked on API
                calls. Styling framework used was Foundation.
              </p>
              <a
                href="https://github.com/stevekindt/Project-1"
                target="_blank"
                className="btn btn-dark"
              >
                Click to see the app
              </a>
              <a
                href="https://github.com/stevekindt/Project-1"
                target="_blank"
                className="btn btn-primary"
              >
                Click to see the repository
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <img
              src="Assets/images/QuizGame.PNG"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Quiz Game</h5>
              <p className="card-text">
              This app was created using Passport, Express, mySQL, and Handlebars. This app is also deployed on Heroku.
              </p>
              <a
                href="https://gold-team-quiz.herokuapp.com/"
                target="_blank"
                className="btn btn-dark"
              >
                Click to see the app
              </a>
              <a href="https://github.com/kelly-bazella/Project-2"
                target="_blank"
                className="btn btn-primary"
              >
                Click to see the repository
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="row">
          <div className="col-md-6">
          <div className="card">
            <img
              src="Assets/images/PasswordGenerator.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Password Generator</h5>
              <p className="card-text">
              This app was created using HTML, JavaScript, and BootStrap CSS
                    framework.
              </p>
              <a
              href="#"
              target="_blank"
                className="btn btn-dark"
              >
                Click to see the app
              </a>
              <a
                href="https://github.com/kelly-bazella/Password-Generator"
                target="_blank"
                className="btn btn-primary"
              >
                Click to see the repository
              </a>
            </div>
          </div>
          </div>
          <div className="col-md-6">
          <div className="card">
            <img
              src="Assets/images/view.gif"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Employee Tracker</h5>
              <p className="card-text">
              Employee Tracker is a CLI app. Employers can enter information about their reports and will then be presented with a PDF document.
              </p>
              <a
               a href="https://github.com/kelly-bazella/Employee-Tracker"
               target="_blank"
                className="btn btn-primary"
              >
                Click to see the repository
              </a>
            </div>
          </div>
          </div>
      </div>
      <br />
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <img
              src="Assets/images/profile-generator.gif"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Profile Generator</h5>
              <p className="card-text">
                This project uses the CLI to gather information, send out information through an API and ultimately returns a profile in HTML format. 
              </p>
              <a
                href="https://github.com/kelly-bazella/Profile-Generator"
                target="_blank"
                className="btn btn-dark"
              >
                Click to see the repository
              </a>
            
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <img
              src="Assets/images/QuizGame.PNG"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Note Taker</h5>
              <p className="card-text">
              The Note Taker application was created using the CRUD paradigm. The user can take notes and they will be saved to a server so will be fetched on page reload. 
              </p>
              <a
                href="https://gold-team-quiz.herokuapp.com/"
                target="_blank"
                className="btn btn-dark"
              >
                Click to see the app
              </a>
              <a href="https://github.com/kelly-bazella/Note-Taker"
                target="_blank"
                className="btn btn-primary"
              >
                Click to see the repository
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
