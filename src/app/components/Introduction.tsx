import Image from 'next/image';

const Introduction = () => {
  return (
    <div>
      <img
        src="https://avatars.githubusercontent.com/u/73400682?v=4"
        className="m-auto my-12 w-64 rounded-full"
        alt="Profile picture"
      />
      <h1 className="m-4 text-5xl font-extrabold">Pyry Kaleva</h1>
      <div className="m-2 text-xl font-semibold text-gray-500">
        Front-end kehittäjä
      </div>
      <div className="my-2 flex w-full items-center justify-center py-2">
        <a href="https://github.com/TheOxari909" className="mx-2">
          <Image
            src="/github-mark.svg"
            width="28"
            height="28"
            alt="Github Logo"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/pyry-kaleva-620aa422a/"
          className="mx-2">
          <Image
            src="/linkedin.svg"
            width="28"
            height="28"
            alt="Linkedin Logo"
          />
        </a>
      </div>
      <p className="rounded-t-xl bg-slate-200 p-5 text-justify text-lg font-medium lg:rounded-xl lg:p-10 lg:shadow-xl">
        Itse opiskellut front-end kehittäjä muutaman vuoden kokemuksella,
        erinäisten ja projektien kautta. Ohjelmointiura alkoi vuonna 2015 C# ja
        peli kehityksen parissa. Vuodesta 2020 eteenpäin ahkerammin keskittynyt
        pieniin terminaali sovelluksiin ja alkukantaisiin verkkosivuihin.
        <br />
        <br />
        Siitä eteenpäin lukenut aiheesta kirjoja, ja suorittanut muutamia
        kursseja ohjelmointiin liittyen. Vuodesta 2022 eteenpäin opiskellut
        lähinnä modernia webkehitystä ja JavaScript frameworkejä.
      </p>
    </div>
  );
};

export default Introduction;
