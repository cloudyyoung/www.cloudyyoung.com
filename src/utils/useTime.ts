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

export const useTime = (refreshCycle = 100) => {
  // Returns the current time
  // and queues re-renders every `refreshCycle` milliseconds (default: 100ms)

  const [now, setNow] = useState(getTime());
  const [timezone, setTimezone] = useState(getTimezone());

  useEffect(() => {
    // Regularly set time in state
    const intervalId = setInterval(() => setNow(getTime()), refreshCycle);
    const timezoneId = setInterval(() => setTimezone(getTimezone()), refreshCycle * 10);

    // Cleanup interval
    return () => {
      clearInterval(intervalId)
      clearInterval(timezoneId)
    };

    // Specify dependencies for useEffect
  }, [refreshCycle, setInterval, clearInterval, setNow, setTimezone, getTime, getTimezone]);

  return [now, timezone];
};
