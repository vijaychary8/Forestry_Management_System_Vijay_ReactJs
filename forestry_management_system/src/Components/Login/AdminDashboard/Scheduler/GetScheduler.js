import React ,{useState}from 'react'
const axios = require('axios').default;


export default function GetScheduler() {
    var [schedulerId, setSchedulerId] = useState();
    var [scheduler, setScheduler] = useState({});
  
    const handleInput = () => {
    
  
        axios.get('http://localhost:8080/getscheduler', {
            params: {
                schedulerId: schedulerId
            }
        }
        ).then((response) => {
            setScheduler(response.data.scheduler);
        });
  
        
    }
    
  
    const handleSubmit =(e)=>{
      e.preventDefault();
      console.log(schedulerId)
      handleInput();
  
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
<h4> Get Scheduler</h4>
</div>
</div>

<div class="form-group row">
<div class="col-sm-8">
<input type="text" pattern="^[1-9]\d{0,3}" 
onChange={(e)=>setSchedulerId(e.target.value)}
title="must be number of range[1-100]" class="form-control" id="schedulerId" placeholder="Scheduler Id" />
</div>
</div>    

<div class="form-group row">
<div class="col-sm-8">
<button type="submit" class="btn btn-primary">Get Scheduler</button>
</div>
</div>
</form>

</div>
</div>
</div>
<div className="container">
<br/>
<br/>
<table class="table " style={{color:"white"}}>
<thead class="thead-light">
<tr>
<th scope="col">Scheduler Id</th>
<th scope="col">Scheduler Name</th>
<th scope="col">Truck number </th>
<th scope="col">Scheduler Contact</th>
</tr>
</thead>
<tbody>
<tr>
    <td>{scheduler.schedulerId}</td>
<td>{scheduler.schedulerName}</td>
<td>{scheduler.truckNumber}</td>
<td>{scheduler.schedulerContact}</td>


</tr>
</tbody>
</table>




</div>








</div>




    )
}
