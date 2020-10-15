import React, { useState } from 'react'
const axios = require('axios').default;


export default function Register() {

  const initalValues={

    customerId:"",
    customerName:"",
    customerEmail:"",
    customerContact:"",
    customerPassword:"",
    customerAddress:"",
    customerTown:"",
    customerPostalCode:""
    
    }
      
      var [customerBean, setCustomers] = useState(initalValues);
      const [err,setError]=useState(true)
      const [message,setMessage]=useState("");
    
      const add=()=> {
        axios.post('http://localhost:8080/addcustomer', 
          
        customerBean
       
        
        ).then((response) => {
          //setMessage(response.data.message)  
    
          setError(response.data.error)
      if(response.error===false){
        alert("Registered Succesfully")
      }
      
         
        
        }).catch(error => {
          setMessage(error.message );
          console.error('There was an error!', error);
          alert(" Id is already Exist")
      });
      }  
      
    console.log(message);
    console.log(err);
      const handleInputChange = (e )=>{
        var{name, value} = e.target
        setCustomers({
            ...customerBean,
            [name]: value
        });
    }
    console.log(customerBean)
    const handleSubmit=(e)=>{
    
      e.preventDefault();
      add();
      
    }
    
    return (
        <div>
                  <form onSubmit={handleSubmit}>
  <div class="form-row">
  <div class="form-group col-md-6">
      <input type="text" pattern="^[1-9]\d{0,3}" title="must be number of range[1-100]" class="form-control" name="customerId" 
      placeholder="Customer Id" 
      onChange={handleInputChange}

      required/>
    </div>

    <div class="form-group col-md-6">
      <input type="text" pattern="[A-Za-z ]{1,20}" title="must be characters and range from [1-20]"
       class="form-control" name="customerName" 
       onChange={handleInputChange}
 
       placeholder="Name" required/>
    </div>

  </div>
  <div class="form-group ">
      <input type="email" class="form-control" name="customerEmail" 
            onChange={handleInputChange}
      
      placeholder="Mail Id" required/>
    </div>

    <div class="form-group">
    <input type="text" pattern="^[6-9][0-9]{9}"
                                    title="allows the number starts with digit (6,7,8,9) " class="form-control"
                                    name="customerContact" 
                                    onChange={handleInputChange}
                              
                                     placeholder="Contact Number" required/>
  </div>
  <div class="form-group">
    <input type="text" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
    class="form-control" 
    name="customerPassword"
    onChange={handleInputChange}

     placeholder="Password" required/>
  </div>
  <div class="form-group">
    <input type="text" class="form-control" name="customerAddress" 
          onChange={handleInputChange}
    
    placeholder="Address" required/>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <input type="text" class="form-control" name="customerTown"
            onChange={handleInputChange}
      
      placeholder="Town" required/>
    </div>
    <div class="form-group col-md-6">
      <input type="text" pattern="^[1-9]\d{1,6}" title="must be number of range of [1-6] digits"
      
      class="form-control" name="customerPostalCode"
      onChange={handleInputChange}

      placeholder="Zip Code"required/>
    </div>
  </div>
  <div class="form-group">
        <button type="Submit" class="btn btn-primary">Sign Up</button>
      </div>

</form>

        </div>
    )
}
