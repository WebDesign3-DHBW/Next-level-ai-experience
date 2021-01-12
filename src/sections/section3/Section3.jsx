import Chart from "./Chart";

function Section3() {
  return (
    <>
      <div className="pt-5">
        <div className="h2-box mb-1">
          <h2>Bedeutung des Einsatzes von KI</h2>
        </div>
      </div>
      <div className="container d-flex" style={{ marginTop: "100px" }}>
        <div className="row">
          <div className="col-9">
            <Chart />
          </div>
          <div className="col-3 mt-3">
            <p>
              Der Einsatz von KI wird von den meisten Unternehmen, die KI einsetzen (65 %),{" "}
              <b>als wichtig für die Geschäftigkeit</b> eingestuft. Damit lassen sich{" "}
              <b>deutliche Verbesserungen</b> in Produktionsaktivitäten oder{" "}
              <b>Kapazitätserhöhungen</b> realisieren. Für 12 % der KI einsetzenden Unternehmen ist
              KI essenziell für ihre Geschäftstätigkeit, d.h. <b>ohne KI könnten </b> die
              entsprechenden Aktivitäten <b>gar nicht ausgeführt werden</b>. Als weniger wichtig und
              damit <b>ohne große Einbußen austauschbar</b> betrachten kanpp ein Viertel der
              Unternehmen.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Section3;
