import { useEffect, useState } from "react";

export const getTime = () => {
  const now = new Date();
  const nowString = now.toLocaleTimeString("en-CA", {
    timeZone: "America/Edmonton",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    // hour12: false,
  });
  return nowString;
};

export const getTimezone = () => {
  return Intl.DateTimeFormat("en-CA", { timeZone: "America/Edmonton", timeZoneName: "short" })
    .formatToParts(new Date())
    .find((p) => p.type === "timeZoneName")?.value ?? "MT";
};

export const useTime = (refreshCycle = 1000) => {
  // Returns the current time
  const [now, setNow] = useState(getTime());
  const timezone = getTimezone()

  useEffect(() => {
    // Regularly set time in state
    const intervalId = setInterval(() => setNow(getTime()), refreshCycle);

    // Cleanup interval
    return () => {
      clearInterval(intervalId)
    };

    // Specify dependencies for useEffect
  }, [refreshCycle, setInterval, clearInterval, setNow, getTime, getTimezone]);

  return [now, timezone];
};
