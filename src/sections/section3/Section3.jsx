import Chart from "./Chart";

function Section3() {
  return (
    <>
      <div className='pt-5'>
        <div className='h2-box mb-1'>
          <h2>Bedeutung des Einsatzes von KI</h2>
        </div>
      </div>
      <div className='container d-flex' style={{ marginTop: "100px" }}>
        <div className='row'>
          <div className='col-8'>
            <Chart />
          </div>
          <div className='col-4 mt-3'>
            <p>
              Der Einsatz von KI wird von den meisten Unternehmen, die KI einsetzen (65 %),<br/>{" "}
              <b>als wichtig für die Geschäftigkeit</b> eingestuft. Für 12 % der KI einsetzenden
              Unternehmen ist KI essenziell für ihre Geschäftstätigkeit, <br/>d.h.{" "}
              <b>ohne KI könnten </b>
              die entsprechenden Aktivitäten <b>gar nicht ausgeführt werden</b>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Section3;
