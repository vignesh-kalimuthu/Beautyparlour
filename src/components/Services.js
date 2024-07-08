import React from 'react';
import ServicePic1 from "../assets/images/box-home-3-580x550.jpg";
import videoPreview from "../assets/images/video-prev-1050x591.jpg";
import './Services.css'; // Import the CSS file

const Services = () => {
  return (
    <div >
      <div className="container-fluid" style={{marginBottom:"110px"}}>
        <div className="row row-md-30">
          <div className="col-md-5 col-lg-5">
            <div className="subtitle" style={{fontSize:"26px",fontWeight:"500",color:"#FE9B8E",marginTop:"40px"}}>Spa-quality service</div>
            <h2 className="title" style={{fontSize:"60px",fontWeight:"500",color:"#0C1451",marginTop:"80px"}}>We Deliver Quality Service</h2>
            <div className="subtitle-2" style={{fontSize:"22px",fontWeight:"500",color:"#494F7C",marginTop:"30px"}}>At our beauty salon, you get the highest level of customer service and the utmost relaxation at a very affordable price.</div>
            <div className=""style={{marginTop:"80px"}}>
            <button
                    type="button"
                    className="btn btn-lg shadow-lg text-white text-center"
                    style={{
                      backgroundColor: "#0C1451",
                      padding: "18px 45px",
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    Book Now
                  </button>
             
            </div>
          </div>
          <div className="col-md-7 col-lg-7">
            <div className="video-container mt-md-5 mt-sm-5" style={{ width:"650px" ,height:"550px" }}>
              <a 
                className="video-cover" 
                style={{ backgroundImage: `url(${videoPreview})` }} 
                href="https://www.youtube.com/watch?v=NxPbcuUZcL0"
              >
                <span className="icon mdi mdi-play-circle-outline"></span>
              </a>
            </div>
          </div>
        </div>
        <div className="text-wrap">
          <div className="row row-md-30" style={{marginTop:"90px"}}>
            <div className="col-md-6 col-lg-6">
              <img src={ServicePic1} alt="Service" width="580" height="550" />
            </div>
            <div className="col-md-6 col-lg-6" >
              <div className="" >
                <div className="subtitle" style={{fontSize:"26px",fontWeight:"500",color:"#FE9B8E"}}>True experts</div>
                <h2 className="title"  style={{fontSize:"60px",fontWeight:"500",color:"#0C1451",marginTop:"80px"}}>Best Massage Therapists</h2>
                <div className="subtitle-2" style={{fontSize:"22px",fontWeight:"500",color:"#494F7C",marginTop:"40px"}}>Beautyrel is a team of dedicated and professionally trained massage therapists always ready to help you relax. Experience the best body treatment with us!</div>
                <div className="btn-wrap" style={{marginTop:"70px"}}>
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
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services;
