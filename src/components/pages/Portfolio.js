import React from "react";

function Portfolio() {
  return (
    <div className="container">
      <h2 style={{textAlign:"center"}}>Portfolio</h2>
    < hr />
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
                rel="noopener noreferrer"
                className="btn btn-dark"
              >
                Click to see the app
              </a>
              <a
                href="https://github.com/stevekindt/Project-1"
                target="_blank"
                rel="noopener noreferrer"
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
                This app was created using Passport, Express, mySQL, and
                Handlebars. This app is also deployed on Heroku.
              </p>
              <a
                href="https://gold-team-quiz.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark"
              >
                Click to see the app
              </a>
              <a
                href="https://github.com/kelly-bazella/Project-2"
                target="_blank"
                rel="noopener noreferrer"
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
                href="https://github.com/kelly-bazella/Password-Generator"
                target="_blank"
                rel="noopener noreferrer"
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
                Employee Tracker is a CLI app. Employers can enter information
                about their reports and will then be presented with a PDF
                document.
              </p>
              <a
                a
                href="https://github.com/kelly-bazella/Employee-Tracker"
                target="_blank"
                rel="noopener noreferrer"
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
                This project uses the CLI to gather information, send out
                information through an API and ultimately returns a profile in
                HTML format.
              </p>
              <a
                href="https://github.com/kelly-bazella/Profile-Generator"
                target="_blank"
                rel="noopener noreferrer"
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
              src="Assets/images/employee-directory.PNG"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Employee Directory</h5>
              <p className="card-text">
                A React application deployed on Heroku. Using the Random User API, employees are displayed in random order. The employees can be sorted by their first name or by their ID number. 
              </p>
              <a
                href="https://bazella-employee-tracker.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark"
              >
                Click to see the app
              </a>
              <a
                href="https://github.com/kelly-bazella/Employee-Directory"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark"
              >
                Click to see the repository
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div style={{height:'25px'}}></div>
    </div>
  );
}

export default Portfolio;
