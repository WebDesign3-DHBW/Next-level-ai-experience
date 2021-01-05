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
import * as am4core from "@amcharts/amcharts4/core";

// Enable queuing
// am4core.options.queue = true;
// am4core.options.onlyShowOnViewport = true;
// am4core.options.viewportTarget = document.getElementById("charts");

function App() {
  return (
    <div className='view'>
      <div className='bg-section1'>
        <section>
          <Section1 />
        </section>
      </div>
      <div className='bg-section2'>
        <section>
          <Section2 />
        </section>
      </div>
      <div className='bg-A'>
        <section>
          <Section3 />
        </section>
      </div>
      <div className='bg-B'>
        <section>
          <Section4 />
        </section>
      </div>
      <div className='bg-A'>
        <section>
          <Section5 />
        </section>
      </div>
      <div className='bg-B'>
        <section>
          <Section6 />
        </section>
      </div>
      <div className='bg-A'>
        <section>
          <Section7 />
        </section>
      </div>
      <div className='bg-B'>
        <section>
          <Section8 />
        </section>
      </div>
      <div className='bg-A'>
        <section>
          <Section9 />
        </section>
      </div>
      <div className='bg-footer'>
        <section>
          <Footer />
        </section>
      </div>
    </div>
  );
}

export default App;
