import React, { useEffect, useState } from "react";

export default function Jcodepage() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  if (count > 10)  {
    return window.location.href = "https://j-code.org"
  }

  return <div>count = {count}</div>;
}