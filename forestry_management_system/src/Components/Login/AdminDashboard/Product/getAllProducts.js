import React, { useState,useEffect } from 'react';
const axios = require('axios').default;;


export default function GetAllProducts(props) {


    const [products,setProducts]=useState([]);
    
    useEffect(() => {

      axios.get('http://localhost:8080/getallproductsrecord').then((response)=>{
        setProducts(response.data.productListInfo)
    
      });

    })

    return (
        <div>
            <div className="container">

<table class="table" style={{color:"white"}}>
<thead class="thead-light">
<tr>
<th scope="col">Product id</th>
<th scope="col">Product Name</th>
<th scope="col">Product Quantity</th>
<th scope="col">Product Description</th>


</tr>
</thead>
<tbody>
{
products.map(
    product=>
    <tr key={product.productId}>
    <td>{product.productId}</td>

      <td>{product.productName}</td>
      <td>{product.productQuantity}</td>
      <td>{product.productDescription}</td>



</tr>
  )
}
</tbody>
</table>




</div>

            
        </div>
    )
}
