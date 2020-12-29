import "./sass/main.scss";
import Section1 from "./sections/section1/Section1";
import Section2 from "./sections/section2/Section2";
import Section3 from "./sections/section3/Section3";
import Section4 from "./sections/section4/Section4";
import Section5 from "./sections/section5/Section5";
import Section6 from "./sections/section6/Section6";
import Section7 from "./sections/section7/Section7";
import Section8 from "./sections/section8/Section8";
import Section9 from "./sections/section9/Section9";
import Footer from "./sections/footer/Footer";

function App() {
  return (
    <div className='view'>
      <section>
        <Section1 />
      </section>
      <section>
        <Section2 />
      </section>
      <section>
        <Section3 />
      </section>
      <section>
        <Section4 />
      </section>
      <section>
        <Section5 />
      </section>
      <section>
        <Section6 />
      </section>
      <section>
        <Section7 />
      </section>
      <section>
        <Section8 />
      </section>
      <section>
        <Section9 />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;
