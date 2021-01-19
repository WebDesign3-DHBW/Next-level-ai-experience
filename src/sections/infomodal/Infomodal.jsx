import { useRef } from "react";
import { useModal, Modal } from "react-morphing-modal";
import "react-morphing-modal/dist/ReactMorphingModal.css";
import { MdInfoOutline } from "react-icons/md";
import IKT from "../../svg/IKT.svg";
import FZ from "../../svg/Finanzdienstleist.svg";
import UD from "../../svg/UnternnaheDienstl.svg";
import EM from "../../svg/Maschinb.svg";
import FB from "../../svg/Fahrzeugbau.svg";
import CPG from "../../svg/PhGrst.svg";
import VEB from "../../svg/EntsorgBgb.svg";
import SVG from "../../svg/SonstVerarbGew.svg";
import SD from "../../svg/SonstDienstleist.svg";
import VL from "../../svg/VerkehrLogistik.svg";
import GH from "../../svg/Großhandel.svg";

const Button = ({ openModal }) => {
  const btnRef = useRef(null);
  function handleClick() {
    // do some complicated stuff
    openModal(btnRef);
  }

  return (
    <button className="modalButton" ref={btnRef} onClick={handleClick}>
      <MdInfoOutline />
    </button>
  );
};

export const Infomodal = () => {
  const { modalProps, open } = useModal({ background: "rgba(13, 21, 52, 0.95)" });
  return (
    <>
      <Button openModal={open} />
      <Modal {...modalProps}>
        <div class="container">
          <table class="table">
            <thead>
              <tr>
                <th>Icon</th>
                <th>Abkürzung</th>
                <th>Vollständige Bezeichnung</th>
                <th>Erklärung</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="infoSvgContainer">
                  <img src={IKT} alt="IKT"/>
                </td>
                <td>IKT</td>
                <td>Informations- und Kommunikationstechnologien</td>
                <td>
                  Herstellung von Datenverarbeitungsgeräten, elektronischen und optischen
                  Erzeugnissen, Telekommunikation, Erbringung von Dienstleistungen der
                  Informationstechnologie, Informationsdienstleistungen
                </td>
              </tr>
              <tr>
                <td className="infoSvgContainer">
                  <img src={CPG} alt="CPG" />                
                </td>
                <td>Chemie/ Ph., Grundst. In.</td>
                <td>Chemie-, Pharma und Grundstoffindustrie</td>
                <td>
                  Mineralölverarbeitung, Herstellung von chemischen und pharmazeutischen
                  Erzeugnissen, Gummi- und Kunststoffwaren, Glas und Glaswaren sowie Keramik,
                  Verarbeitung von Steinen und Erden
                </td>
              </tr>
              <tr>
                <td className="infoSvgContainer">
                  <img src={EM} alt="EM" />
                </td>
                <td>Elektrot./ Maschin.b.</td>
                <td>Elektrotechnik und Maschinenbau</td>
                <td>Herstellung von elektrischen Ausrüstungen, Maschinenbau</td>
              </tr>
              <tr>
                <td className="infoSvgContainer">
                  <img src={FB} alt="FB" />
                </td>
                <td>Fahrzeugbau</td>
                <td>Fahrzeugbau</td>
                <td>Herstellung von Kraftwagen und Kraftwagenteilen, sonstiger Fahrzeugbau</td>
              </tr>
              <tr>
                <td className="infoSvgContainer">
                  <img src={SVG} alt="SVG" />                
                  </td>
                <td>Sonst. Verarb. Gew.</td>
                <td>Sonstiges Verarbeitendes Gewerbe</td>
                <td>
                  Herstellung von Nahrungs- und Futtermitteln, Getränken, Tabakwaren, Textilien,
                  Bekleidung, Leder, Lederwaren, Schuhen, Holzwaren, Papier und Papierwaren,
                  Druckerzeugnissen, Metallen und Metallwaren, Möbeln sowie sonstigen Waren,
                  Reparatur und Installation von Maschinen und Ausrüstungen
                </td>
              </tr>
              <tr>
                <td className="infoSvgContainer">
                  <img src={VEB} alt="VEB" />                
                </td>
                <td>Ver-/ Entsorg., Bergb.</td>
                <td>Ver- und Entsorgung, Bergbau</td>
                <td>
                  Bergbau, Gewinnung von Steinen und Erden, Energie- und Wasserversorgung, Abwasser-
                  und Abfallentsorgung
                </td>
              </tr>
              <tr>
                <td className="infoSvgContainer">
                  <img src={GH} alt="GH" />
                </td>
                <td>Großhandel</td>
                <td>Großhandel</td>
                <td>Großhandel, ohne Handel mit Kraftfahrzeugen</td>
              </tr>
              <tr>
                <td className="infoSvgContainer">
                  <img src={VL} alt="VL" />
                </td>
                <td>Verkehr, Logistik</td>
                <td>Verkehr und Logistik</td>
                <td>
                  Landverkehr, Schifffahrt, Luftfahrt, Lagerei, Erbringung sonstiger
                  Dienstleistungen für den Verkehr
                </td>
              </tr>
              <tr>
                <td className="infoSvgContainer">
                  <img src={UD} alt="UD" />
                </td>
                <td>Untern.nahe Dienstl.</td>
                <td>Unternehmensnahe Dienstleistungen</td>
                <td>
                  Verlagswesen, Filmherstellung, Tonstudios, Kinos, Rundfunkveranstalter, Rechts-
                  und Steuerberatung, Wirtschaftsprüfung, Public-Relations- und
                  Unternehmensberatung, Architektur- und Ingenieurbüros; technische, physikalische
                  und chemische Untersuchung, Forschung und Entwicklung, Werbung und Marktforschung,
                  sonstige freiberufliche, wissenschaftliche und technische Tätigkeiten
                </td>
              </tr>
              <tr>
                <td className="infoSvgContainer">
                  <img src={FZ} alt="FZ" />
                </td>
                <td>Finanzdienstleist.</td>
                <td>Finanzdienstleistungen</td>
                <td>
                  Erbringung von Finanzdienstleistungen, Versicherungen, mit Finanz und
                  Versicherungsdienstleistungen verbundene Tätigkeiten
                </td>
              </tr>
              <tr>
                <td className="infoSvgContainer">
                  <img src={SD} alt="SD" />
                </td>
                <td>Sonst. Dienstleist.</td>
                <td>Sonstige Dienstleistungen</td>
                <td>
                  Vermittlung und Überlassung von Arbeitskräften, Reisebüros und Reiseveranstalter,
                  Wach- und Sicherheitsdienste, Detekteien, Gebäudebetreuung, Garten- und
                  Landschaftsbau, Erbringung von sonstigen wirtschaftlichen Dienstleistungen für
                  Unternehmen und Privatpersonen
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Modal>
    </>
  );
};
