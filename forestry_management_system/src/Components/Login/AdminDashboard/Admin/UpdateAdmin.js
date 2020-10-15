import React, { useState,useEffect } from 'react'
const axios = require('axios').default;

export default function UpdateAdmin() {



  const [adminName,setAdminName]=useState("");
  const [adminPassword,setadminPassword]=useState("");
  const [message,setMessage]=useState("")
  


useEffect(() => {
  axios.put('http://localhost:8080/updateadmin', {
    
      adminName:adminName ,
      adminPassword: adminPassword
  
  }
  ).then((response) => {
    setMessage(response.data.message)   


     console.log(response)
   
  
  });
}, [adminName,adminPassword])  

const handleSubmit=(e)=>{

e.preventDefault();
if (message === "Admin record updated successfully") {
  alert("updated successfully")
} else {
  alert("record not found");
}


}


    return (
        <div>
                                            <div className="row">        
        <div className="col-md-4">

        </div>
        <div className="col-md-4">
            <form onSubmit={handleSubmit}>
            <div class="form-group row">
    <div class="col-sm-8">
        <h3> Update Admin</h3>
    </div>
  </div>

  <div class="form-group row">
    <div class="col-sm-8">
      <input type="text" 
                    pattern="[A-Za-z ]{1,20}" 
                    title="must be characters and range from [1-20]"
                    onChange={(e)=>setAdminName(e.target.value)}

      class="form-control" 
      id="adminName"
       placeholder="Admin Name"/>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-8">
      <input type="text"
      
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                            onChange={(e)=>setadminPassword(e.target.value)}

       class="form-control" id="adminPassword" placeholder="Admin Password"/>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-8">
      <button type="submit" class="btn btn-primary">Update Admin</button>
    </div>
  </div>
</form>

        </div>


            </div>


        </div>
    )
}
