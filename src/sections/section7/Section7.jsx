import Chart1 from "./Chart1";
import Chart2 from "./Chart2";
import Chart3 from "./Chart3";
import Chart4 from "./Chart4";
import Chart5 from "./Chart5";

function Section7() {
  return (
    <>
      <h1>Anwendungsgebiete</h1>
      <div className='row'>
        <div className='col-8 '>
        < p>Künstliche Intelligenz wird am häufigsten im Bereich von Produkten und Dienstleistungen (60 %) der KI
          einsetzenden Unternehmen verwendet. Knapp dahinter wird KI für die Automatisierung von Prozessen genutzt (56 %). Eine Analyse mit KI Daten setzen 34 % der Unternehmen ein und zu 22 % wird künstliche Intelligenz zur Kommunikation mit Kunden verwendet.</p>
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
