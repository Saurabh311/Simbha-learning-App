import React from "react";
import HomeAbout from '../../images/home-about.png';

function AboutPage() {
    
  return (
      
      <div class="about-data shadow-sm p-3 mb-5 rounded">
        <div className="row">
                <div className="col-md-4">
                    <img
                        src={HomeAbout}
                        className="home-about-img"
                        alt="..."
                    />
                </div>
      
                <div className="col-md-7">
                  <div className="about-right">
                    <span className="about-title">About Us</span><br/><br/>
                    <p className="about-para-1">Our mission is to create an environment where students are inspired to be their best.</p>
                    <p className="about-para-2">SIMBA is at the heart of the learning process for millions of students. Our platform encourages creativity, expression, and feedback that makes students excited to learn. We believe when students are truly engaged in learning, they find what lights them up, conquer the tough stuff, and open new doors. Now more than ever, remote learning solutions are essential. SIMBA enables meaningful learning from anywhere, for every student. </p>
                  </div>
                </div>
            </div>
        </div>
       
      
  )
}

export default AboutPage;