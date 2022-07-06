import React from "react";
function MyCard() {
  return (


    <div className="card m-2" style={{ width: "18rem", height:"30rem" }}> 
      <img className="card-img-top" src="https://edgewoodreit.com/wp-content/uploads/2018/01/500x325.png" alt="Card image cap" /> 
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>


 
  );
}
export default MyCard;
