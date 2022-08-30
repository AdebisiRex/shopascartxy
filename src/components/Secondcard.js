import React from "react";

function Secondcard(props) {
  return (
    <>
      <div className="col-4">
        <div className="card rounded-0 bg-light border-0">
          <div className="card-body  py-5 px-4">
            <h3 className="card-title">{props.title}</h3>
            <p className="card-text text-secondary">{props.text}</p>
          </div>
          <img src={props.image} className="card-img-bottom" alt="" />
        </div>
      </div>
    </>
  );
}

export default Secondcard;
