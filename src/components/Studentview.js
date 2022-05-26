import React from 'react'
import Navbar from './Navbar'

const Studentview = () => {
    var marklist=[{"name":"D","admission":"T","cgpa":"v"}]
  return (

      <div>
          <Navbar/>
          <div className="container">
          <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <table class="table table-primary table-striped">
    <thead className='table-success'>
      <tr>
        <th scope="col">#</th>
        <th scope="col"> NAME</th>
        <th scope="col">ADMISSION NUMBER</th>
        <th scope="col">CGPA</th>
  
      </tr>
    </thead>
    <tbody>
          
              {marklist.map((value,key)=>{
  return <tr>
        <th scope="row">1</th>
        <td>{value.name}</td>
        <td>{value.admission}</td>
        <td>{value.cgpa}</td>
      
      </tr>
     
              })}
  
                </tbody>
  </table>
  
          </div>
          </div>
          </div>
          </div>
      
    ) 

}

export default Studentview