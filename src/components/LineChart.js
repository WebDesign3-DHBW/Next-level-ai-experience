import { Line, defaults } from "react-chartjs-2";

defaults.global.legend.position = "bottom";
defaults.global.animation.duration = 5000;

const LineChart = () => {
  return (
    <div>
      <Line
        data={{
          labels: ["vor 2010", "2010 - 2015", "2016/2017", "2018/2019"],
          datasets: [
            {
              label: "Finanzdienstleist.",
              data: [6, 25, 63, 100],
              backgroundColor: "#78DF6C",
              borderColor: "#78DF6C",
              fill: false,
            },
            {
              label: "Chemie/Ph., Gr.st.",
              data: [11, 25, 76, 100],
              backgroundColor: "#0FAA94",
              borderColor: "#0FAA94",
              fill: false,
            },
            {
              label: "Sonst. Dienstleist.",
              data: [43, 54, 68, 100],
              backgroundColor: "#4985D4",
              borderColor: "#4985D4",
              fill: false,
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
              "Abb. 2-2: Jahr des erstmaligen Einsatzes von KI in Unternehmen der deutschen Wirtschaft",
          },
          elements: {
            line: {
              tension: 0,
            },
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default LineChart;
