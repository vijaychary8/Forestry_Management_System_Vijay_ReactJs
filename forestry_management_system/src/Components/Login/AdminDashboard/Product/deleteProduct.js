import React, { useState, useEffect } from 'react';
const axios = require('axios').default;


export default function DeleteProduct() {
  const [productId,setProductId]=useState("");
  const [err,setError]=useState(true)

  useEffect(() => {
    axios.delete('http://localhost:8080/deleteproduct', {
      
      params: {
        productId: productId    
      }
    }
    ).then((response) => {
      //setMessage(response.data.message)   
      setError(response.data.error)
  
  
       console.log(response)
     
    
    });
  }, [productId])  
  

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
        <div className="row">        
        <div className="col-md-4">

        </div>
        <div className="col-md-4">
            <form onSubmit={handleSubmit}>
            <div class="form-group row">
    <div class="col-sm-8">
        <h3> Delete Product</h3>
    </div>
  </div>

  <div class="form-group row">
    <div class="col-sm-8">
      <input type="text" pattern="^[1-9]\d{0,3}" 
      onChange={(e)=>setProductId(e.target.value)}
      title="must be number of range[1-100]" class="form-control" id="inputProductId" placeholder="Product id"/>
    </div>
  </div>

  <div class="form-group row">
    <div class="col-sm-8">
      <button type="submit" class="btn btn-primary">Delete product</button>
    </div>
  </div>
</form>

        </div>
        </div>

    );
}
