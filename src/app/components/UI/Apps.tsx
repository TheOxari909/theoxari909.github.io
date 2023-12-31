import { AppType } from '../../types';
import Link from 'next/link';

const App = ({ app }: { app: AppType }) => {
    return (
        <Link className="h-full w-full" href={app.address}>
            <li className="rounded-xl bg-slate-200 bg-opacity-40 p-5 shadow-xl hover:bg-slate-300">
                {app.name}
            </li>
        </Link>
    );
};

const Apps = ({ apps }: { apps: AppType[] }) => {
    return (
        <ul className="my-5 grid grid-cols-3 justify-between gap-5 text-center">
            {apps.map((e: AppType) => {
                return <App app={e} key={e.name} />;
            })}
        </ul>
    );
};

export default Apps;
