import React, { useState } from 'react'
const axios = require('axios').default;

export default function AddContract() {

  const initialization={
contractNumber:"",
customerId:"",
productID:"",
deliveryPlace:"",
deliveryDate:"",
quantity:"",
schedulerId:"",


  }
  var[contract, setContract] = useState(initialization);
  const [err,setError]=useState(true)
  const [message,setMessage]=useState("");

  const add=()=> {
    axios.post('http://localhost:8080/addcontract', 
      
    contract
   
    
    ).then((response) => {
      //setMessage(response.data.message)  

      setError(response.data.error)
  
  
     
    
    }).catch(error => {
      setMessage(error.message );
      console.error('There was an error!', error);
  });
  }
  console.log(message)

  const handleInputChange = (e )=>{
    var{name, value} = e.target
    setContract({
        ...contract,
        [name]: value
    });
}
console.log(contract)
const handleSubmit=(e)=>{
  add();

  e.preventDefault();
  if (!err) {
    alert(" added");
   
  } else {
    alert("Contract  is already found")
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
        <h1> Add Contract</h1>
    </div>
  </div>

  <div class="form-group row">
    <div class="col-sm-8">
      <input type="text" pattern="^[1-9]\d{0,3}" 
      onChange={handleInputChange}
      title="must be number of range[1-100]" class="form-control" name="contractNumber" placeholder="Contract Id"/>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-8">
      <input type="text"  pattern="^[1-9]\d{0,3}" 
            onChange={handleInputChange}
            title="must be number of range[1-100]" class="form-control" name="customerId" placeholder="Customer Id"/>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-8">
      <input type="text"  pattern="^[1-9]\d{0,3}" 
            onChange={handleInputChange}

      title="must be number of range[1-100]" class="form-control" name="productId" placeholder="Product Id"/>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-8">
      <input type="text" class="form-control" 
            onChange={handleInputChange}
            name="deliveryPlace" placeholder="Delivery Place"/>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-8">
      <input type="date" class="form-control"
            onChange={handleInputChange}
            name="deliveryDate" placeholder="Delivery Date"/>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-8">
      <input type="tect"  pattern="^[1-9]\d{0,3}" 
            onChange={handleInputChange}
            title="must be number of range[1-100]" class="form-control" name="quantity" placeholder="Quantity "/>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-8">
      <input type="text"  pattern="^[1-9]\d{0,3}" 
            onChange={handleInputChange}
            title="must be number of range[1-100]" class="form-control" name="schedulerId" placeholder="Scheduler Id "/>
    </div>
  </div>



  <div class="form-group row">
    <div class="col-sm-8">
      <button type="submit" class="btn btn-primary">Add Contract</button>
    </div>
  </div>
</form>

        </div>
        </div>



        </div>
    )
}
