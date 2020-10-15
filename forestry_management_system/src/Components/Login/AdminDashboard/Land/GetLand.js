import React,{useState} from 'react'
const axios = require('axios').default;

export default function GetLand() {

  var [landId, setLandId] = useState();
  var [land, setLand] = useState({});

  const handleInput = () => {
  

      axios.get('http://localhost:8080/getland', {
          params: {
              surveyNumber: landId
          }
      }
      ).then((response) => {
          setLand(response.data.land);
      });
  }
  

  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(landId)
    handleInput();


}


    return (
        <div>
                                <div>
        
        <div className="row">        
<div className="col-md-4">

</div>
<div className="col-md-4">
<form onSubmit={handleSubmit}>
<div class="form-group row">
<div class="col-sm-8">
<h3> Get Land</h3>
</div>
</div>

<div class="form-group row">
<div class="col-sm-8">
<input type="text" pattern="^[1-9]\d{0,3}" title="must be number of range[1-100]"
       onChange={(e)=>setLandId(e.target.value)}

class="form-control" id="surveyNumber" placeholder="Survey Number" />
</div>
</div><div class="form-group row">
    <div class="col-sm-8">
      <button type="submit" class="btn btn-primary">Get Land</button>
    </div>
  </div>
</form>

        </div>


            </div>
        </div>

            
        <div className="container">

        <table class="table" style={{color:"white"}}>
  <thead class="thead-light">
    <tr>
      <th scope="col">Surver Number</th>
      <th scope="col">Customer Name</th>
      <th scope="col">Area(sq.F)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{land.surveyNumber}</td>
      <td>{land.ownerName}</td>
      <td>{land.landArea}</td>


    </tr>
 </tbody>
</table>




        </div>







            

            
        </div>
    )
}
