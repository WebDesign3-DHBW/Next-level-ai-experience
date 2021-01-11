import { IconContext } from 'react-icons';
import { MdFormatShapes } from 'react-icons/md';

function Section2() {
  return (
    <>
      <div className="centerbox">
        <div className="content">
          <h2 className="heroH2 mb-5">Die Studie</h2>
          <p>
            Die Daten des Berichts „Einsatz von Künstlicher Intelligenz in der
            Deutschen Wirtschaft” des <b>Bundesministerium für Wirtschaft und
            Energie aus dem Jahr 2019</b> basieren auf einer Sonderauswertung der
            Deutschen Innovationserhebung des Jahres 2019 sowie einer
            Zusatzbefragung von KI einsetzenden Unternehmen.
          </p>
          <div className="d-flex">
            <div className="d-flex mr-2 mt-1">
              <IconContext.Provider value={{ className: 'iconGrey' }}>
                <MdFormatShapes />
              </IconContext.Provider>
            </div>
            <div className="d-flex">
              <p>
                Grafische Aufbereitung der Studie durch Studenten der
                <br /><b> DHBW Mosbach, Onlinemedien </b><br /> Nils Eisenhauer, Natascha Forster, Felix
                Keller, Ole Mantei
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section2;
