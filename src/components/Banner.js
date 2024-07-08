import React from "react";
import Slide from "../../src/assets/images/slide-01.jpg";

const Banner = () => {
  return (
    <div
      style={{
        position: "relative",
        maxWidth: "100%",
        width: "auto",
        height: "auto",
       
      }}
    >
      <img
        src={Slide}
        className=""
        alt="slide"
        style={{
          maxWidth: "100%",
          width: "auto",
          height: "auto",
          backgroundSize: "cover",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          color: "#0C1451",
        }}
      >
        <div className="container-fluid">
          <div className="row justify-content-left position-relative">
            <div
              className="col-lg-5 position-absolute "
              style={{ top: "50px" }}
            >
              <h1
                data-caption-animate="fadeInUp"
                data-caption-delay="100"
                style={{ fontSize: "75px", fontWeight: "500" }}
              >
                Massage <br /> On Demand
              </h1>
              <p
                className="lead text-custom-blue "
                style={{ color: "#494F7C", marginTop: "30px" }}
                data-caption-animate="fadeInUp"
                data-caption-delay="250"
              >
                Are you tired and exhausted? Do you need to relax and tidy up
                your body and health? Try our massage today!
              </p>
              <div className="btn-wrap">
                <div
                  className="d-flex justify-content-start align-items-center "
                  style={{ gap: "60px", marginTop: "40px" }}
                >
                  <button
                    type="button"
                    className="btn btn-lg shadow-lg text-white text-center"
                    style={{
                      backgroundColor: "#FE9B8E",
                      padding: "18px 45px",
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    Book Now
                  </button>
                  <button
                    type="button"
                    className="btn btn-lg shadow-lg text-white text-center"
                    style={{
                      backgroundColor: "#FE9B8E",
                      padding: "18px 45px",
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    Buy As Gift
                  </button>
                </div>
              </div>
              <div className="">
                <div
                  className=""
                  style={{
                    fontSize: "40px",
                    fontWeight: "700",
                    color: "#0C1451",
                    marginTop:"40px"
                  }}
                >
                  P:{" "}
                  <span className="" href="#">
                    {" "}
                    1 000 234 7890
                  </span>
                </div>
              </div>
              <p
                className=""
                style={{
                  fontSize: "18px",
                  lineHeight: "1.55556",
                  fontWeight: "400",
                  color: "#494f7c",
                  marginTop:"20px"
                }}
              >
                178 West 27th Street, Suite 527, New York NY 10012, United
                States
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
