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

              <div className="col-md-8 col-md-offset-2 intro-text" style={{textAlign: "center"}}>
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                  style={{marginTop: "20px", marginBottom: "20px"}}
                >
                  Learn More
                </a>{" "}
              </div>

            </div>
          </div>
        </div>
      </div>
    </header >
  );
};

