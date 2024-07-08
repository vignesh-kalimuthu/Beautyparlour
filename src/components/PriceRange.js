import React from 'react'


const PriceRange = () => {
  return (
    <div class="">
    <div class="container-fluid" style={{backgroundColor:"#FAFBFC"}}>
      <div class="text-center" >
        <h2 class="title" style={{fontSize:"60px",fontWeight:"500",color:"#0C1451",marginTop:"20px"}}>Beautyrel Massage Gift Voucher</h2>
        <div class="subtitle-2"  style={{fontSize:"22px",fontWeight:"500",color:"#494F7C",marginTop:"40px"}}>Get a personalized gift voucher for your family member.</div>
      </div>
      <div class="row row-md-80 row-sm-50" style={{marginTop:"70px"}}>
        <div class="col-xs-10 col-md-6 col-lg-4 ">
          <div class="card shadow">
            <div className='cardbody p-5 text-center'>
            
            <div class="voucher-name" style={{fontSize:"26px",fontWeight:"500",color:"#FE9B8E",marginTop:"20px"}}>$250 Gift Voucher</div>
            <div class="voucher-title"  style={{fontSize:"50px",fontWeight:"500",color:"#0C1451",marginTop:"20px"}}>Basic Voucher</div>
            <div class="voucher-text"  style={{fontSize:"22px",fontWeight:"500",color:"#494F7C",marginTop:"40px"}}>The most affordable option for anyone.</div>
            
            <button
              type="button"
              className="btn btn-lg shadow-lg text-white text-center"
              style={{
                backgroundColor: "#FE9B8E",
                padding: "11px 20px",
                fontSize: "18px",
                fontWeight: "bold",
                marginTop:"30px"
              }}
            >
              Buy As Gift
            </button>
            </div>
          </div>
        </div>
        <div class="col-xs-10 col-md-6 col-lg-4 ">
        <div class="card shadow">
            <div className='cardbody p-5  text-center'>
            <div class="voucher-name" style={{fontSize:"26px",fontWeight:"500",color:"#FE9B8E",marginTop:"20px"}}>$450 Gift Voucher</div>
            <div class="voucher-title" style={{fontSize:"50px",fontWeight:"500",color:"#0C1451",marginTop:"20px"}}>Standard Voucher</div>
            <div class="voucher-text"  style={{fontSize:"22px",fontWeight:"500",color:"#494F7C",marginTop:"40px"}}>Our most popular offer that also is a great present.</div>
            
            <button
              type="button"
              className="btn btn-lg shadow-lg text-white text-center"
              style={{
                backgroundColor: "#FE9B8E",
                padding: "11px 20px",
                fontSize: "18px",
                fontWeight: "bold",
                marginTop:"30px"
              }}
            >
              Buy As Gift
            </button>
           
            </div>
          </div>
        </div>
        <div class="col-xs-10 col-md-6 col-lg-4 ">
        <div class="card shadow">
            <div className='cardbody p-5  text-center'>
            <div class="voucher-name"style={{fontSize:"26px",fontWeight:"500",color:"#FE9B8E",marginTop:"20px"}}>$950 Gift Voucher</div>
            <div class="voucher-title" style={{fontSize:"50px",fontWeight:"500",color:"#0C1451",marginTop:"20px"}}>Premium Voucher</div>
            <div class="voucher-text" style={{fontSize:"22px",fontWeight:"500",color:"#494F7C",marginTop:"40px"}}>This voucher includes the cost of all our treatments.</div>  <button
              type="button"
              className="btn btn-lg shadow-lg text-white text-center"
              style={{
                backgroundColor: "#FE9B8E",
                padding: "11px 20px",
                fontSize: "18px",
                fontWeight: "bold",
                marginTop:"30px"
              }}
            >
              Buy As Gift
            </button>
            </div>
    
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default PriceRange