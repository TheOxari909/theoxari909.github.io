import { CourseDataType } from '@/app/types';
import data from '@/app/data/info.json';

const Course = ({ info }: { info: CourseDataType }) => {
    return (
        <>
            <h3 className="pt-2 text-lg font-semibold text-gray-700">
                {info.name}
            </h3>
            <ul className="list-disc px-4 py-2">
                {info.info.map((e: string) => (
                    <li key={e}>{e}</li>
                ))}
                {info.link ? (
                    <li>
                        <a
                            href={info.link}
                            className="text-sky-800 no-underline hover:underline">
                            {info.link}
                        </a>
                    </li>
                ) : (
                    <div></div>
                )}
            </ul>
        </>
    );
};

const Courses = () => {
    return (
        <>
            <h2 className="pt-4 text-2xl font-semibold">Kurssit</h2>
            {data.courses.map((e: CourseDataType) => {
                return <Course info={e} key={e.name} />;
            })}
        </>
    );
};

export default Courses;
