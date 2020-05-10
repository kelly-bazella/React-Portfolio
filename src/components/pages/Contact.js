import React from "react";

function Contact() {
  return (
    <div className="container">
      <h3>Contact</h3>
      <hr />
<br />
      <p className="text-center w-responsive mx-auto mb-5">
        Please don't hesitate to reach out, I would love to hear from you! Also, connect with me on <a href="https://www.linkedin.com/in/kellybazella/">LinkedIn</a> and check out my respositories on <a href="https://github.com/kelly-bazella">GitHub</a>.
      </p>

      <div className="row">
        <div className="col-md-12 mb-md-0 mb-5">
          <form
            id="contact-form"
            name="contact-form"
            action="mail.php"
            method="POST"
          >
            <div className="row">
              <div className="col-md-6">
                <div className="md-form mb-0">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                  />
                  <label for="name" className="">
                    Your name
                  </label>
                </div>
              </div>

              <div className="col-md-6">
                <div className="md-form mb-0">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="form-control"
                  />
                  <label for="email" className="">
                    Your email
                  </label>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="md-form mb-0">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-control"
                  />
                  <label for="subject" className="">
                    Subject
                  </label>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="md-form">
                  <textarea
                    type="text"
                    id="message"
                    name="message"
                    rows="2"
                    className="form-control md-textarea"
                  ></textarea>
                  <label for="message">Your message</label>
                </div>
              </div>
            </div>
          </form>

          <div className="text-center text-md-left">
            <button
              className="btn btn-info"
            >
              Send
            </button>
          </div>
          <div className="status"></div>
        </div>

      
      </div>
    </div>
  );
}

export default Contact;
