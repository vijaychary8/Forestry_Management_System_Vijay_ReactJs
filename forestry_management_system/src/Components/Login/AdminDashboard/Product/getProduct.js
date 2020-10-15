import React,{useState} from 'react';
const axios = require('axios').default;


export default function GetProduct() {
  var [productId, setProductId] = useState();
  var [product, setProduct] = useState({});
  const [message,setMessage]=useState("");

  const handleInput = () => {
  

      axios.get('http://localhost:8080/getproduct', {
          params: {
              productId: productId
          }
      }
      ).then((response) => {
          setProduct(response.data.product);
      }).catch(error => {
        setMessage(error.message );
        console.error('There was an error!', error);
        alert(error)
    });


      
  }
  
  console.log(message)

  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(productId)
    handleInput();

}

    return (
        <div className="row">        
        <div className="col-md-4">

        </div>
        <div className="col-md-4">
            <form onSubmit={handleSubmit}>
            <div class="form-group row">
    <div class="col-sm-8">
        <h3> Get Product</h3>
    </div>
  </div>

  <div class="form-group row">
    <div class="col-sm-8">
      <input type="text"  pattern="^[1-9]\d{0,3}" title="must be number of range[1-100]"
                   onChange={(e)=>setProductId(e.target.value)}

      class="form-control" id="inputProductId" placeholder="Product id"/>
    </div>
  </div>

  <div class="form-group row">
    <div class="col-sm-8">
      <button type="submit" class="btn btn-primary">Get product</button>
    </div>
  </div>
</form>

        </div>


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
<tr>
    <td>{product.productId}</td>
<td>{product.productName}</td>
<td>{product.productQuantity}</td>
<td>{product.productDescription}</td>



</tr>
</tbody>
</table>




</div>

        </div>

    );
}
