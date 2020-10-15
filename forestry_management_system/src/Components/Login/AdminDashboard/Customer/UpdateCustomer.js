import React, { useState, useEffect } from 'react';
const axios = require('axios').default;


export default function UpdateCustomer() {
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
      
      var[customerBean, setCustomers] = useState(initalValues);
      const [err,setError]=useState(true)
    
      useEffect(() => {
        axios.put('http://localhost:8080/updatecustomer', 
          
        customerBean
       
        
        ).then((response) => {
          //setMessage(response.data.message)  
    
          setError(response.data.error)
      
      
         
        
        });
      }, [customerBean])  
      
    
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
      if (!err) {
        alert(" added");
       
      } else {
        alert("Customer  is already found")
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
        <h4> Update Customer</h4>
    </div>
  </div>

  <div class="form-group row">
    <div class="col-sm-8">
      <input type="text" pattern="^[1-9]\d{0,3}"

      onChange={handleInputChange}
       title="must be number of range[1-100]" class="form-control" name="customerId" placeholder="Customer id"/>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-8">
      <input type="text" 
            onChange={handleInputChange}

                          pattern="[A-Za-z ]{1,20}" 
                          title="must be characters and range from [1-20]"
      
      class="form-control"
       name="customerName" 
       placeholder="Customer Name"/>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-8">
      <input type="email"       onChange={handleInputChange}
class="form-control" name="customerEmail" placeholder="Email Id"/>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-8">
      <input type="text"       onChange={handleInputChange}

                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
      class="form-control" name="customerPassword" placeholder="Password"/>
    </div>
  </div>
  <div class="form-group row">
  <div class="col-sm-8">

    <input type="text" class="form-control"       onChange={handleInputChange}
name="customerAddress" placeholder="Address"/>
  </div>
  </div>

  <div class="form-group row">
    <div class="col-sm-8">

      <input type="text" class="form-control"      onChange={handleInputChange}
 name="customerTown" placeholder="Town"/>
    </div>
    </div>

    <div class="form-group row">
    <div class="col-sm-8">

      <input type="text" class="form-control"       onChange={handleInputChange}
 name="customerPostalCode" placeholder="Zip Code"/>
    </div>
    </div>
    <div class="form-group row">
    <div class="col-sm-8">


    <input type="text" pattern="^[6-9][0-9]{9}"
                                    title="allows the number starts with digit (6,7,8,9) " class="form-control"
                                    name="customerContact" 
                                    onChange={handleInputChange}
                              
                                     placeholder="Contact Number" required/>
  </div>
  </div>




  <div class="form-group row">
    <div class="col-sm-8">
      <button type="submit" class="btn btn-primary">Update Customer</button>
    </div>
  </div>
</form>

        </div>


            </div>
        </div>
    )
}
