import Hero from "./components/Hero";
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
      <section style={{ backgroundColor: "fuchsia" }}>
        <h1>Section Three</h1>
      </section>
      <section style={{ backgroundColor: "palegoldenrod" }}>
        <h1>Section Four</h1>
      </section>
      <section style={{ backgroundColor: "mediumseagreen" }}>
        <h1>Section Five</h1>
      </section>
    </div>
  );
}

export default App;
