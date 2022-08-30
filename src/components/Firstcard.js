import React from "react";
// import Shoprite from "../resources/shoprite_store.png"
function Firstcard(props) {
  return (
    <div className="col-6 col-md-3">
      <div className="card border-0">
        <img src={props.image} className="card-img-top bg-light" alt="" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <small className="card-text">
            {props.text}
          </small>
        </div>
      </div>
    </div>
  );
}

export default Firstcard;
