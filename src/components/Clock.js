import React from "react";

function Clock() {
  const date = new Date();
  return <span>{date.toLocaleTimeString()}</span>;
}
export default Clock;
