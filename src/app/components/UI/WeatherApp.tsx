'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { weatherType } from '@/app/types';

const WeatherApp = () => {
    const [weather, setWeather] = useState<weatherType>();

    useEffect(() => {
        const fetchWeather = async () => {
            await axios
                .get('http://localhost:3001/weather')
                .then(response => {
                    response.data;
                    setWeather(response.data);
                })
                .catch(e => console.log(e));
        };

        // needs to call function to get async/await axios
        fetchWeather().catch(e => console.log(e));
    }, []);

    return weather ? (
        <div className="bg-slate-200 bg-opacity-40 p-10 text-justify text-lg font-medium">
            temperature now: {weather.main['temp']} <br />
            feels like: {weather.main['feels_like']} <br />
            wind speed: {weather.wind['speed']} <br />
            weather description: {weather.weather[0]['description']}
        </div>
    ) : (
        <div className="bg-slate-200 bg-opacity-40 p-10 text-justify text-lg font-normal">
            Error connecting to service
        </div>
    );
};

export default WeatherApp;
