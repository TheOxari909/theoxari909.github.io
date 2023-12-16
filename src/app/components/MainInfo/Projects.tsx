import { ProjectDataType } from '@/app/types';
import data from '@/app/data/info.json';

const Project = ({ info }: { info: ProjectDataType }) => {
    return (
        <>
            <a
                href={info.link}
                target="_blank"
                className="text-sky-800 no-underline hover:underline">
                {info.name}
            </a>
            <p className="p-4">{info.description}</p>
        </>
    );
};

const Projects = () => {
    return (
        <section>
            <h2 className="py-4 text-2xl font-bold">Projektit</h2>
            {data.projects.map(e => (
                <Project info={e} key={e.name} />
            ))}
        </section>
    );
};

export default Projects;
