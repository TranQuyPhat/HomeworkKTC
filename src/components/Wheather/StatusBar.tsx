import React, { useEffect, useState } from "react";
import { BsBatteryFull, BsWifi } from "react-icons/bs";
import { FaSignal } from "react-icons/fa";

export default function StatusBar() {
  const [time, setTime] = useState(getCurrentTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getCurrentTime());
    }, 60000); 
    return () => clearInterval(timer);
  }, []);

  function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }

  return (
<div className="mt-2 text-white text-xs px-4 flex items-center justify-between font-sans mb-7">
      <span className="text-white text-lg">{time}</span>
      <div className="flex items-center space-x-2 text-sm">
        <FaSignal className="text-white" size={20} />
        <BsWifi className="text-white" size={20}/>
        <BsBatteryFull className="text-white" size={20}/>
      </div>
    </div>
    
  );
}
