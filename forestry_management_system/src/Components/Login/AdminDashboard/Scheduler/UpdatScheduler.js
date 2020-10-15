import React ,{useState,useEffect}from 'react'
const axios = require('axios').default;


export default function UpdatScheduler() {


    const initialValues={
        schedulerId:"",
        schedulerName:"",
          truckNumber:"",
      
        schedulerContact:""
      }
      
      const [scheduler,setScheduler]=useState(initialValues)
      
      const [message,setMessage]=useState("")
      useEffect(() => {
        axios.put('http://localhost:8080/updatescheduler',scheduler
        ).then((response) => {
          //setMessage(response.data.message)  
      
          setMessage(response.data.message)
      
      
         
        
        });
      } ,[scheduler]);
      
      
      const handleInputChange = (e) =>{
        var{name, value} = e.target
        setScheduler({
            ...scheduler,
            [name]: value
        });
      }
      console.log(scheduler)
      const handleSubmit=(e)=>{
      
      e.preventDefault();
      if(message==="Scheduler record added successfully"){
        alert("added Successfully");
      }
      else{
        alert("Shceduler is alredy present")
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
<h4> Update Scheduler</h4>
</div>
</div>

<div class="form-group row">
<div class="col-sm-8">
<input type="text" pattern="^[1-9]\d{0,3}" title="must be number of range[1-100]" class="form-control" name="schedulerId" 
onChange={handleInputChange}
placeholder="Scheduler Id" />
</div>
</div>
<div class="form-group row">
<div class="col-sm-8">
<input type="text" pattern="[A-Za-z ]{1,20}" onChange={handleInputChange}

                          title="must be characters and range from [1-20]"
 class="form-control" name="schedulerName" placeholder="Scheduler Name"/>
</div>
</div>  
<div class="form-group row">
<div class="col-sm-8">
<input type="text" class="form-control"onChange={handleInputChange}
 name="truckNumber" placeholder="Truck Number"/>
</div>
</div> 
<div class="form-group row">
<div class="col-sm-8">
<input type="text" class="form-control" onChange={handleInputChange}
name="schedulerContact" placeholder="Scheduler Contact"/>
</div>
</div> 

<div class="form-group row">
<div class="col-sm-8">
<button type="submit" class="btn btn-primary">Update Scheduler</button>
</div>
</div>
</form>

</div>


</div>
</div>



</div>
    )
}
