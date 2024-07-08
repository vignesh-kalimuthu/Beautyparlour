import React from 'react'
import pic1 from "../assets/images/home-4-830x446.jpg"
// import axios from "axios"



const Vaccancy = () => {

  // const [name,setName] = useState("")
  // const [email,setEmail] = useState("")
  // const [mobile,setMobile] = useState("")
  // const [time,setTime] = useState("")


 
//   const handleSubmit=()=>{
//     let data ={
//       customer_name:name,
//       mobile_no:mobile,
//       email:email,
//       time:time,
//     }
  
//     const config={
//       method:"post",
//       url:"http://localhost:5000/formdata/booking",
//       data:data,
// }

// axios(config).then((res)=>{
//   console.log("res",res)
// }).catch((err)=>{
// console.log("err",err)
// })
    
    

//   }
  return (
    <div><div class="">
    <div class="container-fluid" style={{marginTop:"170px"}}>
      <div class="text-center">
        <h2 class="title"  style={{fontSize:"60px",fontWeight:"500",color:"#0C1451",marginTop:"20px"}}i>Are You a Qualified <br class="br-none"  /> Massage Therapist?</h2>
        <div class="subtitle-2 big"  style={{fontSize:"22px",fontWeight:"500",color:"#494F7C",marginTop:"40px"}}>Join our team to push your career forward today!</div>
        <div class="d-flex justify-content-center align-items-center">
        <button
                    type="button"
                    className="btn btn-lg shadow-lg text-white text-center"
                    style={{
                      backgroundColor: "#FE9B8E",
                      padding: "18px 45px",
                      fontSize: "20px",
                      fontWeight: "bold",
                      marginTop:"70px",
                      marginBottom:"70px"
                    }}
                  >
Join Us                  </button></div>
        <div class="img-wrap"><img src={pic1} alt="" width="830" height="446" />
        </div>
      </div>
    </div>
  </div>
  
  <div>
    
  {/* <div>


    <input type="text" placeholder='Email'value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
    <label>Email</label>
    <input type="text" placeholder='Mobile Number' value={mobile} onChange={(e)=>{setMobile(e.target.value)}}/>
    <label>Mobile No</label>
    <input type="text" placeholder='Name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
    <label>Name</label>
    <input type='text' placeholder='text' value={time} onChange={(e)=>{setTime(e.target.value)}}/>
    <label>Time</label>
    <button onClick={()=>{handleSubmit()}}>
      Submit
    </button>


  </div> */}
  </div>
  </div>
  )
}


export default Vaccancy