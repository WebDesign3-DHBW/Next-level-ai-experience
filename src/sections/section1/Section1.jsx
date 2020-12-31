// import Particles from "react-particles-js";
import Kopf from "./Kopf7.svg";
import "pathseg";

function Section1() {
  return (
    <>
      <div className="flexContainer">
        <div className="textContainer">
          <div className="container">
            <h1>Einsatz von KI in der deutschen Wirtschaft</h1>
            <p>
              Im Jahr 2019 haben 17.500 Unternehmen im Bereich der Innovationserhebung Künstlicher
              Intelligenz in Produkten, Dienstleistungen oder für interne Prozesse eingesetzt.
              Erfahren Sie mehr über den Stellenwert von KI in der Deutschen Wirtschaft.
            </p>
          </div>
        </div>
        <div className="textContainer">
          {/* <Particles
            className="head"
            params={{
              //
              fps_limit: 28,
              particles: {
                collisions: {
                  enable: false,
                },
                number: {
                  value: 200,
                  density: {
                    enable: false,
                  },
                },
                line_linked: {
                  enable: true,
                  distance: 30,
                  opacity: 0.4,
                },
                move: {
                  speed: 1,
                },
                opacity: {
                  anim: {
                    enable: true,
                    opacity_min: 0.05,
                    speed: 1,
                    sync: false,
                  },
                  value: 0.4,
                },
              },
              polygon: {
                enable: true,
                scale: 1,
                type: "inline",
                move: {
                  radius: 10,
                },
                // draw: {
                //   enable: true,
                //   lineColor: "#fdb927",
                //   lineWidth: 1,
                // },
                // move: {
                //   radius: 10,
                // },
                // inlineArrangement: "equidistant",
                // scale: 1,
                // type: "inline",
                inline: {
                  arrangement: "equidistant",
                },
                draw: {
                  enable: true,
                  stroke: {
                    color: "rgba(255, 255, 255, .2)",
                  },
                },
                url: Kopf,
                // data: {
                //   size: {
                //     width: 2000,
                //     height: 2000,
                //   },
                // },
              },
              retina_detect: false,
              interactivity: {
                events: {
                  onhover: {
                    enable: true,
                    mode: "bubble",
                  },
                },
                modes: {
                  bubble: {
                    size: 6,
                    distance: 40,
                  },
                },
              },
            }}
          /> */}
          <img src={Kopf} alt="Kopf SVG" height="700" className="head" />
        </div>
      </div>

      {/* <div> */}
      {/* </div> */}
    </>
  );
}

export default Section1;
