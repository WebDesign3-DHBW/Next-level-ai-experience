import Section3 from "./components/Section3";
import "./sass/main.scss";

function App() {
  return (
    <div className="view">
      <section>
        <p>Section 1</p>
      </section>
      <section>
        <p>Section 2</p>
      </section>
      <section>
        <Section3 />
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
