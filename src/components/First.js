import React from "react";
import Firstcard from "./Firstcard";
import shoprite from "../resources/shoprite_store.png";
import addide from "../resources/addide_store.png";
import delis from "../resources/delis_store.png";
import supermart from "../resources/supermart_store.png";

const First = () => {
  return (
    <div>
      <h2 className="text-center py-5 fw-normal">
        {" "}
        Favourite stores in <span className="text-danger">Lagos</span>
      </h2>
      <div className="container-md">
        <div className="row g-5 mb-4">
          <Firstcard
            image={shoprite}
            title="Shoprite"
            text="Delivery and Pickup"
          />
          <Firstcard
            image={addide}
            title="Addide"
            text="Delivery and Pickup"
          />
          <Firstcard
            image={delis}
            title="Delis"
            text="Delivery and Pickup"
          />
          <Firstcard
            image={supermart}
            title="Supermart"
            text="Delivery and Pickup"
          />
         
        </div>
      </div>
      
    </div>
  );
};

export default First;
