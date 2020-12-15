import Hero from "./components/Hero";
import BarChart from "./components/Chart1";
import RadarChart from "./components/RadarChart1";
import "./sass/main.scss";

function App() {
  return (
    <div className="view">
      <section className="Section1">
        <Hero />
      </section>
      <section style={{ backgroundColor: "skyblue" }}>
        <h1>Section Two</h1>
      </section>
      <section style={{ backgroundColor: "white" }}>
        <BarChart />
      </section>
      <section style={{ backgroundColor: "white" }}>
        <RadarChart />
      </section>
      <section style={{ backgroundColor: "mediumseagreen" }}>
        <h1>Section Five</h1>
      </section>
    </div>
  );
}

export default App;
