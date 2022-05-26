import React, { useState } from 'react'
import Navbar from './Navbar'

const Studentadd = () => {

    var [name,setName]=useState("")
    var [admission,setAdm]=useState("")
    var [cgpa,setCgpa]=useState("")
   
    const subData=()=>{
        const data={"name":name,"admission":admission,"cgpa":cgpa}
        console.log(data)
       
            }
  return (
    <div> 
        <Navbar/>
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">NAME:</label>
                    <input  onChange={(e)=>{setName(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">ADMISSION NUMBER:</label>
                    <input  onChange={(e)=>{setAdm(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">CGPA:</label>
                    <input onChange={(e)=>{setCgpa(e.target.value)}} type="text" className="form-control"/>
                </div>
                
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={subData} className="btn btn-success">ADD</button>
                </div>
                
            </div>
        </div>
    </div>
  </div>

    </div>
  )
}

export default Studentadd