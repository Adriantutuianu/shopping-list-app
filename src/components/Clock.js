import React from "react";
import { useState, useEffect } from "react";

function Clock({ date, setDate }) {
  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return <span>{date.toLocaleTimeString()}</span>;
}
export default Clock;
