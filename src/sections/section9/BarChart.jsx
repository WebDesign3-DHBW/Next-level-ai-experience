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
import Gesamtwirtschaft from "../../svg/Gesamtwirthschaft.svg";
import IKT from "../../svg/IKT.svg";
import Maschinenbau from "../../svg/Maschinb.svg";
import SonstVerarb from "../../svg/SonstVerarbGew.svg";
import SonstDienst from "../../svg/SonstDienstleist.svg";
import UnternNaheDiesnt from "../../svg/UnternnaheDienstl.svg";
import VerkehrLogistik from "../../svg/VerkehrLogistik.svg";
import handleViewport from "react-in-viewport";

am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_wdTheme);

function BarChart(props) {
  const chart = useRef(null);
  const { inViewport, forwardedRef } = props;

  useLayoutEffect(() => {
    if (inViewport) {
      var x = am4core.create("s9_barchart", am4charts.XYChart);

      // x.radius = am4core.percent(105);
      x.paddingLeft = 50;
      x.maskBullets = false;

      // Add data
      x.data = [
        {
          branch: "Fahrzeugbau",
          value: 7056,
          icon: Fahrzeugbau,
          color: am4core.color("#FFF8F9"),
        },
        {
          branch: "Elektrot./Maschin.b.",
          value: 718,
          icon: Maschinenbau,
          color: am4core.color("#F09443"),
        },
        {
          branch: "IKT",
          value: 382,
          icon: IKT,
          color: am4core.color("#EDE750"),
        },
        {
          branch: "Verkehr, Logistik",
          value: 321,
          icon: VerkehrLogistik,
          color: am4core.color("#4CC8DD"),
        },
        {
          branch: "Finanzdienstleist.",
          value: 286,
          icon: Finanzdienstleist,
          color: am4core.color("#78DF6C"),
        },
        {
          branch: "Chemie/Ph., Gr.st.",
          value: 282,
          icon: Chemie,
          color: am4core.color("#0FAA94"),
        },
        {
          branch: "Ver-/Entsorg., Bg.b.",
          value: 245,
          icon: Entsorg,
          color: am4core.color("#BB57FE"),
        },
        {
          branch: "Sonst. Dienstleist.",
          value: 210,
          icon: SonstDienst,
          color: am4core.color("#4985D4"),
        },
        {
          branch: "Großhandel",
          value: 171,
          icon: Großhandel,
          color: am4core.color("#FF00FF"),
        },
        {
          branch: "Sonst. Verarb. Gew.",
          value: 130,
          icon: SonstVerarb,
          color: am4core.color("#E1AAFE"),
        },
        {
          branch: "Untern.nahe Dienstl.",
          value: 93,
          icon: UnternNaheDiesnt,
          color: am4core.color("#FA2662"),
        },
        {
          branch: "Gesamtwirtschaft",
          value: 276,
          icon: Gesamtwirtschaft,
          color: am4core.color("#4F4FFE"),
        },
      ];

      let categoryAxis = x.yAxes.push(new am4charts.CategoryAxis());
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.dataFields.category = "branch";
      categoryAxis.renderer.minGridDistance = 1;
      categoryAxis.renderer.labels.template.dx = -50;
      categoryAxis.renderer.inversed = true;
      categoryAxis.renderer.grid.template.disabled = true;

    let valueAxis = x.xAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.max = 7500;
    valueAxis.strictMinMax = true;
    valueAxis.renderer.grid.template.disabled = true;
    valueAxis.title.text = "KI Ausgaben je Unternehmen in 1.000€";

      let series = x.series.push(new am4charts.ColumnSeries());
      series.dataFields.categoryY = "branch";
      series.dataFields.valueX = "value";
      series.columns.template.height = am4core.percent(40);
      series.columns.template.propertyFields.fill = "color";
      series.columns.template.fillOpacity = 0.2;
      series.columns.template.propertyFields.stroke = "color";
      series.columns.template.strokeWidth = 3;

      let labelBullet = series.bullets.push(new am4charts.LabelBullet());
      // labelBullet.locationX = 1;
      labelBullet.label.horizontalCenter = "left";
      labelBullet.label.truncate = false;
      labelBullet.label.hideOversized = false;
      labelBullet.label.dx = 5;
      labelBullet.label.text = "{value}";

      var image = new am4core.Image();
      image.width = 35;
      image.height = 35;
      image.verticalCenter = "middle";
      image.horizontalCenter = "right";
      image.dx = -10;
      image.adapter.add("href", (href, target) => {
        if (target.dataItem) {
          return target.dataItem._dataContext.icon;
        }
        return href;
      });
      categoryAxis.dataItems.template.bullet = image;

      x.numberFormatter.numberFormat = "#.";
      x.logo.disabled = true;
      chart.current = x;

      return () => {
        x.dispose();
      };
    }
  }, [inViewport]);
  return <div id='s9_barchart' style={{ width: "100%", height: "800px" }} ref={forwardedRef}></div>;
}

export default handleViewport(BarChart);
