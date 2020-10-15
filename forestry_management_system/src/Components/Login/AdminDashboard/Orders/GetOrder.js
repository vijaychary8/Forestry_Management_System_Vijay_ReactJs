import React,{useState} from 'react'
const axios = require('axios').default;

export default function GetOrder() {


  var [orderNumber, setOrderNumber] = useState();
  var [order, setOrder] = useState({});
  const [message,setMessage]=useState("");

  const handleInput = () => {
  

      axios.get('http://localhost:8080/getorder', {
          params: {
              orderNumber: orderNumber
          }
      }
      ).then((response) => {
          setOrder(response.data.order);
      }).catch(error => {
        setMessage(error.message );
        console.error('There was an error!', error);
        alert(error)
    });

      
  }
  console.log(message)


  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(orderNumber)
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
        <h3> Get Order</h3>
    </div>
  </div>

  <div class="form-group row">
    <div class="col-sm-8">
      <input type="text" pattern="^[1-9]\d{0,3}" title="must be number of range[1-100]"
             onChange={(e)=>setOrderNumber(e.target.value)}

      class="form-control" id="orderNumber" placeholder="Order id"/>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-8">
      <button type="submit" class="btn btn-primary">Get Order</button>
    </div>
  </div>
</form>

        </div>
        </div>


        <div className="container">

<table class="table" style={{color:"white"}}>
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
<tr>
<td>{order.orderNumber}</td>

<td>{order.contractNumber}</td>
      <td>{order.customerId}</td>
      <td>{order.productId}</td>
      <td>{order.deliveryPlace}</td>
      <td>{order.deliveryDate}</td>
      <td>{order.quantity}</td>    
        <td>{order.schedulerId}</td>



</tr>
</tbody>
</table>




</div>


            
        </div>
    )
}
