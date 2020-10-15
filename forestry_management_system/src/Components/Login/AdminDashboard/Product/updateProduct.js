import React, { useState, useEffect } from 'react';
const axios = require('axios').default;


export default function UpdateProduct() {


  
  const initialValues={
    productId:"",
    productName:"",
      productQuantity:"",
  
    productDescription:""
  }
  
  const [product,setProduct]=useState(initialValues)
  
  const [message,setMessage]=useState("")
  useEffect(() => {
    axios.put('http://localhost:8080/updateproduct',product
    ).then((response) => {
      //setMessage(response.data.message)  
  
      setMessage(response.data.message)
  
  
     
    
    });
  } ,[product]);
  
  
  const handleInputChange = (e) =>{
    var{name, value} = e.target
    setProduct({
        ...product,
        [name]: value
    });
  }
  console.log(product)
  const handleSubmit=(e)=>{
  
  e.preventDefault();
  if(message==="Product record added successfully"){
    alert("added Successfully");
  }
  else{
    alert("Product is alredy present")
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
        <h3> Update Product</h3>
    </div>
  </div>

  <div class="form-group row">
    <div class="col-sm-8">
      <input type="text" pattern="^[1-9]\d{0,3}" title="must be number of range[1-100]" class="form-control" name="productId" 
      onChange={handleInputChange}
      placeholder="Product id"/>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-8">
      <input type="text"  class="form-control"       onChange={handleInputChange}
name="productName" placeholder="Product Name"/>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-8">
      <input type="text" pattern="^[1-9]\d{0,3}"      onChange={handleInputChange}
 title="must be number of range[1-100]" class="form-control" name="productQuantity" placeholder="Product Quantity"/>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-8">
      <input type="text" class="form-control"      onChange={handleInputChange}
 name="productDescription" placeholder="Product Description"/>
    </div>
  </div>

  <div class="form-group row">
    <div class="col-sm-8">
      <button type="submit" class="btn btn-primary">Update product</button>
    </div>
  </div>
</form>

        </div>
        </div>

    );
}
