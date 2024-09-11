import { useState, useEffect, useLayoutEffect, useRef } from "react";

function Content() {
  const [count, setCount] = useState(60);
  let timerId = useRef();
  const handleStart = () => {
    timerId.current = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);
  };
  const handleStop = () => {
    clearInterval(timerId.current);
  };
  return (
    <div style={{ padding: 50 }}>
      <h1>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}
export default Content;
