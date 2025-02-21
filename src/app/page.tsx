"use client";
import { useState } from "react";

function HomePage() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>Home Page</h1>
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
}

export default HomePage;
