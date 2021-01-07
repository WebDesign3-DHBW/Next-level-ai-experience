import Chart from "../section8/Chart";
import BarChart from "./BarChart";

function Section8() {
  return (
    <div className="container d-flex align-items-center" style={{ height: "100vh" }}>
      <div className="row">
        <div className="col-8 mx-auto">
          <h2 className="mb-2 text-center">Verteilung Umsatz</h2>
          <p>
            Im Jahr 2019 erzielten die Unternehmen der deutschen Wirtschaft mit Produkten und
            Dienstleistungen mit direktem KI-Einsatz einen Umsatz von annähernd 60 Mrd. €. Dies
            entspricht nur 1,1 % des gesamten Umsatzes der deutschen Wirtschaft. Neben der
            IKT-Branche verzeichnen vor allem Finanzdienstleistungen und unternehmensnahe
            Dienstleistungen einen überdurchschnittlichen Anteil.
          </p>
        </div>
        <div className="col-6 mt-4 align-self-center">
          <BarChart />
        </div>
        <div className="col-6 mt-4 align-self-center">
          <Chart />
        </div>
      </div>
    </div>
  );
}
export default Section8;
