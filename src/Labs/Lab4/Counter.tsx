import React, { useState } from "react";
export default function Counter() {
  let [count, setCount] = useState(7);

  console.log(count);
  return (
    <div id="wd-counter-use-state">
      <h2>Counter: {count}</h2>
      <button
        onClick={() => {
          setCount(++count);
          console.log(count);
        }}
      >
        Up
      </button>
      <button
        onClick={() => {
          setCount(--count);
          console.log(count);
        }}
      >
        Down
      </button>
      <hr />
    </div>
  );
}
