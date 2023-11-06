'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { weatherType } from '@/app/types';

const WeatherApp = () => {
    const [weather, setWeather] = useState<weatherType>();

    useEffect(() => {
        // needs to call function to get async/await axios
        const fetchWeather = async () => {
            await axios
                .get('http://localhost:3001/weather')
                .then(response => {
                    response.data;
                    setWeather(response.data);
                })
                .catch(e => console.log(e));
        };

        fetchWeather().catch(e => console.log(e));
    }, []);

    console.log(weather);

    return weather ? (
        <div className="rounded-xl bg-slate-200 bg-opacity-40 p-10 text-justify text-lg font-medium shadow-xl">
            temperature now: {weather.main['temp']} <br />
            feels like: {weather.main['feels_like']} <br />
            wind speed: {weather.wind['speed']} <br />
            weather description: {weather.weather[0]['description']}
        </div>
    ) : (
        <div className="rounded-xl bg-slate-200 bg-opacity-40 p-10 text-justify text-lg font-medium shadow-xl">
            Error connecting to service
        </div>
    );
};

export default WeatherApp;
