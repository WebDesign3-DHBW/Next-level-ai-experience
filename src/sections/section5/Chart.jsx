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
    var x = am4core.create("ersterEinsatz", am4charts.XYChart);

    var dateAxis = x.xAxes.push(new am4charts.DateAxis());
    x.dateFormatter.dateFormat = "yyyy";
    // dateAxis.dataFields.category = "year";
    dateAxis.title.text = "Jahr";
    var valueAxis = x.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "Prozent";

    createSeries("percent", "Finanzdienstleist.");
    createSeries("percent", "Chemie/Ph., Gr.st.");
    createSeries("percent", "Elektrot./Maschin.b.");
    createSeries("percent", "IKT");
    createSeries("percent", "Großhandel");
    createSeries("percent", "Verkehr, Logistik");
    createSeries("percent", "Ver-/Entsorg., Bg.b.");
    createSeries("percent", "Sonst. Verarb. Gew.");
    createSeries("percent", "Untern.nahe Dienstl.");
    createSeries("percent", "Sonst. Dienstleist.");
    createSeries("percent", "Fahrzeugbau");
    createSeries("percent", "Gesamtwirtschaft");

    // Create series
    function createSeries(branch, name) {
      var series = x.series.push(new am4charts.LineSeries());
      series.dataFields.valueY = name;
      series.dataFields.dateX = "year";
      series.name = name;

      var segment = series.segments.template;
      segment.interactionsEnabled = true;

      var hoverState = segment.states.create("hover");
      hoverState.properties.strokeWidth = 3;

      var dimmed = segment.states.create("dimmed");
      dimmed.properties.stroke = am4core.color("#dadada");

      segment.events.on("over", function (event) {
        processOver(event.target.parent.parent.parent);
      });

      segment.events.on("out", function (event) {
        processOut(event.target.parent.parent.parent);
      });

      var data = [
        {
          year: "2010",
          "Finanzdienstleist.": 6,
          "Chemie/Ph., Gr.st.": 11,
          "Elektrot./Maschin.b.": 17,
          IKT: 9,
          Großhandel: 8,
          "Verkehr, Logistik": 20,
          "Ver-/Entsorg., Bg.b.": 12,
          "Sonst. Verarb. Gew.": 35,
          "Untern.nahe Dienstl.": 24,
          "Sonst. Dienstleist.": 43,
          Fahrzeugbau: 17,
          Gesamtwirtschaft: 20,
        },
        {
          year: "2015",
          "Finanzdienstleist.": 6 + 19,
          "Chemie/Ph., Gr.st.": 11 + 14,
          "Elektrot./Maschin.b.": 17 + 15,
          IKT: 9 + 26,
          Großhandel: 8 + 30,
          "Verkehr, Logistik": 20 + 19,
          "Ver-/Entsorg., Bg.b.": 12 + 31,
          "Sonst. Verarb. Gew.": 35 + 9,
          "Untern.nahe Dienstl.": 24 + 20,
          "Sonst. Dienstleist.": 43 + 11,
          Fahrzeugbau: 17 + 39,
          Gesamtwirtschaft: 20 + 20,
        },
        {
          year: "2017",
          "Finanzdienstleist.": 6 + 19 + 38,
          "Chemie/Ph., Gr.st.": 11 + 14 + 51,
          "Elektrot./Maschin.b.": 17 + 15 + 41,
          IKT: 9 + 26 + 39,
          Großhandel: 8 + 30 + 41,
          "Verkehr, Logistik": 20 + 19 + 16,
          "Ver-/Entsorg., Bg.b.": 12 + 31 + 31,
          "Sonst. Verarb. Gew.": 35 + 9 + 35,
          "Untern.nahe Dienstl.": 24 + 20 + 29,
          "Sonst. Dienstleist.": 43 + 11 + 14,
          Fahrzeugbau: 17 + 39 + 26,
          Gesamtwirtschaft: 20 + 20 + 33,
        },
        {
          year: "2019",
          "Finanzdienstleist.": 6 + 19 + 38 + 37,
          "Chemie/Ph., Gr.st.": 11 + 14 + 51 + 23,
          "Elektrot./Maschin.b.": 17 + 15 + 41 + 27,
          IKT: 9 + 26 + 39 + 27,
          Großhandel: 8 + 30 + 41 + 22,
          "Verkehr, Logistik": 20 + 19 + 16 + 45,
          "Ver-/Entsorg., Bg.b.": 12 + 31 + 31 + 26,
          "Sonst. Verarb. Gew.": 35 + 9 + 35 + 21,
          "Untern.nahe Dienstl.": 24 + 20 + 29 + 27,
          "Sonst. Dienstleist.": 43 + 11 + 14 + 32,
          Fahrzeugbau: 17 + 39 + 26 + 18,
          Gesamtwirtschaft: 20 + 20 + 33 + 27,
        },
      ];
      // var value = Math.round(Math.random() * 100) + 100;
      // for (var i = 1; i < 100; i++) {
      //   value += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 30 + i / 5);
      //   var dataItem = { date: new Date(2018, 0, i) };
      //   dataItem["percent" + branch] = value;
      //   data.push(dataItem);
      // }
      console.log("data", data);
      series.data = data;
      return series;
    }

    x.legend = new am4charts.Legend();
    // x.legend.position = "right";
    x.legend.scrollable = true;
    x.legend.itemContainers.template.events.on("over", function (event) {
      processOver(event.target.dataItem.dataContext);
    });

    x.legend.itemContainers.template.events.on("out", function (event) {
      processOut(event.target.dataItem.dataContext);
    });

    function processOver(hoveredSeries) {
      hoveredSeries.toFront();

      hoveredSeries.segments.each(function (segment) {
        segment.setState("hover");
      });

      x.series.each(function (series) {
        if (series != hoveredSeries) {
          series.segments.each(function (segment) {
            segment.setState("dimmed");
          });
          series.bulletsContainer.setState("dimmed");
        }
      });
    }

    function processOut(hoveredSeries) {
      x.series.each(function (series) {
        series.segments.each(function (segment) {
          segment.setState("default");
        });
        series.bulletsContainer.setState("default");
      });
    }

    x.logo.disabled = true;
    chart.current = x;

    return () => {
      x.dispose();
    };
  }, []);
  return <div id="ersterEinsatz" style={{ width: "100%", height: "600px" }}></div>;
}

export default Chart;
