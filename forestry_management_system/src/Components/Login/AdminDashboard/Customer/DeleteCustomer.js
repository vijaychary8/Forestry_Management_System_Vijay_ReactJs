import React, { useState, useEffect } from 'react'
const axios = require('axios').default;

export default function DeleteCustomer() {

  const [customerId,setCustomerId]=useState("");
  const [err,setError]=useState(true)

  useEffect(() => {
    axios.delete('http://localhost:8080/deletecustomer', {
      
      params: {
        customerId: customerId    
      }
    }
    ).then((response) => {
      //setMessage(response.data.message)   
      setError(response.data.error)
  
  
       console.log(response)
     
    
    });
  }, [customerId])  
  

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
<h3> Delete Customer</h3>
</div>
</div>

<div class="form-group row">
<div class="col-sm-8">
<input type="text" pattern="^[1-9]\d{0,3}" title="must be number of range[1-100]" 
            onChange={(e)=>setCustomerId(e.target.value)}

class="form-control" id="customerId" placeholder="Customer id"/>
</div>
</div>
<div class="form-group row">
    <div class="col-sm-8">
      <button type="submit" class="btn btn-primary">Delete Customer</button>
    </div>
  </div>
</form>

        </div>


            </div>
        </div>

        
    )
}
