import React,{useState} from 'react'
const axios = require('axios').default;

export default function GetCustomers() {
  

  var [customerId, setCustomerId] = useState();
  var [customer, setCustomer] = useState({});
  var [err,setError]=useState(true);
  var [message,setMessage]=useState("");

  const handleInput = () => {
  

      axios.get('http://localhost:8080/getcustomer', {
          params: {
              customerId: customerId
          }
      }
      ).then((response) => {
          setCustomer(response.data.customer);
          setError(response.data.error);
      
      }).catch(error => {
        setMessage(error.message );
        console.error('There was an error!', error);
        alert(error)
    });
  }
  
  console.log(message)
  console.log(err)

  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(customerId)
    handleInput();

  
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
        <h4> Get Customer</h4>
        </div>
        </div>
        
        <div class="form-group row">
        <div class="col-sm-8">
        <input type="text" pattern="^[1-9]\d{0,3}" title="must be number of range[1-100]" class="form-control" 
               onChange={(e)=>setCustomerId(e.target.value)}

        id="customerId" placeholder="Customer id"/>
        </div>
        </div>
        <div class="form-group row">
            <div class="col-sm-8">
              <button type="submit" class="btn btn-primary">Get Customer</button>
            </div>
          </div>
        </form>
        
                </div>
        
        
                    </div>
        <div className="container">

        <table class="table" style={{color:"white"}}>
  <thead class="thead-light">
    <tr>
      <th scope="col">customerId</th>
      <th scope="col">CustomerName</th>
      <th scope="col">MailId</th>
      <th scope="col">Address</th>
      <th scope="col">Password</th>
      <th scope="col">Town</th>
      <th scope="col">PostalCode</th>
      <th scope="col">Contract</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{customer.customerId}</td>
      <td>{customer.customerName}</td>
      <td>{customer.customerEmail}</td>
      <td>{customer.customerAddress}</td>
      <td>{customer.customerPassword}</td>
      <td>{customer.customerTown}</td>
      <td>{customer.customerPostalCode}</td>
      <td>{customer.customerContact}</td>



    </tr>
 </tbody>
</table>




        </div>






                </div>
        

                )
}
