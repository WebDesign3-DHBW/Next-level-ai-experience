import Chart1 from "./Chart1";
import Chart2 from "./Chart2";
import Chart3 from "./Chart3";
import Chart4 from "./Chart4";

function Section6() {
  return (
    <>
      <h1>KI Verfahren</h1>
      <div className='row'>
        <div className='col-8 '>
        <p>Am weitesten verbreitet war im Jahr 2019 in der deutschen Wirtschaft maschinelles Lernen und Beweisen als eingesetztes Verfahren mit 55 %.  Zur Erkennung von Bild und Ton setzen 49 % der Unternehmen auf KI. “Wissensbasierte
        Systeme" werden beinahe eben so häufig genutzt. Sprach- und Textverstehen sind mit 30 % repräsentiert.</p>
        </div>
      </div>
      <div className="chartcontainer">
          <Chart1 /> 
          <Chart2 />
          <Chart3 />
          <Chart4 />
      </div> 
    </>
  );
}

export default Section6;
