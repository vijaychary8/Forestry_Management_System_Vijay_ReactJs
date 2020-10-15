import React, { useState,useEffect } from 'react'
const axios = require('axios').default;


export default function GetAllContracts() {



    const [contracts,setContracts]=useState([]);
    
    useEffect(() => {

      axios.get('http://localhost:8080/getallcontractsrecord').then((response)=>{
        setContracts(response.data.contractListInfo)
    
      });

    })

    return (
        <div>
                    <div className="container">

<table class="table" style={{color:"white"}}>
<thead class="thead-light">
<tr>
<th scope="col">Contract Number</th>
<th scope="col">Customer Id</th>
<th scope="col">Product Id</th>
<th scope="col">Delivery Place</th>
<th scope="col">Delivery Date</th>
<th scope="col">Quantity</th>
<th scope="col">Scheduler Id</th>

</tr>
</thead>
<tbody>
{
contracts.map(
    contract=>
    <tr key={contract.contractNumber}>
      <td>{contract.contractNumber}</td>
      <td>{contract.customerId}</td>
      <td>{contract.productId}</td>
      <td>{contract.deliveryPlace}</td>
      <td>{contract.deliveryDate}</td>
      <td>{contract.quantity}</td>    
        <td>{contract.schedulerId}</td>



</tr>
  )
}
</tbody>
</table>




</div>



        </div>
    )
}
