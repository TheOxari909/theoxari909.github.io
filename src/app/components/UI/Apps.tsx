import { AppType } from '../../types';
import Link from 'next/link';

const App = ({ app }: { app: AppType }) => {
    return (
        <Link className="h-full w-full" href={app.address}>
            <li className="uppercase rounded-l bg-blue-100 p-2 text-lg font-normal text-black hover:bg-blue-500 hover:text-white">
                {app.name}
            </li>
        </Link>
    );
};

const Apps = ({ apps }: { apps: AppType[] }) => {
    return (
        <ul className="my-5 grid grid-cols-2 xl:grid-cols-4 justify-between gap-5 text-center">
            {apps.map((e: AppType) => {
                return <App app={e} key={e.name} />;
            })}
        </ul>
    );
};

export default Apps;
