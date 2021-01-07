function Footer() {
  return (
    <>
      <div className='d-flex justify-content-center flex-column' style={{ height: "100vh" }}>
        <div className='pt-5'>
          <div className='h2-box mb-5'>
            <h2>Impressum</h2>
          </div>
        </div>
        <p>
          Ein studentisches Projekt der <br />
          DHBW Campus Mosbach, Studiengang Onlinemedien <br />
          Lohrtalweg 10
          <br />
          74821 Mosbach
          <br />
          <a href='https://www.mosbach.dhbw.de/' className='text-decoration-none'>
            www.mosbach.dhbw.de
          </a>
        </p>
        <p>
          Web Design 3, 29.01.2021
          <br />
          Dozent: Dipl.-Des. Lothar B. Blum
          <br />
          Kurs: ON18A
          <br />
          Team: Nils Eisenhauer, Natascha Forster, Felix Keller, Ole Mantei
        </p>
        <p>
          Datengrundlage
          <br /> Einsatz von Künstlicher Intelligenz in der Deutschen Wirtschaft <br />
          Stand der KI-Nutzung im Jahr 2019 <br />
          Bundesministerium für Wirtschaft und Energie (BMWi)
          <br />
          Onlinepublikation{" "}
          <a
            className='text-decoration-none'
            href='https://www.bmwi.de/Redaktion/DE/Publikationen/Wirtschaft/einsatz-von-ki-deutsche-wirtschaft.html'>
            hier
          </a>{" "}
          verfügbar
        </p>
      </div>
    </>
  );
}

export default Footer;
