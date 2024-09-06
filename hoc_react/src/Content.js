import { useState, useEffect } from "react";

function Content() {
  const [countDown, setCountDown] = useState(180);

  useEffect(() => {
    const timeID = setInterval(() => {
      setCountDown((prevState) => prevState - 1);
    }, 1000);
    return () => clearInterval(timeID);
  }, []);

  return (
    <div style={{ padding: 50 }}>
      <h1>{countDown}</h1>
    </div>
  );
}
export default Content;
