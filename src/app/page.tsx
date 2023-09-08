import MainInfo from './components/MainInfo';
import Introduction from './components/Introduction';

import Clock from './components/Clock';
import WeatherApp from './components/WeatherApp';

export default function Home() {
  return (
    <div className="h-screen flex-row p-6 lg:grid lg:grid-cols-3 lg:gap-10 lg:p-10">
      <div className="w-full text-center lg:order-2">
        <Introduction />
      </div>
      <div className="rounded-b-xl bg-slate-200 font-medium lg:order-1 lg:max-h-screen lg:overflow-auto lg:rounded-xl lg:shadow-xl">
        <MainInfo />
      </div>
      <div className="p-5 lg:order-3">
        <Clock />
        <WeatherApp />
      </div>
    </div>
  );
}
