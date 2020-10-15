import React, { useState } from 'react';
const axios = require('axios').default;


export default function AddOrder() {
  const initialization={
    orderNumber:"",
    contractNumber:"",
    customerId:"",
    productID:"",
    deliveryPlace:"",
    deliveryDate:"",
    quantity:"",
    schedulerId:"",
    
    
      }
      var[order, setOrder] = useState(initialization);
      const [err,setError]=useState(false)
    
  const add=()=>{
        axios.post('http://localhost:8080/addorder', 
          
        order
       
        
        ).then((response) => {
          //setMessage(response.data.message)  
    
          setError(response.data.error)
      
      
         
        
        });
      }  
      
    
      const handleInputChange = (e )=>{
        var{name, value} = e.target
        setOrder({
            ...order,
            [name]: value
        });
    }
    console.log(order)
    const handleSubmit=(e)=>{
    
      e.preventDefault();
      add();
      if (!err) {
        alert(" added");
       
       // setTimeout("location.reload(true)");
      } else {
        alert("order  is already found")
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
        <h3> Add Order</h3>
    </div>
  </div>

  <div class="form-group row">
    <div class="col-sm-8">
      <input type="text" pattern="^[1-9]\d{0,3}"
      onChange={handleInputChange}
      title="must be number of range[1-100]"class="form-control" name="orderNumber" placeholder="Order id"/>
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
      <input type="text" pattern="^[1-9]\d{0,3}"
            onChange={handleInputChange}
            title="must be number of range[1-100]" class="form-control" name="customerId" placeholder="Customer Id"/>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-8">
      <input type="text" pattern="^[1-9]\d{0,3}" title="must be number of range[1-100]"
            onChange={handleInputChange}
            class="form-control" name="productId" placeholder="Product Id"/>
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
      <input type="text" pattern="^[1-9]\d{0,3}" 
            onChange={handleInputChange}
            title="must be number of range[1-100]" class="form-control" name="quantity" placeholder="Quantity "/>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-8">
      <input type="text" pattern="^[1-9]\d{0,3}" 
            onChange={handleInputChange}
            title="must be number of range[1-100]" class="form-control" name="schedulerId" placeholder="Scheduler Id "/>
    </div>
  </div>



  <div class="form-group row">
    <div class="col-sm-8">
      <button type="submit" class="btn btn-primary">Add Order</button>
    </div>
  </div>
</form>

        </div>
        </div>


        </div>
    )
}
