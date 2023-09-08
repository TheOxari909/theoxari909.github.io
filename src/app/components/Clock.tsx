'use client';

import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  console.log(hours, minutes, seconds);

  const secondDegrees = (seconds / 60) * 360;
  const minuteDegrees = ((minutes + seconds / 60) / 60) * 360;
  const hourDegrees = (((hours % 12) + minuteDegrees / 360) / 12) * 360;

  return (
    <div className="relative z-30 mx-auto my-10 box-content flex h-48 w-48 items-center justify-center rounded-full border-4 border-black bg-slate-50">
      <div
        className="absolute left-2/4 top-4 z-30 mx-auto h-20 w-1 origin-bottom rounded-full bg-red-600"
        style={{ transform: `rotate(${secondDegrees}deg)` }}
      />
      <div
        className="absolute left-2/4 top-8 mx-auto h-16 w-2 origin-bottom bg-black"
        style={{ transform: `rotate(${hourDegrees}deg)` }}
      />
      <div
        className="absolute left-2/4 top-4 mx-auto h-20 w-2 origin-bottom bg-black"
        style={{ transform: `rotate(${minuteDegrees}deg)` }}
      />
      <div className="absolute left-2/4 -z-20 mx-auto h-48 w-1 origin-center bg-black" />
      <div className="absolute -z-20 mx-auto h-1 w-48 origin-center bg-black" />

      <div className="absolute left-4 top-4 -z-10 h-40 w-40 rounded-full bg-slate-50" />
      <div className="absolute left-2/4 top-24 z-40 mx-auto h-2 w-2 -translate-y-2/4 rounded-full bg-slate-600" />
    </div>
  );
};

export default Clock;
