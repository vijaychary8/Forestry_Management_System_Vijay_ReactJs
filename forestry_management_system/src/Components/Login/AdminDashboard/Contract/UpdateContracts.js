import React, { useState, useEffect } from 'react'
const axios = require('axios').default;;


export default function UpdateContracts() {
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
    
      useEffect(() => {
        axios.put('http://localhost:8080/updatecontract', 
          
        contract
       
        
        ).then((response) => {
    
          setError(response.data.error)
      
      
         
        
        });
      }, [contract])  
      
    
      const handleInputChange = (e )=>{
        var{name, value} = e.target
        setContract({
            ...contract,
            [name]: value
        });
    }
    console.log(contract)
    const handleSubmit=(e)=>{
    
      e.preventDefault();
      if (!err) {
        alert(" updated");
       
      } else {
        alert("Contract  is not found")
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
        <h4> Update Contract</h4>
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
      <input type="text"
            onChange={handleInputChange}
            pattern="^[1-9]\d{0,3}" title="must be number of range[1-100]"class="form-control" name="customerId" placeholder="Customer Id"/>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-8">
      <input type="text"       onChange={handleInputChange}
 pattern="^[1-9]\d{0,3}" title="must be number of range[1-100]" class="form-control" name="productId" placeholder="Product Id"/>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-8">
      <input type="text"       onChange={handleInputChange}
 class="form-control" name="deliveryPlace" placeholder="Delivery Place"/>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-8">
      <input type="date"      onChange={handleInputChange}
 class="form-control" name="deliveryDate" placeholder="Delivery Date"/>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-8">
      <input type="text" pattern="^[1-9]\d{0,3}"       onChange={handleInputChange}
title="must be number of range[1-100]" class="form-control" name="quantity" placeholder="Quantity "/>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-8">
      <input type="text" pattern="^[1-9]\d{0,3}" title="must be number of range[1-100]"
            onChange={handleInputChange}
            class="form-control" name="schedulerId" placeholder="Scheduler Id "/>
    </div>
  </div>



  <div class="form-group row">
    <div class="col-sm-8">
      <button type="submit" class="btn btn-primary">Update Contract</button>
    </div>
  </div>
</form>

        </div>
        </div>




        </div>
    )
}
