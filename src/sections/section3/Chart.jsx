import { useLayoutEffect, useRef } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_wdTheme from "../../theme";

am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_wdTheme);

function Chart() {
  const chart = useRef(null);

  useLayoutEffect(() => {
    var x = am4core.create("chartdiv", am4charts.XYChart);

    // Add data
    x.data = [
      {
        branch: "Gesamtwirtschaft",
        essenziell: 12,
        wichtig: 65,
        wenigerwichtig: 23,
      },
      {
        branch: "Finanzdienstleist.",
        wichtig: 68,
        wenigerwichtig: 32,
      },
      {
        branch: "Fahrzeugbau",
        essenziell: 4.4,
        wichtig: 71.2,
        wenigerwichtig: 24.4,
      },
      {
        branch: "Verkehr, Logistik",
        essenziell: 10.2,
        wichtig: 72.8,
        wenigerwichtig: 17,
      },
      {
        branch: "Untern.nahe Dienstl.",
        essenziell: 10.2,
        wichtig: 66.4,
        wenigerwichtig: 23.4,
      },
      {
        branch: "Ver-/Entsorg., Bg.b.",
        essenziell: 10.2,
        wichtig: 72.4,
        wenigerwichtig: 17.4,
      },
      {
        branch: "Chemie/Ph., Gr.st.",
        essenziell: 11,
        wichtig: 74,
        wenigerwichtig: 15,
      },
      {
        branch: "Elektrot./Maschin.b.",
        essenziell: 12,
        wichtig: 72,
        wenigerwichtig: 16,
      },
      {
        branch: "Sonst. Verarb. Gew.",
        essenziell: 13,
        wichtig: 60,
        wenigerwichtig: 27,
      },
      {
        branch: "IKT",
        essenziell: 17,
        wichtig: 60,
        wenigerwichtig: 23,
      },
      {
        branch: "Großhandel",
        essenziell: 17,
        wichtig: 64,
        wenigerwichtig: 19,
      },
      {
        branch: "Sonst. Dienstleist.",
        essenziell: 20,
        wichtig: 56,
        wenigerwichtig: 24,
      },
    ];

    x.legend = new am4charts.Legend();
    x.legend.position = "bottom";

    // Create axes
    let categoryAxis = x.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "branch";
    categoryAxis.renderer.grid.template.opacity = 0;

    let valueAxis = x.xAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.max = 100;
    valueAxis.renderer.grid.template.opacity = 0;
    valueAxis.renderer.ticks.template.strokeOpacity = 0.5;
    valueAxis.renderer.ticks.template.length = 10;
    valueAxis.renderer.line.strokeOpacity = 0.5;
    valueAxis.renderer.baseGrid.disabled = true;
    valueAxis.renderer.minGridDistance = 40;

    // Create series
    function createSeries(field, name) {
      let series = x.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueX = field;
      series.dataFields.categoryY = "branch";
      series.stacked = true;
      series.name = name;

      let labelBullet = series.bullets.push(new am4charts.LabelBullet());
      labelBullet.locationX = 0.5;
      labelBullet.label.text = "{valueX}";
    }

    createSeries("essenziell", "essenziell");
    createSeries("wichtig", "wichtig");
    createSeries("wenigerwichtig", "weniger wichtig");

    x.numberFormatter.numberFormat = "#.";
    x.logo.disabled = true;
    chart.current = x;

    return () => {
      x.dispose();
    };
  }, []);
  return <div id='chartdiv' style={{ width: "100%", height: "600px" }}></div>;
}

export default Chart;
