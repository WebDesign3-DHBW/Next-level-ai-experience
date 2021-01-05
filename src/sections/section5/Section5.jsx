import Chart from "./Chart";

function Section5() {
  return (
    <>
      <div className="container d-flex align-items-center" style={{ height: "100vh" }}>
        <div className="row">
          <div className="col-8 mx-auto">
            <h2 className="mb-2 text-center">Erstmaliger Einsatz</h2>
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
