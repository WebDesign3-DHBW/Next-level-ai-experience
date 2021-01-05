import Chart1 from "./Chart1";
import Chart2 from "./Chart2";
import Chart3 from "./Chart3";
import Chart4 from "./Chart4";
import Chart5 from "./Chart5";

function Section7() {
  return (
    <>
      <div className="container pt-5 mr-0">
        <div className="h2l-box row mb-3">
        <h2>Anwendungsgebiete</h2>
        <div className="d-inline-block mt-5 mr-0">
          <div className="d-flex">
          <div className="w-50 mr-auto mb-5">
            <p>Am weitesten verbreitet war im Jahr 2019 in der deutschen Wirtschaft <b>maschinelles Lernen und Beweisen</b> als eingesetztes Verfahren <b>mit 55 %</b>.  Zur <b>Erkennung von Bild und Ton</b> setzen <b>49 %</b> der Unternehmen auf KI. <b>Wissensbasierte
            Systeme</b> werden beinahe eben so häufig genutzt. <b>Sprach- und Textverstehen</b> sind mit <b>30 %</b> repräsentiert.</p>
          </div>
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
