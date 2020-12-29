import Section1 from "./components/Section1";
import "./sass/main.scss";

function App() {
  return (
    <div className="view">
      <section>
        <Section1 />
      </section>
      <section>
        <p>Section 2</p>
      </section>
      <section>
        <p>Section 3</p>
      </section>
      <section>
        <p>Section 4</p>
      </section>
      <section>
        <p>Section 5</p>
      </section>
    </div>
  );
}

export default App;
