import react, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";



const Pdata = ()=>{

  const[cv,uv] = useState();
const photo = `https://source.unsplash.com/300x300/?${cv}`;
const omg =(val)=>{
const data = val.target.value;
uv(data);
}


  return(
    <>
   <div className="card text-center">
   <div className="card-body">
    <p className="card-text border rounded-circle bg-success text-white">Search Photo</p>
    <input onChange={omg} className=" form bg-success text-white border border-warning rounded" type='text'/>
  </div>
  <img className="border rounded border-success mx-auto d-block" src={photo} alt="image Not Found"/>
</div>
    </>
  );
}

export default Pdata;