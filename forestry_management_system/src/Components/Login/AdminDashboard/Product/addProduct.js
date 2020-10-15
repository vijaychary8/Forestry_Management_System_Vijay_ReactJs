import React, { useState } from 'react';
const axios = require('axios').default;

export default function AddProduct() {


  const initialValues={
    productId:"",
    productName:"",
    productQuantity:"",
  productDescription:""
  }
  
  var[product, setProduct] = useState(initialValues);
  var [err,setError]=useState(false);
  const [message,setMessage] =useState("");

 const handleOutPut=() => {
    axios.post('http://localhost080/addproduct', 
      
    product
   
    
    ).then((response) => {
      //setMessage(response.data.message)  

      setError(response.data.error)
  
    
     
    
    });
  } 
  

  const handleInputChange = (e)=>{
    var{name, value} = e.target
    setProduct({
        ...product,
        [name]: value
    });
}
console.log(product)
const handleSubmit=(e)=>{
  

  e.preventDefault();
  handleOutPut();
  if (err) {
    alert(" added");
   
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
        <h3> Add Product</h3>
    </div>
  </div>

  <div class="form-group row">
    <div class="col-sm-8">
      <input type="text" pattern="^[1-9]\d{0,3}" title="must be number of range[1-100]" 
      onChange={handleInputChange}
      class="form-control" name="productId" placeholder="Product id"/>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-8">
      
      <input type="text" class="form-control"
            onChange={handleInputChange}
            name="productName" placeholder="Product Name"/>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-8">
      <input type="text" pattern="^[1-9]\d{0,3}"
            onChange={handleInputChange}
            title="must be number of range[1-100]" class="form-control" name="productQuantity" placeholder="Product Quantity"/>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-8">
      <input type="text" class="form-control"
            onChange={handleInputChange}
            name="productDescription" placeholder="Product Description"/>
    </div>
  </div>

  <div class="form-group row">
    <div class="col-sm-8">
      <button type="submit" class="btn btn-primary">Add product</button>
    </div>
  </div>
</form>

        </div>
        </div>

    );
}
