import Chart from "./Chart";

function Section5() {
  return (
    <>
        <div className="row">
          <div className="col-6">
            <div className='my-5 h2-box mb-1'>
              <h2>Erstmaliger Einsatz</h2>
            </div>
            <p>
              Vor dem Jahr 2010 haben <b>bereits 20%</b> der KI einsetzenden Unternehmen KI für sich
              genutzt. Weitere 20 % begannen mit der Nutzung in der ersten Hälfte der 2010er Jahre.
              In den folgenden Jahren hat KI erneut an Popularität gewonnen.
            </p>
          </div>
          </div>
          <div className="row mt-4 mx-0">
            <div className="col-8 mx-auto">
            <Chart />
            </div>
          </div>
    </>
  );
}

export default Section5;
