import Image from 'next/image';
import data from '@/app/data/info.json';

const Introduction = () => {
    return (
        <div>
            <Image
                src="https://avatars.githubusercontent.com/u/73400682?v=4"
                width={128}
                height={128}
                className="m-auto my-12 w-64 rounded-full"
                alt="Profile picture"
            />
            <h1 className="m-4 text-5xl font-extrabold text-black">
                {data.generalInfo.name}
            </h1>
            <div className="m-2 text-xl font-semibold text-yellow-50">
                {data.generalInfo.title}
            </div>
            <div className="my-2 flex w-full items-center justify-center py-2">
                <a href="https://github.com/TheOxari909" className="mx-2">
                    <Image
                        src="/github-mark.svg"
                        width={28}
                        height={28}
                        alt="Github"
                    />
                </a>
                <a
                    href="https://www.linkedin.com/in/pyry-kaleva-620aa422a/"
                    className="mx-2">
                    <Image
                        src="/linkedin.svg"
                        width={28}
                        height={28}
                        alt="Linkedin"
                    />
                </a>
            </div>
            <p className="rounded-t-xl bg-slate-200 bg-opacity-40 p-5 text-justify text-lg font-medium lg:rounded-xl lg:p-10 lg:shadow-xl">
                {data.generalInfo.intro}
                <br />
                <br />
                {data.generalInfo.intro2}
            </p>
        </div>
    );
};

export default Introduction;
