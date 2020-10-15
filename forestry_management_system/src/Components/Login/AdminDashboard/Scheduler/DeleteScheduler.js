import React, { useState, useEffect } from 'react';
const axios = require('axios').default;


export default function DeleteScheduler() {

    const [schedulerId,setSchedulerId]=useState("");
  const [err,setError]=useState(true)
  const [message,setMessage]=useState("")

  useEffect(() => {
    axios.delete('http://localhost:8080/deletescheduler', {
      
      params: {
        schedulerId: schedulerId    
      }
    }
    ).then((response) => {
      //setMessage(response.data.message)   
      setError(response.data.error)
  
  
       console.log(response)
     
    
    }).catch(error => {
      setMessage(error.message );
      console.error('There was an error!', error);
      alert("cannot delete the scheduler ");
  });

  }, [schedulerId])  
  console.log(message)

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
        <div>

<div className="row">        
<div className="col-md-4">

</div>
<div className="col-md-4">
<form onSubmit={handleSubmit}>
<div class="form-group row">
<div class="col-sm-8">
<h4> Delete Scheduler</h4>
</div>
</div>

<div class="form-group row">
<div class="col-sm-8">
<input type="text" pattern="^[1-9]\d{0,3}" title="must be number of range[1-100]" 
            onChange={(e)=>setSchedulerId(e.target.value)}

class="form-control" id="schedulerId" placeholder="Scheduler Id" />
</div>
</div>    

<div class="form-group row">
<div class="col-sm-8">
<button type="submit" class="btn btn-primary">Delete Scheduler</button>
</div>
</div>
</form>

</div>


</div>
</div>



</div>



)
}
