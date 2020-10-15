import React, { useState } from 'react'
const axios = require('axios').default;




export default function GetContracts() {

  var [contractId, setContractId] = useState();
  var [contract, setContract] = useState({});
  const [message,setMessage]=useState("")

  const handleInput = () => {
  

      axios.get('http://localhost:8080/getcontract', {
          params: {
              contractNumber: contractId
          }
      }
      ).then((response) => {
          setContract(response.data.contract);
      }).catch(error => {
        setMessage(error.message );
        console.error('There was an error!', error);
        alert(error)
    });
  }
  
console.log(message)
  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(contractId)
    handleInput();


}


  return (
        <div>
                                            <div className="row">        
        <div className="col-md-4">

        </div>
        <div className="col-md-4">
            <form onSubmit={handleSubmit} >
            <div class="form-group row">
    <div class="col-sm-8">
        <h4> Get Contract</h4>
    </div>
  </div>

  <div class="form-group row">
    <div class="col-sm-8">
      <input type="text" pattern="^[1-9]\d{0,3}" title="must be number of range[1-100]"
       class="form-control" id="contractNumber" placeholder="Contract Id"
       onChange={(e)=>setContractId(e.target.value)}


       />
    </div>
  </div>


  <div class="form-group row">
    <div class="col-sm-8">
      <button type="submit" class="btn btn-primary">Get Contract</button>
    </div>
  </div>
</form>

        </div>




        </div>

        <div className="container">

<table class="table" style={{color:"white"}}>
<thead class="thead-light">
<tr>
<th scope="col">contractNumber</th>
<th scope="col">customerId</th>
<th scope="col">productId</th>
<th scope="col">deliveryPlace</th>
<th scope="col">deliveryDate</th>
<th scope="col">quantity</th>
<th scope="col">schedulerId</th>

</tr>
</thead>
<tbody>
<tr>
<td>{contract.contractNumber}</td>
      <td>{contract.customerId}</td>
      <td>{contract.productId}</td>
      <td>{contract.deliveryPlace}</td>
      <td>{contract.deliveryDate}</td>
      <td>{contract.quantity}</td>    
        <td>{contract.schedulerId}</td>



</tr>
</tbody>
</table>




</div>




        </div>
    )
}
