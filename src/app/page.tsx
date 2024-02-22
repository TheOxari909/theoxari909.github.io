import MainInfo from '@/app/components/UI/MainInfo';
import Introduction from '@/app/components/UI/Introduction';
import WeatherApp from '@/app/components/UI/WeatherApp';
import Apps from '@/app/components/UI/Apps';
import { AppType } from './types';

import dynamic from 'next/dynamic';

const DynamicClock = dynamic(() => import('@/app/components/UI/Clock'), {
    ssr: false,
});

const appObjects: AppType[] = [
    {
        name: 'todo',
        address: '/todo',
    },
    {
        name: 'timer',
        address: '/timer',
    }
];

export default function Home() {
    return (
        <div className="bg-cover text-sm bg-gradient-to-br from-slate-200 to-slate-400 p-6 lg:grid lg:max-h-screen lg:grid-cols-3 lg:grid-rows-1 lg:gap-10">
            <section className="w-full text-center lg:order-2 lg:max-h-full lg:overflow-auto">
                <Introduction />
            </section>
            <section className="bg-slate-200 bg-opacity-40 font-normal lg:order-1 lg:max-h-full lg:overflow-auto">
                <MainInfo />
            </section>
            <section className="lg:order-3 lg:max-h-full lg:overflow-auto">
                <DynamicClock />
                <WeatherApp />
                <Apps apps={appObjects} />
            </section>
        </div>
    );
}
