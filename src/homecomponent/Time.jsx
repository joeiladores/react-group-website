import { useState, useEffect } from "react";

function Time() {

  const [time, setTime] = useState();
  const [date, setDate] = useState();

  setInterval(() => {
    setTime(() => new Date().toLocaleTimeString())
  }, 1000);

  useEffect(() => {
    setDate(() => new Date().toLocaleDateString('default', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }))
  }, []);

  return (
    <div className="m-3 p-2 border border-1 rounded-2">
      <h5 className="text-smaller">Time: {time}</h5>
      <h5 className="text-smaller">Date: {date}</h5>
    </div>
  );
}

export default Time;
