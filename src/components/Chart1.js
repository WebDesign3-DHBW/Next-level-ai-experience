import React from "react";
import { HorizontalBar, defaults } from "react-chartjs-2";

defaults.global.legend.position = "bottom";
defaults.global.animation.duration = 5000;

const BarChart = () => {
  return (
    <div>
      <HorizontalBar
        data={{
          labels: ["1", "2", "3", "4", "5", "6"],
          datasets: [
            {
              label: "essenziell",
              stack: "Stack 0",
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: "blue",
            },
            {
              label: "wichtig",
              stack: "Stack 0",
              data: [6, 8, 5, 5, 3, 1],
              backgroundColor: "green",
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
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
        lazy
      />
    </div>
  );
};

export default BarChart;
