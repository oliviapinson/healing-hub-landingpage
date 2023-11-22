import React from "react";

export const Header = (props) => {
  // const myStyle = {
  //   paddingLeft: "50px"
  // };

  return (
    <header id="header">
      <div className="intro">
      
        <div className="overlay">
        
          <div className="container">
          
            <div className="row">
              
              <div className="col-md-8 col-md-offset-2 intro-text">
              <div className="col-md-4">
                <div className="video-container">
                  <iframe
                    width="412"
                    height="732"
                    src="https://www.youtube.com/embed/qTZA4vRrvXw?autoplay=1&loop=1"
                    title="updateFigv1"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    // allowFullScreen
                  ></iframe>
                </div>
              </div>
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>{" "}
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

