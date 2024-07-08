import React from 'react'
import MassageTimes1 from "../assets/images/icon-1-44x44.png"
import MassageTimes2 from "../assets/images/icon-2-44x44.png"
import MassageTimes3 from "../assets/images/icon-3-44x44.png"

const MassageTime = () => {
  return (
    <div><div class="">
    <div class="container-fluid">
   
      <div class="text-center">
        <div class="subtitle" style={{fontSize:"26px",fontWeight:"500",color:"#FE9B8E",marginTop:"100px"}}>A massage for any occasion</div>
        <h2 class="title" style={{fontSize:"60px",fontWeight:"500",color:"#0C1451",marginTop:"40px"}}>Choose Your Massage</h2>
      </div>
      <div class="row row-60 d-flex" style={{gap:"30px",marginTop:"110px",marginLeft:"20px"}}>
        <div class="col-xs-10 col-md-6 col-lg-4 " style={{width:"380px",height:"450px"}}>
          <article class="box-minimal ">
          <div class="text-center" style={{marginLeft:"150px"}}>
        <div  className="d-flex justify-content-center align-items-center" style={{    background:"#FFF1EF" ,width:"90px",height:"90px",
    borderRadius: "50px 50px"}}><img  style={{padding:"2px"}} src={MassageTimes1}   alt="" width="44" height="44" /></div>
            </div>
            <h4 class="text-center"style={{marginTop:50,fontSize:"32px",fontWeight:"500",color:"#0C1451"}}>Relaxation</h4>
            <div class="text-center" style={{marginTop:30,fontSize:"22px",fontWeight:"500",color:"#494F7C"}}>
              <p>Your therapist will aim to relax, revive and rejuvenate you</p>
            </div>
          </article>
        </div>
        <div class="col-xs-10 col-md-6 col-lg-4" style={{width:"380px",height:"450px"}}>
          <article class="" >
            <div class="text-center" style={{marginLeft:"150px"}}>
        <div  className="d-flex justify-content-center align-items-center" style={{    background:"#FFF1EF" ,width:"90px",height:"90px",
    borderRadius: "50px 50px"}}><img  style={{padding:"2px"}} src={MassageTimes2}   alt="" width="44" height="44" /></div>
            </div>
            <h4 class="text-center"style={{marginTop:50,fontSize:"32px",fontWeight:"500",color:"#0C1451"}}>Pregnancy Massage</h4>
            <div class="text-center"  style={{marginTop:30,fontSize:"22px",fontWeight:"500",color:"#494F7C"}}>
              <p>Tranquil relaxation to reduce stress and get relief from cramps and pain.</p>
            </div>
          </article>
        </div>
        <div class="col-xs-10 col-md-6 col-lg-4" style={{width:"380px",height:"450px"}}>
          <article class="box-minimal" style={{}}>
          <div class="text-center" style={{marginLeft:"150px"}}>
        <div  className="d-flex justify-content-center align-items-center" style={{    background:"#FFF1EF" ,width:"90px",height:"90px",
    borderRadius: "50px 50px"}}><img  style={{padding:"2px"}} src={MassageTimes3}   alt="" width="44" height="44" /></div>
            </div>
            <h4 class="text-center"style={{marginTop:50,fontSize:"32px",fontWeight:"500",color:"#0C1451"}}>Sports Massage</h4>
            <div class="text-center"  style={{marginTop:30,fontSize:"22px",fontWeight:"500",color:"#494F7C"}}>
              <p>Improved flexibility and reduced injury risk to help you recover quicker.</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div></div>
  )
}

export default MassageTime