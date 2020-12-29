import { useLayoutEffect, useRef } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

function Section3() {
  const chart = useRef(null);

  useLayoutEffect(() => {
    var x = am4core.create("chartdiv", am4charts.PieChart);

    // Add data
    x.data = [
      {
        country: "Lithuania",
        litres: 501.9,
      },
      {
        country: "Czech Republic",
        litres: 301.9,
      },
      {
        country: "Ireland",
        litres: 201.1,
      },
      {
        country: "Germany",
        litres: 165.8,
      },
      {
        country: "Australia",
        litres: 139.9,
      },
      {
        country: "Austria",
        litres: 128.3,
      },
      {
        country: "UK",
        litres: 99,
      },
      {
        country: "Belgium",
        litres: 60,
      },
      {
        country: "The Netherlands",
        litres: 50,
      },
    ];

    // Add and configure Series
    var pieSeries = x.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";

    chart.current = x;

    return () => {
      x.dispose();
    };
    // eslint-disable-next-line
  }, []);
  return <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>;
}

export default Section3;