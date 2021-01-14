import Chart1 from './Chart1';
import Chart2 from './Chart2';
import Chart3 from './Chart3';
import Chart4 from './Chart4';

function Section6() {
  return (
    <>
      <div className="pt-5">
        <div className="h2r-box mb-5">
          <h2>KI Verfahren</h2>
        </div>
      </div>
      <div className="container pt-2 mr-0 ml-0">
        <div className="d-inline-block mt-5 mr-0">
          <div className="d-flex">
            <div className="w-50 mr-auto mb-5">
              <p>
                Am weitesten verbreitet war im Jahr 2019 in der deutschen
                Wirtschaft <b>maschinelles Lernen und Beweisen</b> als
                eingesetztes Verfahren <b>mit 55 %</b>. Zur{' '}
                <b>Erkennung von Bild und Ton</b> setzen <b>49 %</b> der
                Unternehmen auf KI. <b>Wissensbasierte Systeme</b> werden
                beinahe eben so häufig genutzt. <br />
                <b>Sprach- und Textverstehen</b> sind mit <b>30 %</b>{' '}
                repräsentiert.
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
      </div>
      <div className="container pt-2 mr-0 ml-0">
        <div className="d-inline-block mt-5 mr-0">
          <div className="d-flex">
            <div className="w-50 mr-auto mb-5">
              <p>
                Die <b>IKT-Branche</b> setzt häufiger KI-Verfahren im Bereich
                <b> maschinelles Lernen/Beweisen</b> und <b>wissensbasierte Systeme</b> ein, als es in der Gesamtwirtschaft üblich ist.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section6;
