import Chart from './Chart';
import Chart2 from './Chart2';
import Chart3 from './Chart3';

function Section4() {
  return (
    <>
      <div className="pt-5">
        <div className="h2r-box mb-5">
          <h2>Indikatoren zur Verbreitung des Einsatzes von KI</h2>
        </div>
        <div className="d-inline-block mt-5">
          <div className="d-flex">
            <div className="w-75 h-100 d-flex">
              <div style={{ width: '46%' }}>
                <Chart />
              </div>
              <div style={{ width: '27%' }}>
                <Chart2 />
              </div>
              <div style={{ width: '27%' }}>
                <Chart3 />
              </div>
            </div>
            <div className="w-25 mt-3">
              <p>
                Im Jahr 2019 setzten rund 17.500 Unternehmen in Deutschland im
                Berichtskreis der Innovationserhebung Verfahren der Künstlichen
                Intelligenz in ihrem Unternehmen ein. Dies entspricht einem
                Anteil von 5,8 %. In der{' '}
                <b>IKT-Branche liegt dieser Anteilswert mit 17,8 % </b>
                erheblich höher. Auch die Ausgaben im Bereich KI (0,58 % des
                Umsatzes) und der Anteil der hauptsächlich Beschäftigen (1,51 %)
                waren in der IKT-Branche am höchsten.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section4;
