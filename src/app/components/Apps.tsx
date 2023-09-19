import { AppType } from '../types';

const App = ({ app }: { app: AppType }) => {
  return (
    <li>
      <a>{app.name}</a>
    </li>
  );
};

const Apps = ({ apps }: { apps: AppType[] }) => {
  console.log(apps);

  return (
    <ul>
      {apps.map((e: any) => {
        console.log(e);
        return <App app={e} key="name" />;
      })}
    </ul>
  );
};

export default Apps;
