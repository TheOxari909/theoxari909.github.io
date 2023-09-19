import MainInfo from './components/MainInfo';
import Introduction from './components/Introduction';

import dynamic from 'next/dynamic';

const DynamicClock = dynamic(() => import('./components/Clock'), {
  ssr: false,
});

import WeatherApp from './components/WeatherApp';
import Apps from './components/Apps';

import { AppType } from './types';

const appObjects: AppType[] = [
  {
    name: 'name',
    address: 'address',
  },
  {
    name: 'name',
    address: 'address',
  },
];

export default function Home() {
  return (
    <div className="flex max-h-screen flex-row p-6 lg:grid lg:grid-cols-3 lg:grid-rows-1 lg:gap-10">
      <div className=" w-full  text-center lg:order-2 lg:max-h-full lg:overflow-auto">
        <Introduction />
      </div>
      <div className="rounded-b-xl bg-slate-200 font-medium lg:order-1 lg:max-h-full lg:overflow-auto lg:rounded-xl lg:shadow-xl">
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
