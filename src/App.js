import Hero from "./components/Hero";
import BarChart from "./components/Chart1";
import LineChart from "./components/LineChart";
import RadarChart from "./components/RadarChart1";
import "./sass/main.scss";
import DoughnutChart from "./components/Doughnut";

function App() {
  return (
    <div className='view'>
      <section className='Section1'>
        <Hero />
      </section>
      <section style={{ backgroundColor: "#0D1534" }}>
        <DoughnutChart />
      </section>
      <section style={{ backgroundColor: "white" }}>
        <BarChart />
      </section>
      <section style={{ backgroundColor: "white" }}>
        <RadarChart />
      </section>
      <section style={{ backgroundColor: "#0D1534" }}>
        <LineChart />
      </section>
    </div>
  );
}

export default App;
