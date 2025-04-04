import { useState } from "react";

export function Clock() {
  const [time, settime] = useState(new Date().toLocaleTimeString("nb-NO"));

  function GetTime() {
    return new Date().toLocaleTimeString("nb-NO");
  }

  setInterval(() => {
    settime(GetTime());
  }, 1000);

  return <p>{time}</p>;
}
