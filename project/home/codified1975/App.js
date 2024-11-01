import { useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => count + 1);
  }

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get advice</button>
      <p>
        You have read{" "}
        <strong>
          <em> {count} </em>{" "}
        </strong>{" "}
        pieces of advice.{" "}
      </p>
    </div>
  );
}
