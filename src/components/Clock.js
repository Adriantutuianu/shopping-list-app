import React from "react";
import { useEffect } from "react";

function Clock({ date, setDate }) {
  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, [refreshClock]);
  return <span className="clock-live">{date.toLocaleTimeString()}</span>;
}
export default Clock;
