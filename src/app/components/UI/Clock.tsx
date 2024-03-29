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

    const secondDegrees = (seconds / 60) * 360;
    const minuteDegrees = ((minutes + seconds / 60) / 60) * 360;
    const hourDegrees = (((hours % 12) + minuteDegrees / 360) / 12) * 360;

    return (
        <div className="relative z-30 mx-auto my-10 box-content flex h-48 w-48 items-center justify-center rounded-full border-4 border-black bg-slate-50">
            <div
                className="z-28 absolute left-[98px] top-[48px] mx-auto h-[50px] w-[3px] origin-bottom rounded-full bg-red-600"
                style={{ transform: `rotate(${secondDegrees}deg)` }}
            />
            <div
                className="absolute left-[98px] top-[54px] mx-auto h-[45px] w-[5px] origin-bottom rounded-full bg-black"
                style={{ transform: `rotate(${hourDegrees}deg)` }}
            />
            <div
                className="absolute left-[98px] top-[28px] mx-auto h-[70px] w-[3px] origin-bottom rounded-full bg-black"
                style={{ transform: `rotate(${minuteDegrees}deg)` }}
            />

            <div className="absolute left-4 top-4 -z-10 h-40 w-40 rounded-full bg-slate-50" />

            <div className="absolute left-2/4 -z-20 mx-auto h-48 w-1 origin-center bg-black" />
            <div className="absolute -z-20 mx-auto h-1 w-48 origin-center bg-black" />
        </div>
    );
};

export default Clock;
