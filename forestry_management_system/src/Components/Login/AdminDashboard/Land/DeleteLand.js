import React, { useState, useEffect } from 'react'
const axios = require('axios').default;

export default function DeleteLand() {




  const [surveyNumber,setSurveyNumber]=useState("");
  const [err,setError]=useState(true)

  useEffect(() => {
    axios.delete('http://localhost:8080/deleteland', {
      
      params: {
        surveyNumber: surveyNumber    
      }
    }
    ).then((response) => {
      setError(response.data.error);
  
  
     
    
    });
    

  }, [surveyNumber]) 
  

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
<h3> Delete Land</h3>
</div>
</div>

<div class="form-group row">
<div class="col-sm-8">
<input type="text" pattern="^[1-9]\d{0,3}"
      onChange={(e)=>setSurveyNumber(e.target.value)}
      title="must be number of range[1-100]" class="form-control" id="surveyNumber" placeholder="Survey Number" />
</div>
</div><div class="form-group row">
    <div class="col-sm-8">
      <button type="submit" class="btn btn-primary">Delete Land</button>
    </div>
  </div>
</form>

        </div>


            </div>
        </div>


    )
}
