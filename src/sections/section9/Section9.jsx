import PieOfAPie from "./PieOfAPie";
import BarChart from "./BarChart";

function Section9() {
  return (
    <div className="d-flex" style={{ height: "100vh", width: "100%" }}>
      <div className="row d-flex">
        <div className="col-8">
          <div className="pt-5">
            <div className="h2-box mb-5">
              <h2>Zusammensetzung der KI Ausgaben</h2>
            </div>
          </div>
          <div className="pb-0 mb-0 col-9">
          <p>
            Die Summe aller <b>Ausgaben</b> für KI-Verfahren sowie deren Entwicklung, Einführung und
            Pflege beliefen sich 2019 auf rund <b>4,8 Mrd. €</b> in der deutschen Wirtschaft. Die{" "}
            <b>IKT-Branche</b>
            verzeichnet dabei <br/><b>mit 1,5 Mrd. € (31 %) den größten Anteil der Ausgaben</b>. In der
            Gesamtwirtschaft setzen sich <br/>die KI-Ausgaben hauptsächlich (76 %) aus intern laufenden
            Aufwendungen zusammen, <br/>die im Wesentlichen Personalaufwendungen umfassen.
          </p>
          </div>
        </div>
        <div className="col-5 pt-0 mt-0 ml-auto mr-0">
          <BarChart />
        </div>
        <div className="col-6 pt-0 mt-0 ">
          <PieOfAPie />
        </div>
      </div>
    </div>
  );
}

export default Section9;
