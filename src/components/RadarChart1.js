import React from "react";
import { Radar, defaults } from "react-chartjs-2";

defaults.global.legend.position = "bottom";
defaults.global.animation.duration = 5000;

const RadarChart = () => {
  return (
    <div>
      <Radar
        data={{
          labels: [
            "Sonst. Dienstleist.",
            "Großhandel",
            "IKT",
            "Sonst. Verarb. Gew.",
            "Elektrot./Maschin.b.",
            "Chemie/Ph., Gr.st.",
            "Ver-/Entsorg., Bg.b.",
            "Untern.nahe Dienstl.",
            "Verkehr, Logistik",
            "Fahrzeugbau",
            "Finanzdienstleist.",
          ],
          datasets: [
            {
              data: [17.8, 12.2, 11.1, 6.8, 5.1, 4.6, 3.6, 3.3, 2.5, 1.5, 1],
              backgroundColor: "rgba(36,131,147, 0.3)",
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          title: {
            display: true,
            fontSize: 22,
            text:
              "Bedeutung des Einsatzes von KI für die Geschäftstätigkeit der Unternehmen der deutschen Wirtschaft 2019 (in %)",
          },
          scales: {
            angleLines: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
};

export default RadarChart;
