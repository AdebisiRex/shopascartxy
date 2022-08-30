import React from "react";
// import Hero from "../resources/Hero.png";

function Headercontent() {
  return (
    <div className="container-md  ">
      <div className="row ">
        <div className="col-12 col-md-7  ">
          <div className="d-flex header">
            <div className="align-self-center">
              <h1 className="display-5 fw-bold text-white">
                Get your groceries <br /> delivered same day
              </h1>
              <p className="mb-3 d-none d-md-block text-light">
                Order what you want from grocery stores and local market <br />
                near you and get it delivered right to your door.
              </p>
              <input
                className="ps-4 form-control fw-bold rounded-4 w-50"
                placeholder="Enter your Address"
                type="search"
              />
            </div>
          </div>
        </div>
        <div className="d-none header d-md-block divhero col-md-5 "></div>
      </div>
    </div>
  );
}

export default Headercontent;
