import React from "react";
import Footer from "../Footer";
import "../../index.css";


function About() {
  return (
    
        
        <div className="container">
            <h2
            >About Me</h2>
            <hr />
            <div className="row">
              <div className="col-md-3">
                <img src="Assets/images/profile1-1.jpg" className="profile" alt="profile" />
              </div>
              <div className="col-md-9">
             <p>I am an aspiring web developer currently living in Minneapolis, Minnesota. I graduated from the University of St. Thomas in St. Paul, MN with a degree in Business Communicaiton in May of 2018.</p>
                 <p>I first started coding my senior year of college in a Communication for the Web course. We learned the basics of HTML, CSS, and JavaScript. I was able to use the skills I developed at my first job out of college. I helped code the intranet site on SharePoint. I updated posts, links, and made it more accessible for our employees. My love for coding continued  in my next job where I currently work. I helped to reformat the HTML for our internal and external career site to make our site more cohesive and appealing to potential applicants.</p>
           
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <h4 style={{textAlign:"center"}}>Mission Statement</h4>
                <p>
                    Front-end web developer with a business communications background who is passionate about creating more user focused content on the web. A recent University of Minnesota Full Stack Development certificate holder looking to continue to expand knowledge further in Node.js, JavaScript, CSS and more. Known for a can do attitude and tenacious personality: Always looking at each project individually and hope to bring a new perspective while also pinpointing issues, and troubleshooting along the way. Eager to contribute to building user-friendly apps. Hopeful to join your team and further develop skills in a solution-focused environment. 
                  </p>
                <p>
                    <a href = "Assets/images/Resume.pdf" target="_blank">Click here</a> for a copy of my resume. 
                </p>
                
              </div>
            </div>
          </div>
    
     
    
    
  );
}

export default About;
