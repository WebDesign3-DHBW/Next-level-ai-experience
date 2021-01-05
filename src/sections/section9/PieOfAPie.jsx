import { useLayoutEffect, useRef } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_wdTheme from "../../theme";
import Chemie from "../../svg/PhGrst.svg";
import Entsorg from "../../svg/EntsorgBgb.svg";
import Fahrzeugbau from "../../svg/Fahrzeugbau.svg";
import Finanzdienstleist from "../../svg/Finanzdienstleist.svg";
import Großhandel from "../../svg/Großhandel.svg";
import IKT from "../../svg/IKT.svg";
import Maschinenbau from "../../svg/Maschinb.svg";
import SonstVerarb from "../../svg/SonstVerarbGew.svg";
import SonstDienst from "../../svg/SonstDienstleist.svg";
import UnternNaheDiesnt from "../../svg/UnternnaheDienstl.svg";
import VerkehrLogistik from "../../svg/VerkehrLogistik.svg";

am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_wdTheme);

function PieOfAPie() {
  const chart = useRef(null);

  useLayoutEffect(() => {
    let container = am4core.create("pieofpie", am4core.Container);
    container.width = am4core.percent(100);
    container.height = am4core.percent(100);
    container.layout = "horizontal";

    let x = container.createChild(am4charts.PieChart);

    // Add data
    x.data = [
      {
        branch: "IKT",
        amount: 1.5,
        icon: IKT,
        color: am4core.color("#EDE750"),
        isActive: true,

        subData: [
          { name: "interne laufende Aufwendungen", value: 88 },
          { name: "Investitionen", value: 10 },
          { name: "externe Aufwendungen", value: 2 },
        ],
      },
      {
        branch: "Elektrotechnik, Maschinenbau",
        amount: 0.68,
        icon: Maschinenbau,
        color: am4core.color("#F09443"),
        subData: [
          { name: "interne laufende Aufwendungen", value: 66 },
          { name: "Investitionen", value: 22 },
          { name: "externe Aufwendungen", value: 12 },
        ],
      },
      {
        branch: "Fahrzeugbau",
        amount: 0.84,
        icon: Fahrzeugbau,
        color: am4core.color("#FFF8F9"),

        subData: [
          { name: "interne laufende Aufwendungen", value: 74 },
          { name: "Investitionen", value: 16 },
          { name: "externe Aufwendungen", value: 10 },
        ],
      },
      {
        branch: "Unternehmensnahe Dienstleistungen",
        amount: 0.65,
        icon: UnternNaheDiesnt,
        color: am4core.color("#FA2662"),
        subData: [
          { name: "interne laufende Aufwendungen", value: 74 },
          { name: "Investitionen", value: 15 },
          { name: "externe Aufwendungen", value: 11 },
        ],
      },
      {
        branch: "Sonstiges Verarbeitendes Gewerbe",
        amount: 0.26,
        icon: SonstVerarb,
        color: am4core.color("#E1AAFE"),
        subData: [
          { name: "interne laufende Aufwendungen", value: 69 },
          { name: "Investitionen", value: 20 },
          { name: "externe Aufwendungen", value: 12 },
        ],
      },
      {
        branch: "Finanzdienstleistungen",
        amount: 0.24,
        icon: Finanzdienstleist,
        color: am4core.color("#78DF6C"),
        subData: [
          { name: "interne laufende Aufwendungen", value: 71 },
          { name: "Investitionen", value: 19 },
          { name: "externe Aufwendungen", value: 10 },
        ],
      },
      {
        branch: "Sonstige Dienstleistungen",
        amount: 0.19,
        icon: SonstDienst,
        color: am4core.color("#4985D4"),
        subData: [
          { name: "interne laufende Aufwendungen", value: 75 },
          { name: "Investitionen", value: 14 },
          { name: "externe Aufwendungen", value: 10 },
        ],
      },
      {
        branch: "Verkehr und Logistik",
        amount: 0.16,
        icon: VerkehrLogistik,
        color: am4core.color("#4CC8DD"),
        subData: [
          { name: "interne laufende Aufwendungen", value: 72 },
          { name: "Investitionen", value: 17 },
          { name: "externe Aufwendungen", value: 11 },
        ],
      },
      {
        branch: "Chemie/Pharma, Grundstoffe",
        amount: 0.14,
        icon: Chemie,
        color: am4core.color("#0FAA94"),
        subData: [
          { name: "interne laufende Aufwendungen", value: 69 },
          { name: "Investitionen", value: 19 },
          { name: "externe Aufwendungen", value: 12 },
        ],
      },
      {
        branch: "Ver- und Entsorgung, Bergbau",
        amount: 0.07,
        icon: Entsorg,
        color: am4core.color("#BB57FE"),
        subData: [
          { name: "interne laufende Aufwendungen", value: 73 },
          { name: "Investitionen", value: 17 },
          { name: "externe Aufwendungen", value: 11 },
        ],
      },
      {
        branch: "Großhandel",
        amount: 0.07,
        icon: Großhandel,
        color: am4core.color("#FF00FF"),
        subData: [
          { name: "interne laufende Aufwendungen", value: 72 },
          { name: "Investitionen", value: 17 },
          { name: "externe Aufwendungen", value: 11 },
        ],
      },
    ];

    // Set inner radius
    x.innerRadius = am4core.percent(60);

    // Add and configure Series
    let pieSeries = x.series.push(new am4charts.PieSeries());
    pieSeries.labels.template.applyOnClones = true;
    pieSeries.dataFields.value = "amount";
    pieSeries.dataFields.category = "branch";
    pieSeries.labels.template.html = "<img src={icon} height=30 width=30/>";

    pieSeries.alignLabels = false;

    pieSeries.slices.template.propertyFields.fill = "color";
    pieSeries.slices.template.fillOpacity = 0.2;
    pieSeries.slices.template.propertyFields.stroke = "color";
    pieSeries.slices.template.strokeWidth = 3;
    pieSeries.ticks.template.propertyFields.stroke = "color";
    pieSeries.ticks.template.strokeOpacity = 1;
    pieSeries.slices.template.states.getKey("active").properties.shiftRadius = 0;

    pieSeries.slices.template.events.on("hit", function (event) {
      selectSlice(event.target.dataItem);
    });

    let chart2 = container.createChild(am4charts.PieChart);
    chart2.width = am4core.percent(35);
    chart2.radius = am4core.percent(80);

    // Add and configure Series
    let pieSeries2 = chart2.series.push(new am4charts.PieSeries());
    pieSeries2.dataFields.value = "value";
    pieSeries2.dataFields.category = "name";
    pieSeries2.slices.template.states.getKey("active").properties.shiftRadius = 0;
    pieSeries2.labels.template.disabled = true;
    pieSeries2.ticks.template.disabled = true;
    pieSeries2.alignLabels = false;
    pieSeries2.events.on("positionchanged", updateLines);
    // pieSeries2.slices.template.fill = am4core.color("rgba(0, 0, 0, 0)");
    pieSeries2.slices.template.stroke = am4core.color("#ccc");
    pieSeries2.slices.template.strokeWidth = 1;

    let line1 = container.createChild(am4core.Line);
    line1.strokeDasharray = "2,2";
    line1.strokeOpacity = 0.5;
    line1.stroke = am4core.color("#ffffff");
    line1.isMeasured = false;

    let line2 = container.createChild(am4core.Line);
    line2.strokeDasharray = "2,2";
    line2.strokeOpacity = 0.5;
    line2.stroke = am4core.color("#ffffff");
    line2.isMeasured = false;

    let selectedSlice;

    function selectSlice(dataItem) {
      selectedSlice = dataItem.slice;

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

    x.events.on("datavalidated", function () {
      setTimeout(function () {
        selectSlice(pieSeries.dataItems.getIndex(0));
      }, 1000);
    });

    container.logo.disabled = true;
    chart.current = x;

    return () => {
      x.dispose();
    };
  }, []);
  return <div id='pieofpie' style={{ width: "100%", height: "600px" }}></div>;
}

export default PieOfAPie;
