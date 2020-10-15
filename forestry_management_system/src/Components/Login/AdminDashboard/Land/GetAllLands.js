import React, { useState,useEffect } from 'react';
const axios = require('axios').default;;

export default function GetAllLands() {

    const [lands,setLands]=useState([]);
    
    useEffect(() => {

      axios.get('http://localhost:8080/getalllandsrecord').then((response)=>{
        setLands(response.data.landListInfo)
    
      });

    })

    return (
        <div>
                    <div className="container">

<table class="table" style={{color:"white"}}>
<thead class="thead-light">
<tr>
<th scope="col">Surver Number</th>
<th scope="col">Customer Name</th>
<th scope="col">Area(Sq.F) </th>
</tr>
</thead>
<tbody>
    {
lands.map(
    land=>
    <tr key={land.surveyNumber}>
    <td>{land.surveyNumber}</td>

      <td>{land.ownerName}</td>
      <td>{land.landArea}</td>



</tr>
  )
}

</tbody>
</table>




</div>






        </div>
    )
}
