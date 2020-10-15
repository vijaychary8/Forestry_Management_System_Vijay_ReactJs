import React, { useState,useEffect } from 'react'
const axios = require('axios').default;

export default function DeleteAdmin() {
  var [adminName,setAdminName]=useState("");
  var [err,setError]=useState(true)

  useEffect(() => {
    axios.delete('http://localhost:8080/deleteadmin', {
      
      params: {
        adminName: adminName    
      }
    }
    ).then((response) => {
      setError(response.data.error)
  
  
       console.log(response)
     
    
    });
  }, [adminName])  
  

  const handleSubmit=(e)=>{

    e.preventDefault();
    if (!err) {
      alert(" deleted");
     
    } else {
      alert("record not found")
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
        <h4> Delete Admin</h4>
    </div>
  </div>

  <div class="form-group row">
    <div class="col-sm-8">
      <input type="text" class="form-control"
                          pattern="[A-Za-z ]{1,20}" 
                          title="must be characters and range from [1-20]"
            id="adminName" placeholder="Admin Name"
            onChange={(e)=>setAdminName(e.target.value)}
            />
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-8">
      <button type="submit" class="btn btn-primary">Delete Admin</button>
    </div>
  </div>
</form>

        </div>


            </div>



        </div>
    )
}
