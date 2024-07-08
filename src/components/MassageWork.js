import React from 'react'
import HomePic1 from "../assets/images/box-home-1-390x344.jpg"
import HomePic2 from "../assets/images/box-home-2-390x344.jpg"
import HomePic3 from "../assets/images/box-home-3-390x344.jpg"

const MassageWork = () => {
  return (
    <div class="" >
    <div class="container-fluid ">
      <div class="text-center m-5">
        <div class="subtitle"style={{fontSize:"26px",fontWeight:"500",color:"#FE9B8E",marginTop:"100px"}}>Massage made easy</div>
        <h2 class="title"  style={{fontSize:"60px",fontWeight:"500",color:"#0C1451",marginTop:"20px"}}>How Beautyrel Works</h2>
        <div class="subtitle-2" style={{fontSize:"22px",fontWeight:"500",color:"#494F7C",marginTop:"40px"}}>Getting a massage has never been easier.</div>
      </div>
      <div className=" d-flex justify-content-between align-items-center row row-md-80 row-sm-50" style={{marginTop:"70px",marginRight:"20px"}} >
        <div className="col-xs-10 col-md-6 col-lg-4">
          <div className="" style={{margin: "0 15px"}}>
            <div className="box-info-modern-figure"><img src={HomePic1} alt="" width="390" height="344" />
            </div>
            <h4 class="text-center" style={{marginTop:20,fontSize:"32px",fontWeight:"500",color:"#0C1451"}}>Book</h4>
            <div class="text-center" style={{marginTop:20,fontSize:"22px",fontWeight:"500",color:"#494F7C"}}>Book an appointment on our website.</div>
          </div>
        </div>
        <div className="col-xs-10 col-md-6 col-lg-4">
          <div className=" " style={{margin: "0 15px"}}>
            <div class="box-info-modern-figure"><img src={HomePic3} alt="" width="390" height="344" />
            </div>
            <h4 class="text-center" style={{marginTop:20,fontSize:"32px",fontWeight:"500",color:"#0C1451"}}>Meet</h4>
            <div class="text-center" style={{marginTop:20,fontSize:"22px",fontWeight:"500",color:"#494F7C"}}>Come in time and get ready to relax and unwind at Beautyrel.</div>
          </div>
        </div>
        <div class="col-xs-10 col-md-6 col-lg-4">
          <div className="" style={{margin: "0 15px"}} >
            <div class="box-info-modern-figure"><img src={HomePic2} alt="" width="390" height="344" />
            </div>
            <h4 class="text-center" style={{marginTop:20,fontSize:"32px",fontWeight:"500",color:"#0C1451"}}>Relax</h4>
            <div class="text-center" style={{marginTop:20,fontSize:"22px",fontWeight:"500",color:"#494F7C"}}>Forget about all things that worry you and relax at our beauty salon.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default MassageWork