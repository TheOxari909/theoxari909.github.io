import { AppType } from '../../types';
import Link from 'next/link';

const App = ({ app }: { app: AppType }) => {
    return (
        <Link className="h-full w-full" href={app.address}>
            <li className="uppercase rounded-xl bg-blue-500 p-5 text-lg font-bold shadow-xl text-white hover:bg-blue-700 ">
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
