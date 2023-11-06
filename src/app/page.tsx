import MainInfo from './components/UI/MainInfo';
import Introduction from './components/UI/Introduction';
import WeatherApp from './components/UI/WeatherApp';
import Apps from './components/UI/Apps';

import dynamic from 'next/dynamic';

const DynamicClock = dynamic(() => import('./components/UI/Clock'), {
    ssr: false,
});

import { AppType } from './types';

const appObjects: AppType[] = [
    {
        name: 'todo',
        address: '/todo',
    },
];

export default function Home() {
    return (
        <div className="bg-[#3f7aab] p-6 lg:grid lg:h-screen lg:grid-cols-3 lg:grid-rows-1 lg:gap-10 lg:bg-[url('./img.jpg')] lg:bg-cover">
            <div className="w-full text-center lg:order-2 lg:max-h-full lg:overflow-auto">
                <Introduction />
            </div>
            <div className="rounded-b-xl bg-slate-200 bg-opacity-40 font-medium lg:order-1 lg:max-h-full lg:overflow-auto lg:rounded-xl lg:shadow-xl">
                <MainInfo />
            </div>
            <div className="p-5 lg:order-3 lg:max-h-full lg:overflow-auto">
                <DynamicClock />
                <WeatherApp />
                <Apps apps={appObjects} />
            </div>
        </div>
    );
}
