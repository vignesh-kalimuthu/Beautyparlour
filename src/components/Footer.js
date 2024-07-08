import React from 'react'
import footerpic from "../assets/images/footer-1-280x156.jpg"
import Divider from './Divider'

const Footer = () => {
  return (
    <div><footer class="section footer-classic context-dark" style={{backgroundColor:"#0C1451"}}>
    <div class="container-fluid">
      <div class="row row-sm-30">
        <div class="col-lg-6">
          <div class="">
            <div class="d-flex justify-content-start align-items-center" style={{gap:"40px",fontSize:"26px",fontWeight:"700",color:"#FE9B8E",marginTop:"100px"}}><a class="nav-link" href="tel:#">1 000 -234 -78-90</a>
              <div class="phone-sub" style={{fontSize:"26px",fontWeight:"700",color:"#FE9B8E"}}>Call Me Back</div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="text-lg-right">
            <div class="d-flex justify-content-end align-items-center" style={{gap:"40px"}}>
              <p style={{fontSize:"26px",fontWeight:"700",color:"#FE9B8E",marginTop:"100px"}}>Any complaints or suggestions?</p>
              <div>
              <button
              type="button"
              className="btn btn-lg shadow-lg text-white text-center"
              style={{
                backgroundColor: "#FE9B8E",
                padding: "11px 20px",
                fontSize: "18px",
                fontWeight: "bold",
                marginTop:"90px"
              }}
            >
              Let Us Know
            </button>
              </div>

              
            </div>
          </div>
        </div>
      </div>
      <div><div className='container-fluid'>
    <div  style={{ margin:"80px 0" ,borderTop:"solid 3px #FAFBFC"}}>

    </div>
    </div></div>
      <div class="list-wrapper">
        <div class="row row-sm-30">
          <div class="col-sm-4 col-md-4 col-lg-3">
            <p  style={{fontSize:"22px",fontWeight:"500",color:"#FFFFFF",lineHeight:"146%"}}>Treatments</p>
            <ul class="list-unstyled">
              <li className='nav-item'><a  className='nav-link' href="#" data-waypoint-to="#" style={{color:"#97AAD3"}}>Swedish Massage Therapy</a></li>
              <li className='nav-item'><a  className='nav-link' href="#" data-waypoint-to="#"  style={{color:"#97AAD3"}}>Aromatherapy Massage</a></li>
              <li className='nav-item'><a  className="nav-link" href="#" data-waypoint-to="#"  style={{color:"#97AAD3"}}>Hot Stone Massage</a></li>
              <li className='nav-item'><a className="nav-link" href="#" data-waypoint-to="#" style={{color:"#97AAD3"}}>Deep Tissue Massage</a></li>
              <li className='nav-item'><a className="nav-link" href="#" data-waypoint-to="#"  style={{color:"#97AAD3"}}>Shiatsu Massage</a></li>
              <li className='nav-item'><a className="nav-link" href="#" data-waypoint-to="# "  style={{color:"#97AAD3"}}>Thai Massage</a></li>
              <li className='nav-item'><a className="nav-link" href="#" data-waypoint-to="#"  style={{color:"#97AAD3"}}>Pregnancy Massage</a></li>
            </ul>
          </div>
          <div class="col-sm-4 col-md-4 col-lg-3">
            <p  style={{fontSize:"22px",fontWeight:"500",color:"#FFFFFF",lineHeight:"146%"}}>Beautyrel</p>
            <ul class="list-unstyled">
              <li className='nav-item'><a className="nav-link" href="#" data-waypoint-to="#"  style={{color:"#97AAD3"}}>About Us</a></li>
              <li className='nav-item'><a className="nav-link" href="#"  data-waypoint-to="#"  style={{color:"#97AAD3"}}>Reviews</a></li>
              <li className='nav-item'><a className="nav-link" href="#" data-waypoint-to="#"  style={{color:"#97AAD3"}}>Blog</a></li>
              <li className='nav-item'><a className="nav-link" href="#" data-waypoint-to="#"  style={{color:"#97AAD3"}}>Affiliates</a></li>
              <li className='nav-item'><a className="nav-link" href="#" data-waypoint-to="#"  style={{color:"#97AAD3"}}>Careers</a></li>
              <li className='nav-item'><a className="nav-link" href="#" data-waypoint-to="#"  style={{color:"#97AAD3"}}>Invest</a></li>
            </ul>
          </div>
          <div class="col-sm-4 col-md-4 col-lg-3">
            <p  style={{fontSize:"22px",fontWeight:"500",color:"#FFFFFF",lineHeight:"146%"}}>Help</p>
            <ul class="list-unstyled">
              <li className='nav-item'><a className="nav-link"  href="#" data-waypoint-to="#"  style={{color:"#97AAD3"}}>Help Center</a></li>
              <li className='nav-item'><a className="nav-link" href="#" data-waypoint-to="#"  style={{color:"#97AAD3"}}>FAQs</a></li>
              <li className='nav-item'><a className="nav-link" href="#" data-waypoint-to="#"  style={{color:"#97AAD3"}}>Pricing</a></li>
              <li className='nav-item'><a className="nav-link" href="#" data-waypoint-to="#"  style={{color:"#97AAD3"}}>Terms</a></li>
              <li className='nav-item'><a className="nav-link" href="#" data-waypoint-to="#"  style={{color:"#97AAD3"}}>Privacy Policy</a></li>
              <li  className='nav-item'><a className="nav-link "  href="#" data-waypoint-to="#"  style={{color:"#97AAD3"}}>Contact Us</a></li>
            </ul>
          </div>
          <div class="col-sm-4 col-md-4 col-lg-3"><img src={footerpic} alt="" width="280" height="156" />
            <p style={{lineHeight:"146%",fontSize:"22px",fontWeight:"500",color:"#FFFFFF"}}>Top 5 Types of Massage That You Have to Try When Visiting Beautyrel</p>
            <div style={{lineHeight:"146%",fontSize:"14px",fontWeight:"500",color:"#97AAD3"}} class="date"> January 30, 2020</div>
          </div>
        </div>
      </div>
      <div><div className='container-fluid'>
    <div  style={{ margin:"80px 0" ,borderTop:"solid 3px #FAFBFC"}}>

    </div>
    </div></div>
      <div class="row row-sm-30 d-flex justify-content-betwen align-items-center">
        <div class="col-lg-6">
          <div class="group-md group-middle">
            <p class="rights d-flex justify-content-start align-items-center"><span>©&nbsp; </span><span class="copyright-year" style={{color:"#97AAD3"}}>2024</span><span>&nbsp;</span><span style={{color:"#97AAD3"}}>Beautyrel</span><span>.&nbsp;</span><a className="nav-link" href="">Privacy Policy</a></p>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="text-lg-right">
            <ul class="list-unstyled d-flex justify-content-center align-items-center" style={{gap:"40px"}}>
              <li className='nav-item'><a style={{fontSize:"28px",color:"#97AAD3"}} class=" nav-link icon icon-default icon-sm mdi mdi-rss" href="#"></a></li>
              <li className='nav-item'><a style={{fontSize:"28px",color:"#97AAD3"}} class="nav-link icon icon-default icon-sm mdi mdi-twitter" href="#"></a></li>
              <li className='nav-item'><a style={{fontSize:"28px",color:"#97AAD3"}} class="nav-link icon icon-default icon-sm mdi mdi-facebook" href="#"></a></li>
              <li className='nav-item'><a style={{fontSize:"28px",color:"#97AAD3"}} class="nav-link icon icon-default icon-sm mdi mdi-linkedin-box" href="#"></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer></div>
  )
}

export default Footer