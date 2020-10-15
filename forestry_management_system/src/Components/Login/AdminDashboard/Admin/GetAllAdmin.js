import React, { useState,useEffect } from 'react'
const axios = require('axios').default;


export default function GetAllAdmin(props) {
    // constructor(props){
    //     super(props)
    //     this.state={
    //       users:[]
    //     }
    
    //   }

      const [admins,setAdmins]=useState([]);
    
    useEffect(() => {

      axios.get('http://localhost:8080/getalladminsrecord').then((response)=>{
        setAdmins(response.data.adminListInfo)
    
      });

    })
    
    return (
        <div>
            <div className="container">

<table class="table col-md-6" style={{color:"blue"}}>
<thead class="thead-light ">
<tr>
<th scope="col">Admin Name</th>

</tr>
</thead>
<tbody>
{
admins.map(
    admin=>
    <tr key={admin.adminName}>
      <td>{admin.adminName}</td>

</tr>
  )
}

</tbody>
</table>




</div>

        </div>
    )
}
