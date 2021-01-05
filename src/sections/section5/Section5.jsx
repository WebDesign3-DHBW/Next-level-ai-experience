import Chart from "./Chart";

function Section5() {
  return (
    <>
      <div className="container d-flex ml-0 pl-0" style={{ height: "100vh" }}>
        <div className="row">
          <div className="col-8 ">
            <div className='pt-5'>
              <div className='h2-box mb-1'>
                <h2>Erstmaliger Einsatz</h2>
              </div>
            </div>
            <p>
              Vor dem Jahr 2010 haben bereits 20%der KI einsetzenden Unternehmen KI für sich
              genutzt. Weitere 20 % begannen mit der Nutzung in der ersten Hälfte der 2010er Jahre.
              In den folgenden Jahren hat KI an weiterer Popularität gewonnen.
            </p>
          </div>
          <div className="col-12 mt-4">
            <Chart />
          </div>
        </div>
      </div>
    </>
  );
}

export default Section5;
