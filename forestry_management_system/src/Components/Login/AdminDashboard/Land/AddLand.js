import React, { useState } from 'react'
const axios = require('axios').default;

export default function AddLand() {



const initialValues={
  surveyNumber:"",
  ownerName:"",
  landArea:""

}

const [land,setLand]=useState(initialValues)
const [err,setError]=useState(false)


const add=() => {
  axios.post('http://localhost:8080/addland',land
  ).then((response) => {

setError(response.data.error)

   
  
  });
}


const handleInputChange = (e) =>{
  var{name, value} = e.target
  setLand({
      ...land,
      [name]: value
  });
}
console.log(land)
const handleSubmit=(e)=>{

e.preventDefault();
add();
if(!err){
  alert("added Successfully");
}
else{
  alert("Land is alredy present")
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
<h3> Add Land</h3>
</div>
</div>

<div class="form-group row">
<div class="col-sm-8">
<input type="text" pattern="^[1-9]\d{0,3}" 
onChange={handleInputChange}
title="must be number of range[1-100]" class="form-control" name="surveyNumber" placeholder="Survey Number" />
</div>
</div>
<div class="form-group row">
<div class="col-sm-8">
<input type="text"                          
  pattern="[A-Za-z ]{1,20}" 
  onChange={handleInputChange}

 title="must be characters and range from [1-20]"
class="form-control" name="ownerName" placeholder="Owner Name"/>
</div>
</div>  
<div class="form-group row">
<div class="col-sm-8">
<input type="number" 
onChange={handleInputChange}
class="form-control" name="landArea" placeholder="Land Area"/>
</div>
</div> 
<div class="form-group row">
    <div class="col-sm-8">
      <button type="submit" class="btn btn-primary">Add Land</button>
    </div>
  </div>
</form>

        </div>


            </div>
        </div>

            

    )
}
