import React from "react";
import { Doughnut, defaults } from "react-chartjs-2";

defaults.global.legend.position = "bottom";
defaults.global.elements.arc = 0;

const DoughnutChart = () => {
  return (
    <div>
      <Doughnut
        data={{
          labels: [
            "Finanzdienstleist.",
            "IKT",
            "Sonst. Verarb. Gew.",
            "Elektrot./Maschin.b.",
            "Untern.nahe Dienstl.",
            "Ver-/Entsorg., Bg.b.",
            "Großhandel",
            "Chemie/Ph., Gr.st.",
            "Fahrzeugbau",
            "Verkehr, Logistik",
            "Sonst. Dienstleist.",
          ],
          datasets: [
            {
              data: [17.3, 9, 6, 4.9, 4.8, 4.5, 4.3, 3.6, 3.3, 1.5, 0.8],
              backgroundColor: [
                "#78DF6C",
                "#EDE750",
                "#E1AAFE",
                "#F09443",
                "#FA2662",
                "#BB57FE",
                "#FF00FF",
                "#0FAA94",
                "#FFF8F9",
                "#4CC8DD",
                "#4985D4",
              ],
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
              "Abb. 2-15: Verteilung des Umsatzes von Produkten und Dienstleistungen mit KI-Einsatz in der deutschen Wirtschaft nach Branchengruppen 2019 (in Mrd. €)",
          },
        }}
      />
    </div>
  );
};

export default DoughnutChart;
