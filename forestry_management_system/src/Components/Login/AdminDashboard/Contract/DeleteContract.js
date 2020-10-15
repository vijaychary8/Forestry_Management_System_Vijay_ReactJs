import React, { useState, useEffect } from 'react';
const axios = require('axios').default;


export default function DeleteContract() {

  const [contractNumber,setContractNumber]=useState("");
  const [err,setError]=useState(true)

  useEffect(() => {
    axios.delete('http://localhost:8080/deletecontract', {
      
      params: {
        contractNumber: contractNumber    
      }
    }
    ).then((response) => {
      setError(response.data.error)
  
  
       console.log(response)
     
    
    });
  }, [contractNumber])  
  

  const handleSubmit=(e)=>{

    e.preventDefault();
    if (!err) {
      alert(" deleted");
     
     // setTimeout("location.reload(true)");
    } else {
      alert("record not found")
     // setTimeout("location.reload(true)");
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
        <h4> Delete Contract</h4>
    </div>
  </div>

  <div class="form-group row">
    <div class="col-sm-8">
      <input type="text" pattern="^[1-9]\d{0,3}"
      onChange={(e)=>setContractNumber(e.target.value)}
      title="must be number of range[1-100]" class="form-control" id="contractNumber" placeholder="Contract Id"/>
    </div>
  </div>


  <div class="form-group row">
    <div class="col-sm-8">
      <button type="submit" class="btn btn-primary">Delete Contract</button>
    </div>
  </div>
</form>

        </div>




        </div>

        </div>
    )
}
