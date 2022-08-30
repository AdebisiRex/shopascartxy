import React, { useState } from "react";

function Counter() {
  const [myNumber, setmyNumber] = useState(10);

  const increment = (num) => {
    setmyNumber(myNumber + num);
    console.log(myNumber);
  };
  const decrease = (num) => {
    setmyNumber(myNumber - num);
    console.log(myNumber);
  };
  return (
    <>
      <h1>Counter</h1>

      <h2>{myNumber}</h2>
      <button onClick={()=>increment(9)}>Increase</button>
      <button onClick={()=>decrease(12)}>Decrease</button>
    </>
  );
}

export default Counter;
