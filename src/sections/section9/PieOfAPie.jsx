import { useLayoutEffect, useRef } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_dark from "@amcharts/amcharts4/themes/dark";

am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_dark);

function PieOfAPie() {
  const chart = useRef(null);

  useLayoutEffect(() => {
    let container = am4core.create("chartdiv", am4core.Container);
    container.width = am4core.percent(100);
    container.height = am4core.percent(100);
    container.layout = "horizontal";

    let x = container.createChild(am4charts.PieChart);

    // Add data
    x.data = [
      {
        branch: "IKT",
        amount: 1.5,
        subData: [
          { name: "interne laufende Aufwendungen", value: 88 },
          { name: "Investitionen", value: 10 },
          { name: "externe Aufwendungen", value: 2 },
        ],
      },
      {
        branch: "Elektrotechnik, Maschinenbau",
        amount: 0.68,
        subData: [
          { name: "interne laufende Aufwendungen", value: 66 },
          { name: "Investitionen", value: 22 },
          { name: "externe Aufwendungen", value: 12 },
        ],
      },
      {
        branch: "Fahrzeugbau",
        amount: 0.84,
        subData: [
          { name: "interne laufende Aufwendungen", value: 74 },
          { name: "Investitionen", value: 16 },
          { name: "externe Aufwendungen", value: 10 },
        ],
      },
      {
        branch: "Unternehmensnahe Dienstleistungen",
        amount: 0.65,
        subData: [
          { name: "interne laufende Aufwendungen", value: 74 },
          { name: "Investitionen", value: 15 },
          { name: "externe Aufwendungen", value: 11 },
        ],
      },
      {
        branch: "Sonstiges Verarbeitendes Gewerbe",
        amount: 0.26,
        subData: [
          { name: "interne laufende Aufwendungen", value: 69 },
          { name: "Investitionen", value: 20 },
          { name: "externe Aufwendungen", value: 12 },
        ],
      },
      {
        branch: "Finanzdienstleistungen",
        amount: 0.24,
        subData: [
          { name: "interne laufende Aufwendungen", value: 71 },
          { name: "Investitionen", value: 19 },
          { name: "externe Aufwendungen", value: 10 },
        ],
      },
      {
        branch: "Sonstige Dienstleistungen",
        amount: 0.19,
        subData: [
          { name: "interne laufende Aufwendungen", value: 75 },
          { name: "Investitionen", value: 14 },
          { name: "externe Aufwendungen", value: 10 },
        ],
      },
      {
        branch: "Verkehr und Logistik",
        amount: 0.16,
        subData: [
          { name: "interne laufende Aufwendungen", value: 72 },
          { name: "Investitionen", value: 17 },
          { name: "externe Aufwendungen", value: 11 },
        ],
      },
      {
        branch: "Chemie/Pharma, Grundstoffe",
        amount: 0.14,
        subData: [
          { name: "interne laufende Aufwendungen", value: 69 },
          { name: "Investitionen", value: 19 },
          { name: "externe Aufwendungen", value: 12 },
        ],
      },
      {
        branch: "Ver- und Entsorgung, Bergbau",
        amount: 0.07,
        subData: [
          { name: "interne laufende Aufwendungen", value: 73 },
          { name: "Investitionen", value: 17 },
          { name: "externe Aufwendungen", value: 11 },
        ],
      },
      {
        branch: "Großhandel",
        amount: 0.07,
        subData: [
          { name: "interne laufende Aufwendungen", value: 72 },
          { name: "Investitionen", value: 17 },
          { name: "externe Aufwendungen", value: 11 },
        ],
      },
    ];

    // Add and configure Series
    let pieSeries = x.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "amount";
    pieSeries.dataFields.category = "branch";
    pieSeries.slices.template.states.getKey("active").properties.shiftRadius = 0;
    //pieSeries.labels.template.text = "{category}\n{value.percent.formatNumber('#.#')}%";

    pieSeries.slices.template.events.on("hit", function (event) {
      selectSlice(event.target.dataItem);
    });

    let chart2 = container.createChild(am4charts.PieChart);
    chart2.width = am4core.percent(30);
    chart2.radius = am4core.percent(80);

    // Add and configure Series
    let pieSeries2 = chart2.series.push(new am4charts.PieSeries());
    pieSeries2.dataFields.value = "value";
    pieSeries2.dataFields.category = "name";
    pieSeries2.slices.template.states.getKey("active").properties.shiftRadius = 0;
    // pieSeries2.labels.template.radius = am4core.percent(50);
    // pieSeries2.labels.template.inside = true;
    //pieSeries2.labels.template.fill = am4core.color("#ffffff");
    pieSeries2.labels.template.disabled = true;
    pieSeries2.ticks.template.disabled = true;
    pieSeries2.alignLabels = false;
    pieSeries2.events.on("positionchanged", updateLines);

    let interfaceColors = new am4core.InterfaceColorSet();

    let line1 = container.createChild(am4core.Line);
    line1.strokeDasharray = "2,2";
    line1.strokeOpacity = 0.5;
    line1.stroke = interfaceColors.getFor("alternativeBackground");
    line1.isMeasured = false;

    let line2 = container.createChild(am4core.Line);
    line2.strokeDasharray = "2,2";
    line2.strokeOpacity = 0.5;
    line2.stroke = interfaceColors.getFor("alternativeBackground");
    line2.isMeasured = false;

    let selectedSlice;

    function selectSlice(dataItem) {
      selectedSlice = dataItem.slice;

      let fill = selectedSlice.fill;

      let count = dataItem.dataContext.subData.length;
      pieSeries2.colors.list = [];
      for (var i = 0; i < count; i++) {
        pieSeries2.colors.list.push(fill.brighten((i * 2) / count));
      }

      chart2.data = dataItem.dataContext.subData;
      pieSeries2.appear();

      let middleAngle = selectedSlice.middleAngle;
      let firstAngle = pieSeries.slices.getIndex(0).startAngle;
      let animation = pieSeries.animate(
        [
          { property: "startAngle", to: firstAngle - middleAngle },
          { property: "endAngle", to: firstAngle - middleAngle + 360 },
        ],
        600,
        am4core.ease.sinOut
      );
      animation.events.on("animationprogress", updateLines);

      selectedSlice.events.on("transformed", updateLines);

      //  var animation = chart2.animate({property:"dx", from:-container.pixelWidth / 2, to:0}, 2000, am4core.ease.elasticOut)
      //  animation.events.on("animationprogress", updateLines)
    }

    function updateLines() {
      if (selectedSlice) {
        let p11 = {
          x: selectedSlice.radius * am4core.math.cos(selectedSlice.startAngle),
          y: selectedSlice.radius * am4core.math.sin(selectedSlice.startAngle),
        };
        let p12 = {
          x: selectedSlice.radius * am4core.math.cos(selectedSlice.startAngle + selectedSlice.arc),
          y: selectedSlice.radius * am4core.math.sin(selectedSlice.startAngle + selectedSlice.arc),
        };

        p11 = am4core.utils.spritePointToSvg(p11, selectedSlice);
        p12 = am4core.utils.spritePointToSvg(p12, selectedSlice);

        let p21 = { x: 0, y: -pieSeries2.pixelRadius };
        let p22 = { x: 0, y: pieSeries2.pixelRadius };

        p21 = am4core.utils.spritePointToSvg(p21, pieSeries2);
        p22 = am4core.utils.spritePointToSvg(p22, pieSeries2);

        line1.x1 = p11.x;
        line1.x2 = p21.x;
        line1.y1 = p11.y;
        line1.y2 = p21.y;

        line2.x1 = p12.x;
        line2.x2 = p22.x;
        line2.y1 = p12.y;
        line2.y2 = p22.y;
      }
    }
    container.logo.disabled = true;
    chart.current = x;

    return () => {
      x.dispose();
    };
  }, []);
  return <div id='chartdiv' style={{ width: "100%", height: "600px" }}></div>;
}

export default PieOfAPie;
