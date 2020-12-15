import React from "react";
import { HorizontalBar, defaults } from "react-chartjs-2";

defaults.global.legend.position = "bottom";
defaults.global.animation.duration = 5000;

const BarChart = () => {
  return (
    <div>
      <HorizontalBar
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
              label: "essenziell",
              stack: "Stack 0",
              data: [20, 17, 17, 13, 12, 11, 10, 10, 10, 4, 0],
              backgroundColor: "blue",
            },
            {
              label: "wichtig",
              stack: "Stack 0",
              data: [56, 64, 60, 60, 72, 74, 72, 66, 73, 71, 68],
              backgroundColor: "green",
            },
            {
              label: "weniger wichtig",
              stack: "Stack 0",
              data: [24, 19, 23, 27, 16, 15, 17, 23, 17, 24, 32],
              backgroundColor: "turquoise",
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
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
                stacked: true,
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default BarChart;
