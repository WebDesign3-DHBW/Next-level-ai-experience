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

function Chart(props) {
  const chart = useRef(null);
  const { inViewport, forwardedRef } = props;

  useLayoutEffect(() => {
    if (inViewport) {
      var x = am4core.create("stackedbarchart", am4charts.XYChart);

      x.paddingLeft = 60;
      x.maskBullets = false;

      // Add data
      x.data = [
        {
          branch: "Gesamtwirtschaft",
          essenziell: 12,
          wichtig: 65,
          wenigerwichtig: 23,
          icon: Gesamtwirtschaft,
        },
        {
          branch: "Finanzdienstleist.",
          wichtig: 68,
          wenigerwichtig: 32,
          icon: Finanzdienstleist,
        },
        {
          branch: "Fahrzeugbau",
          essenziell: 4.4,
          wichtig: 71.2,
          wenigerwichtig: 24.4,
          icon: Fahrzeugbau,
        },
        {
          branch: "Verkehr, Logistik",
          essenziell: 10.2,
          wichtig: 72.8,
          wenigerwichtig: 17,
          icon: VerkehrLogistik,
        },
        {
          branch: "Untern.nahe Dienstl.",
          essenziell: 10.2,
          wichtig: 66.4,
          wenigerwichtig: 23.4,
          icon: UnternNaheDiesnt,
        },
        {
          branch: "Ver-/Entsorg., Bergb.",
          essenziell: 10.2,
          wichtig: 72.4,
          wenigerwichtig: 17.4,
          icon: Entsorg,
        },
        {
          branch: "Chemie/Ph., Grundst. In.",
          essenziell: 11,
          wichtig: 74,
          wenigerwichtig: 15,
          icon: Chemie,
        },
        {
          branch: "Elektrot./Maschin.b.",
          essenziell: 12,
          wichtig: 72,
          wenigerwichtig: 16,
          icon: Maschinenbau,
        },
        {
          branch: "Sonst. Verarb. Gew.",
          essenziell: 13,
          wichtig: 60,
          wenigerwichtig: 27,
          icon: SonstVerarb,
        },
        {
          branch: "IKT",
          essenziell: 17,
          wichtig: 60,
          wenigerwichtig: 23,
          icon: IKT,
        },
        {
          branch: "Großhandel",
          essenziell: 17,
          wichtig: 64,
          wenigerwichtig: 19,
          icon: Großhandel,
        },
        {
          branch: "Sonst. Dienstleist.",
          essenziell: 20,
          wichtig: 56,
          wenigerwichtig: 24,
          icon: SonstDienst,
        },
      ];

      x.legend = new am4charts.Legend();
      x.legend.position = "bottom";
      x.legend.dx = 11;
      x.legend.dy = 20;

      // Create axes
      let categoryAxis = x.yAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "branch";
      categoryAxis.renderer.grid.template.opacity = 0;
      categoryAxis.renderer.labels.template.dx = -70;

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
      x.language.locale["_decimalSeparator"] = ",";
      x.logo.disabled = true;

      var image = new am4core.Image();
      image.width = 35;
      image.height = 35;
      image.verticalCenter = "middle";
      image.horizontalCenter = "right";
      image.dx = -25;
      image.adapter.add("href", (href, target) => {
        if (target.dataItem) {
          return target.dataItem._dataContext.icon;
        }
        return href;
      });
      categoryAxis.dataItems.template.bullet = image;

      chart.current = x;

      return () => {
        x.dispose();
      };
    }
  }, [inViewport]);

  return (
    <div id="stackedbarchart" style={{ width: "100%", height: "600px" }} ref={forwardedRef}></div>
  );
}

export default handleViewport(Chart);
