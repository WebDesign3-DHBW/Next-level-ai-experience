import Chart from "../section8/Chart";
import BarChart from "./BarChart";

function Section8() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6 mt-5 align-self-center">
            <BarChart />
          </div>
          <div className="col-6">
            <div className="row">
              <div className="h2r-box mb-5 mr-0 ml-auto mt-5">
                <h2>Verteilung Umsatz</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-10 mx-auto">
                <p>
                  Im Jahr 2019 erzielten die Unternehmen der deutschen Wirtschaft mit Produkten und
                  Dienstleistungen mit direktem KI-Einsatz einen Umsatz von annähernd <b>60 Mrd. €</b>. Dies
                  entspricht nur <b>1,1 % des gesamten Umsatzes der deutschen Wirtschaft</b>. Neben der
                  IKT-Branche verzeichnen vor allem Finanzdienstleistungen und unternehmensnahe
                  Dienstleistungen einen <b>überdurchschnittlichen</b> Anteil.
                </p>
                <div className="row">
                  <Chart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Section8;
