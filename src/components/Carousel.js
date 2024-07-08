import React from 'react'
import FullRating from "../assets/images/rate-1-146x27.png"
import Rating from "../assets/images/rate-2-146x27.png"
import SingleStar from "../assets/images/title-img-153x38.png"

const Carousel = () => {
  return (
   

<div class="  " style={{backgroundColor:"#FAFBFC"}}>
        <div class="text-center " style={{backgroundColor:"#FAFBFC"}}>
          <p class="" style={{fontSize:"26px",fontWeight:"500",color:"#FE9B8E"}}>Our customers love Beautyrel</p>
          <h2 class="title" style={{fontSize:"60px",fontWeight:"500",color:"#0C1451"}}>Rated #1 massage in New York</h2>
          <div class="d-flex justify-content-center align-items-center" style={{gap:"20px",marginTop:"40px"}}>
            <div class="subtitle-box-text" style={{fontSize:"22px",fontWeight:"500",color:"#494F7C"}}>Reviews from:</div>
            <div class="subtitle-box-media"><img src={SingleStar} alt="" width="153" height="38"/>
            </div>
          </div>
        </div>
        <div class=" d-flex justify-content-center align-items-center owl-carousel owl-theme-1" style={{gap:"40px",backgroundColor:"#FAFBFC",marginTop:"120px"}} data-items="1" data-sm-items="1" data-md-items="1" data-lg-items="1" data-xl-items="2" data-xxl-items="3" data-margin="15px" data-nav="false" data-dots="true" data-autoplay="8000">
          <div class=" card  shadow testimonial-box   m-2" style={{width:"550px",height:"350px" , backgroundColor:"#FAFBFC"}}>
            <div className='cardbody p-4'>

            <div className='d-flex justify-content-between align-items-center'>
            <div class="" style={{fontSize:"32px",fontWeight:"500",color:"#0C1451"}}>Cool!</div>
            <div class="testimonial-rate"><img src={Rating} alt="" width="146" height="27"/>
            </div>
           </div>
            <div class="testimonial-text" style={{fontSize:"22px",fontWeight:"500",color:"#63698F"}}>“I have found all your services to be amazing. Most recently I received a massage with cupping from Janet. She is a miracle worker.  Janet somehow manages make my back feel like I have never had any moments of stress in life.”</div>
            <div class="testimonial-name" style={{fontWeight:"500",color:"#FE9B8E"}}>— Alisa R.</div>
            </div>
          </div>
          <div class=" card  shadow testimonial-box  m-2" style={{width:"550px",height:"350px", backgroundColor:"#FAFBFC"}}>
            <div className='cardbody p-4'>
           
            <div className='d-flex justify-content-between align-items-center'>
            <div class="" style={{fontSize:"32px",fontWeight:"500",color:"#0C1451"}}>Excellent!</div>
            <div class="testimonial-rate"><img src={FullRating} alt="" width="146" height="27"/>
            </div>
            </div>
            <div class="testimonial-text" style={{fontSize:"22px",fontWeight:"500",color:"#63698F"}}>“Your massage therapists are beyond incredible. They are so kind-hearted and treat you like the individual that you are. They listen and take note of what pressure you like.”</div>
            <div class="testimonial-name"  style={{fontWeight:"500",color:"#FE9B8E"}}>— John C.</div>
            </div>
          </div>
        
        </div>
      </div>
  
  )
}

export default Carousel