import React, { useState,useEffect } from 'react';
const axios = require('axios').default;;

export default function GetAllScheduler() {


    const [schedulers,setSchedulers]=useState([]);
    
    useEffect(() => {

      axios.get('http://localhost:8080/getallschedulersrecord').then((response)=>{
        setSchedulers(response.data.schedulerListInfo)
    
      });

    })

    return (
        <div>
            <div className="container">

<table class="table">
<thead class="thead-light">
<tr>
<th scope="col">Scheduler Id</th>
<th scope="col">Scheduler Name</th>
<th scope="col">Truck number </th>
<th scope="col">Scheduler Contact</th>
</tr>
</thead>
<tbody>
{
schedulers.map(
    scheduler=>
    <tr key={scheduler.schedulerId}>
    <td>{scheduler.schedulerId}</td>

      <td>{scheduler.schedulerName}</td>
      <td>{scheduler.truckNumber}</td>
      <td>{scheduler.schedulerContact}</td>




</tr>
  )
}
</tbody>
</table>




</div>








        </div>
    )
}
