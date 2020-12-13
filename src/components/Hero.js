import wave from "../images/wave1.svg";
import heroSVG from "../images/HeroSVG.svg";

function Hero() {
  return (
    <div className="HeroSection">
      <div className="HeroText">
        <h1 className="HeroTitle">Einsatz von KI in der deutschen Wirtschaft</h1>
        <p className="HeroSubtitle">
          Studie 2019, Bundesministerium für Wirtschaft und Energie Grafische Aufbereitung DHBW
          Mosbach - Onlinemedien Nils Eisenhauer, Felix Keller, Natascha Forster, Ole Mantei
        </p>
      </div>

      <img className="heroSVG" src={heroSVG} alt="wave vector" />
      <img id="wave1" src={wave} alt="wave vector" />
    </div>
  );
}

export default Hero;
