import React, { Component } from 'react'
const axios = require('axios').default;
export default class getAllCustomers extends Component{

  constructor(props){
    super(props)
    this.state={
      users:[]
    }

  }


componentDidMount(){
  axios.get('http://localhost:8080/getallcustomersrecord').then((response)=>{
    this.setState({users:response.data.customerListInfo})

  });
}

render(){
    return (
        <div>
        <div className="container">

        <table class="table" style={{color:"white"}}>
  <thead class="thead-light">
    <tr>
      <th scope="col">customerId</th>
      <th scope="col">CustomerName</th>
      <th scope="col">MailId</th>
      <th scope="col">Address</th>
      <th scope="col">Town</th>
      <th scope="col">Zipcode</th>
      <th scope="col">Contact</th>


    </tr>
  </thead>
  <tbody>


{
  this.state.users.map(
    user=>
    <tr key={user.customerId}>
      <td>{user.customerId}</td>
      <td>{user.customerName}</td>
      <td>{user.customerEmail}</td>
      <td>{user.customerAddress}</td>
      <td>{user.customerTown}</td>
      <td>{user.customerPostalCode}</td>
      <td>{user.customerContact}</td>


    </tr>
  )
}

    {/* <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>


    </tr> */}
 </tbody>
</table>


            
        </div>
        </div>

    );
    }
}
