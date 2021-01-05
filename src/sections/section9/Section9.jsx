import PieOfAPie from "./PieOfAPie";
import BarChart from "./BarChart";

function Section9() {
  return (
    <div className='d-flex' style={{ height: "100vh", width: "100%" }}>
      <div className='row d-flex'>
        <div className='col-8'>
          <div className='pt-5'>
              <div className='h2-box mb-1'>
                <h2>Zusammensetzung KI Ausgaben</h2>
              </div>
            </div>
          <p>
            Die Summe aller Ausgaben für KI-Verfahren sowie deren Entwicklung, Einführung und Pflege
            beliefen sich 2019 auf rund 4,8 Mrd. € in der deutschen Wirtschaft. Die IKT-Branche
            verzeichnet dabei mit 1,5 Mrd. € (31 %) den größten Anteil der Ausgaben. In der
            Gesamtwirtschaft setzen sich die KI-Ausgaben hauptsächlich (76 %) aus intern laufenden
            Aufwendungen zusammen, die im Wesentlichen Personalaufwendungen umfassen.
          </p>
        </div>
        <div className='col-6 mt-4 align-self-center'>
          <BarChart />
        </div>
        <div className='col-6 mt-4 align-self-center'>
          <PieOfAPie />
        </div>
      </div>
    </div>
  );
}

export default Section9;
