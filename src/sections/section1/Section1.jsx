import Particles from "react-tsparticles";
import Kopf from "./kopf.svg";
import "pathseg";

function Section1({ fullpageApi }) {
  return (
    <>
      <div className="header-container">
        <h1>Einsatz von KI in der deutschen Wirtschaft</h1>
        <p>
          Im Jahr 2019 haben 17.500 Unternehmen im Bereich der Innovationserhebung Künstlicher
          Intelligenz in Produkten, Dienstleistungen oder für interne Prozesse eingesetzt. Erfahren
          Sie mehr über den Stellenwert von KI in der Deutschen Wirtschaft.
        </p>
        <p>
          Semesterarbeit des Moduls „Multimediales Informationsdesign“ des Fachbereichs Onlinemedien
          der DHBW Mosbach 2021.{" "}
        </p>
      </div>
      <Particles
        id="tsparticles"
        options={{
          autoPlay: true,
          background: {
            color: {
              value: "",
            },
            image: "",
            position: "",
            repeat: "",
            size: "",
            opacity: 1,
          },
          backgroundMask: {
            composite: "destination-out",
            cover: {
              color: {
                value: "#fff",
              },
              opacity: 1,
            },
            enable: false,
          },
          backgroundMode: {
            enable: true,
            zIndex: -1,
          },
          detectRetina: false,
          fpsLimit: 30,
          infection: {
            cure: false,
            delay: 0,
            enable: false,
            infections: 0,
            stages: [],
          },
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onDiv: {
                selectors: "#repulse-div",
                enable: false,
                mode: "repulse",
                type: "circle",
              },
              onHover: {
                enable: true,
                mode: "bubble",
                parallax: {
                  enable: false,
                  force: 2,
                  smooth: 10,
                },
              },
              resize: true,
            },
            modes: {
              attract: {
                distance: 200,
                duration: 0.4,
                speed: 1,
              },
              bounce: {
                distance: 200,
              },
              bubble: {
                distance: 40,
                duration: 2,
                opacity: 8,
                size: 6,
              },
              connect: {
                distance: 80,
                links: {
                  opacity: 0.5,
                },
                radius: 60,
              },
              grab: {
                distance: 400,
                links: {
                  blink: false,
                  consent: false,
                  opacity: 1,
                },
              },
              light: {
                area: {
                  gradient: {
                    start: {
                      value: "#ffffff",
                    },
                    stop: {
                      value: "#000000",
                    },
                  },
                  radius: 1000,
                },
                shadow: {
                  color: {
                    value: "#000000",
                  },
                  length: 2000,
                },
              },
              push: {
                quantity: 4,
              },
              remove: {
                quantity: 2,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
                speed: 1,
              },
              slow: {
                factor: 1,
                radius: 0,
              },
              trail: {
                delay: 1,
                quantity: 1,
              },
            },
          },
          manualParticles: [],
          motion: {
            disable: false,
            reduce: {
              factor: 4,
              value: false,
            },
          },
          particles: {
            bounce: {
              horizontal: {
                random: {
                  enable: false,
                  minimumValue: 0.1,
                },
                value: 1,
              },
              vertical: {
                random: {
                  enable: false,
                  minimumValue: 0.1,
                },
                value: 1,
              },
            },
            collisions: {
              bounce: {
                horizontal: {
                  random: {
                    enable: false,
                    minimumValue: 0.1,
                  },
                  value: 1,
                },
                vertical: {
                  random: {
                    enable: false,
                    minimumValue: 0.1,
                  },
                  value: 1,
                },
              },
              enable: false,
              mode: "bounce",
            },
            color: {
              value: "#ffffff",
              animation: {
                enable: false,
                speed: 1,
                sync: true,
              },
            },
            life: {
              count: 0,
              delay: {
                random: {
                  enable: false,
                  minimumValue: 0,
                },
                value: 0,
                sync: false,
              },
              duration: {
                random: {
                  enable: false,
                  minimumValue: 0.0001,
                },
                value: 0,
                sync: false,
              },
            },
            links: {
              blink: false,
              color: {
                value: "#ffffff",
              },
              consent: false,
              distance: 30,
              enable: true,
              frequency: 1,
              opacity: 0.4,
              shadow: {
                blur: 5,
                color: {
                  value: "#00ff00",
                },
                enable: false,
              },
              triangles: {
                enable: false,
                frequency: 1,
              },
              width: 1,
              warp: false,
            },
            move: {
              angle: {
                offset: 45,
                value: 90,
              },
              attract: {
                enable: false,
                rotate: {
                  x: 600,
                  y: 1200,
                },
              },
              direction: "none",
              distance: 0,
              enable: true,
              gravity: {
                acceleration: 9.81,
                enable: false,
                maxSpeed: 50,
              },
              noise: {
                delay: {
                  random: {
                    enable: false,
                    minimumValue: 0,
                  },
                  value: 0,
                },
                enable: false,
              },
              outModes: {
                default: "bounce",
                bottom: "bounce",
                left: "bounce",
                right: "bounce",
                top: "bounce",
              },
              random: false,
              size: false,
              speed: 1,
              straight: false,
              trail: {
                enable: false,
                length: 10,
                fillColor: {
                  value: "#000000",
                },
              },
              vibrate: false,
              warp: false,
            },
            number: {
              density: {
                enable: false,
                area: 2000,
                factor: 1000,
              },
              limit: 0,
              value: 400,
            },
            opacity: {
              random: {
                enable: false,
                minimumValue: 0.1,
              },
              value: 0.4,
              animation: {
                enable: true,
                minimumValue: 0.05,
                speed: 2,
                sync: false,
              },
            },
            reduceDuplicates: false,
            rotate: {
              random: {
                enable: false,
                minimumValue: 0,
              },
              value: 0,
              animation: {
                enable: false,
                speed: 0,
                sync: false,
              },
              direction: "clockwise",
              path: false,
            },
            shadow: {
              blur: 0,
              color: {
                value: "#000000",
              },
              enable: false,
              offset: {
                x: 0,
                y: 0,
              },
            },
            shape: {
              options: {
                character: {
                  fill: false,
                  font: "Verdana",
                  style: "",
                  value: "*",
                  weight: "400",
                },
                char: {
                  fill: false,
                  font: "Verdana",
                  style: "",
                  value: "*",
                  weight: "400",
                },
                polygon: {
                  sides: 5,
                },
                star: {
                  sides: 5,
                },
                image: {
                  height: 100,
                  replaceColor: true,
                  src: "https://cdn.matteobruni.it/images/particles/github.svg",
                  width: 100,
                },
                images: {
                  height: 100,
                  replaceColor: true,
                  src: "https://cdn.matteobruni.it/images/particles/github.svg",
                  width: 100,
                },
              },
              type: "circle",
            },
            size: {
              random: {
                enable: true,
                minimumValue: 1,
              },
              value: 1,
              animation: {
                destroy: "none",
                enable: false,
                minimumValue: 0.1,
                speed: 40,
                startValue: "max",
                sync: false,
              },
            },
            stroke: {
              width: 0,
              color: {
                value: "#000000",
                animation: {
                  enable: false,
                  speed: 1,
                  sync: true,
                },
              },
            },
            twinkle: {
              lines: {
                enable: false,
                frequency: 0.05,
                opacity: 1,
              },
              particles: {
                enable: false,
                frequency: 0.05,
                opacity: 1,
              },
            },
          },
          pauseOnBlur: true,
          pauseOnOutsideViewport: true,
          themes: [],
          polygon: {
            draw: {
              enable: true,
              stroke: {
                color: {
                  value: "rgba(255,255,255,0.2)",
                },
                width: 0.5,
                opacity: 0.2,
              },
            },
            enable: true,
            inline: {
              arrangement: "equidistant",
            },
            move: {
              radius: 10,
              type: "path",
            },
            scale: 1.2,
            type: "inline",
            url: Kopf,
          },
        }}
      />
      <div className="scroll-down" address="true" onClick={() => fullpageApi.moveSectionDown()} />
    </>
  );
}

export default Section1;
