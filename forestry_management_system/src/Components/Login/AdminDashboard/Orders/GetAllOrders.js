import React, { useState,useEffect } from 'react'
const axios = require('axios').default;

export default function GetAllOrders() {


    const [orders,setOrders]=useState([]);
    
    useEffect(() => {

      axios.get('http://localhost:8080/getallordersrecord').then((response)=>{
        setOrders(response.data.orderListInfo)
    
      });

    })

    return (
        <div>
         <table class="table table-bordered " style={{color:"white"}}>
<thead class="thead-light">
<tr>
<th scope="col">orderNumber</th>
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
{
orders.map(
    order=>
    <tr key={order.orderNumber}>
    <td>{order.orderNumber}</td>

      <td>{order.contractNumber}</td>
      <td>{order.customerId}</td>
      <td>{order.productId}</td>
      <td>{order.deliveryPlace}</td>
      <td>{order.deliveryDate}</td>
      <td>{order.quantity}</td>    
        <td>{order.schedulerId}</td>



</tr>
  )
}
</tbody>
</table>
   
        </div>
    )
}
