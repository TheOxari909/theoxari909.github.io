import { WorkDataType } from '@/app/types';
import data from '@/app/data/info.json';

const Experience = ({ info }: { info: WorkDataType }) => {
  return (
    <section className="py-2">
      <h3 className="text-lg font-normal">
        {info.place}, {info.job}
      </h3>
      <span className="font-light">
        {info.startTime} &rarr; {info.endTime}
      </span>
      <ul className="list-disc px-4 py-4">
        {info.info.map((e: string) => (
          <li key={e}>{e}</li>
        ))}
      </ul>
    </section>
  );
};

const WorkExperience = () => {
  return (
    <>
      <h2 className="pt-8 text-2xl font-semibold">Työkokemus</h2>
      {data.work_experience.map(e => (
        // Chose start time because it's most likely to be unique
        <Experience info={e} key={e.startTime} />
      ))}
    </>
  );
};

export default WorkExperience;
