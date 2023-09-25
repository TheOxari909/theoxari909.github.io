const MainInfo = () => {
  return (
    <div className="p-10 text-left">
      <h2 className="text-2xl font-bold">Projektit</h2>
      <div className="py-4">
        <a
          href="https://github.com/TheOxari909/hooked_on_logs"
          target="_blank"
          className="text-sky-800 no-underline hover:underline">
          Hooked on logs
        </a>
        <p className="p-4">
          React ja node.js web sovellus kalastusreissujen saaliiden
          kirjaamiseen. CSS puolella käytössä TailwindCSS.
        </p>
        <a
          href="https://github.com/TheOxari909/AdventOfCode"
          target="_blank"
          className="text-sky-800 no-underline hover:underline">
          Advent of Code
        </a>
        <p className="p-4">
          C/C++ kielillä rakennettu tapa kasata joka vuoden ratkaisut helposti
          yhteen paikkaan. Mahdollissus ajaa jokainen päivä erikseen CLI
          argumenteilla.
        </p>
      </div>
      <h2 className="pt-4 text-2xl font-bold">Kurssit</h2>
      <div>
        <h3 className="pt-2 text-lg font-semibold text-gray-700">
          Full Stack Open
        </h3>
        <ul className="list-disc px-4 py-2">
          <li>
            Helsingin yliopiston, noin kahden kuukauden mittainen kurssi jossa
            perehdytään nykyaikaiseen verkkosovelluskehitykseen
          </li>
          <li>
            Moderniin verkkosovelluskehitykseen perehtynyt kurssi, jossa aiheina
            React, Node.js, MongoDB ja TypeScript
          </li>
          <li>Lisämateriaalina SQL, konttiteknologia, CI/CD ja React Native</li>
          <li className="text-sky-800 underline">
            <a href="https://fullstackopen.com/" target="_blank">
              https://fullstackopen.com/
            </a>
          </li>
        </ul>
        <h3 className="pt-4 text-lg font-semibold text-gray-700">CS50</h3>
        <ul className="list-disc px-4 py-2">
          <li>
            Harvardin järjestämä 12 viikon mittainen kurssi tietotekniikan
            perusteille
          </li>
          <li>Vahva pohja tietotekniikan opiskelulle</li>
          <li>
            Keskitytään C-kieleen, algoritmeihin ja muihin tietojenkäsittelyn
            perustaitoihin
          </li>
        </ul>
      </div>
      <h2 className="pt-8 text-2xl font-bold">Työkokemus</h2>
      <div className="py-2">
        <h3 className="text-lg font-bold">Runostoppi, Karaokejuontaja/DJ</h3>
        <span className="font-semibold">08/2022 &rarr; Jatkuu</span>
        <ul className="list-disc px-4 py-4">
          <li>Asiakaspalvelutaitojeni kehittäminen</li>
          <li>
            Useiden laulajien järjestely, normaalina iltana 30-40 laulajaa
          </li>
          <li>Karaoketekniikan käyttö ja ylläpito</li>
          <li>
            Aktiivinen vuorovaikutus asiakkaiden kanssa, jotta heidän tarpeensa
            ja musiikkitoiveensa tulevat huomioiduksi
          </li>
          <li>
            Monen eri asian tekeminen yhtä aikaa, esim. laulajien koordinointi
            ja priorisointi, taustamusiikin valinta tunnelman mukaan, paineen
            hallinta, nopea päätöksenteko
          </li>
        </ul>
        <h3 className="text-lg font-bold">Kalaneuvos, Kausityöntekijä</h3>
        <span className="font-semibold">12/2022 &rarr; 03/2023</span>
        <ul className="list-disc px-4 py-2">
          <li>
            Monilla osastoilla työskentely mukaan lukien kalan käsittely,
            leikkaus ja pakkaus
          </li>
          <li>Ryhmässä työskentely ja työn tehokas jako muiden kanssa</li>
          <li>Osallistuin puhdistus ja huoltotehtäviin tarpeen mukaan</li>
        </ul>
      </div>
    </div>
  );
};

export default MainInfo;
