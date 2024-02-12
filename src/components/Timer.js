import { useEffect } from "react";

function Timer() {
  // effects runs twice in the development mode
  useEffect(function () {
    setInterval(function () {
      console.log("tick");
    }, 1000);
  }, []);
  return <div className="timer">05:00</div>;
}

export default Timer;
