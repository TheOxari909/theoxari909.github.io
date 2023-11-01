import { WorkDataType } from '@/app/types';
import data from '@/app/data/info.json';

const Experience = ({ info }: { info: WorkDataType }) => {
  return (
    <div className="py-2">
      {' '}
      <h3 className="text-lg font-bold">
        {info.place}, {info.job}
      </h3>
      <span className="font-semibold">
        {info.startTime} &rarr; {info.endTime}
      </span>
      <ul className="list-disc px-4 py-4">
        {info.info.map((e: string) => (
          <li key={e}>{e}</li>
        ))}
      </ul>
    </div>
  );
};

const WorkExperience = () => {
  return (
    <div>
      <h2 className="pt-8 text-2xl font-bold">Työkokemus</h2>
      {data.work_experience.map(e => (
        // Chose start time because it's most likely to be unique
        <Experience info={e} key={e.startTime} />
      ))}
    </div>
  );
};

export default WorkExperience;
