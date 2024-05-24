import { useState } from "react";
import './Counter.css';


export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      You have clicked this button {count} times
    </button>
  );
}