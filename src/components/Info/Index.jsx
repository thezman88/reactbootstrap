import React from "react";
import "./style.css";

function Info() {
  return <div className="info-section container-fluid">
      <div className='container-fluid'>
            <div className='row '>
              <div className='col text-center'>
              <p className='hey'>Zachary Cohen</p>
              <p className='aboutMe'>I am a developer, who is passionate about
                 community and technology. Let's start creating together.</p>
                 <hr />
                <a href='#'><i className="github fab fa-github pr-2"></i></a> 
                 <a href='#'><i className="linkedin fab fa-linkedin-in pr-2"></i></a>

              </div>
            </div>
          
      </div>
  </div>
}

export default Info;
