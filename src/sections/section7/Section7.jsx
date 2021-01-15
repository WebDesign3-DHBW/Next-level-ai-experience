import Chart1 from "./Chart1";
import Chart2 from "./Chart2";
import Chart3 from "./Chart3";
import Chart4 from "./Chart4";
import Chart5 from "./Chart5";

function Section7() {
  return (
    <>
      <div className="pt-5">
        <div className="h2-box mb-5">
          <h2>Anwendungsgebiete</h2>
        </div>
      </div>
      <div className="container mr-0 ml-0">
        <div className="d-inline-block mt-5 mr-0">
          <div className="d-flex">
            <div className="w-50 mr-auto mb-5">
              <p>
                Künstliche Intelligenz wird am häufigsten im Bereich von{' '}
                <b>Produkten und Dienstleistungen</b> (60 %) der KI einsetzenden
                Unternehmen verwendet. Knapp dahinter wird KI für die{' '}
                <b>Automatisierung von Prozessen</b> <br />
                genutzt (56 %). Eine Analyse mit KI Daten setzen 34 % der
                Unternehmen ein und zu 22 % wird künstliche Intelligenz zur{' '}
                <b>Kommunikation mit Kunden</b> verwendet.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="chartcontainer">
        <Chart1 />
        <Chart2 />
        <Chart3 />
        <Chart4 />
        <Chart5 />
      </div>
    </>
  );
}
export default Section7;
