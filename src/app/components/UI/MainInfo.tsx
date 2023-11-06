import Courses from '../MainInfo/Course';
import WorkExperience from '../MainInfo/WorkExperience';
import Projects from '../MainInfo/Projects';

const MainInfo = () => {
    return (
        <div className="p-10 text-left">
            <Projects />
            <Courses />
            <WorkExperience />
        </div>
    );
};

export default MainInfo;
