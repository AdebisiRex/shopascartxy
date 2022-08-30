import React from "react";
import choose from "../resources/webinar-survey.jpeg"
import real_time from "../resources/new.gif";
import Secondcard from "./Secondcard";

function Second() {
  return (
    <div className="mb-3">
      <h2 className="text-center py-5 fw-normal">
        Grocery shopping done right
      </h2>
      <div className="container-md">
        <div className="card-deck row g-4">
          <Secondcard
            image={choose}
            title="Choose what you want"
            text="Select items from your favourite grocery stores or local markets"
          />
          <Secondcard
            image={real_time}
            title="Get real time updates"
            text="We'll send you real-time updates from every step of the way."
          />
          <Secondcard
            image={choose}
            title="Same-day grocery delivery "
            text="Fresh groceries delivered same-day directly to you."
          />
        </div>
      </div>
    </div>
  );
}

export default Second;
