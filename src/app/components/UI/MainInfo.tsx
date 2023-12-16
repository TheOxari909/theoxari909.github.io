import Courses from '../MainInfo/Course';
import WorkExperience from '../MainInfo/WorkExperience';
import Projects from '../MainInfo/Projects';

const MainInfo = () => {
    return (
        <main className="p-10 text-left">
            <Projects />
            <Courses />
            <WorkExperience />
        </main>
    );
};

export default MainInfo;
