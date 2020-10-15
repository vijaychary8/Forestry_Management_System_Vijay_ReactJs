import React, { useState,useEffect } from 'react'
const axios = require('axios').default;


export default function AddAdmin() {


  const init={
    adminName:"",
    adminPassword:""
  }

  var [admin,setAdmin]=useState(init);
  var [err,setError]=useState(false)
  



  useEffect(() => {
  axios.post('http://localhost:8080/addadmin',admin 
  ).then((response) => {
    //setMessage(response.data.message)   
    setError(response.data.error);
    


     console.log(response)
   
  
  });
},[admin]);  

const handleInputChange = (e) =>{
  var{name, value} = e.target
  setAdmin({
      ...admin,
      [name]: value
  });
}
console.log(admin)

const handleSubmit=(e)=>{

e.preventDefault();
if (!err) {
  alert("added successfully")
} else {
  alert("already present");
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
                <h4> Add Admin</h4>
              </div>
            </div>

            <div class="form-group row">
              <div class="col-sm-8">
                <input type="text" class="form-control" name="adminName"
                  pattern="[A-Za-z ]{1,20}"
                  title="must be characters and range from [1-20]"
                  onChange={handleInputChange}


                  placeholder="Admin Name" />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-8">
                <input type="text"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                  class="form-control" name="adminPassword" placeholder="Admin Password" 
                  onChange={handleInputChange}
                  />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-8">
                <button type="submit" class="btn btn-primary">Add Admin</button>
              </div>
            </div>
          </form>

        </div>


      </div>

    </div>
  )
}
