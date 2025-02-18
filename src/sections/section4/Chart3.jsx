import { useLayoutEffect, useRef } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_wdTheme from "../../theme";
import handleViewport from "react-in-viewport";

am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_wdTheme);

function Chart3(props) {
  const chart = useRef(null);
  const { inViewport, forwardedRef } = props;

  useLayoutEffect(() => {
    if (inViewport) {
      var x = am4core.create("s43-stackedbarchart", am4charts.XYChart);

      x.paddingLeft = 35;
      x.maskBullets = false;

      // Add data
      x.data = [
        {
          branch: "Gesamtwirtschaft",
          essenziell: 0.31,
          color: am4core.color("#4F4FFE"),
        },
        {
          branch: "Großhandel",
          essenziell: 0.05,
          color: am4core.color("#FF00FF"),
        },
        {
          branch: "Verkehr, Logistik",
          essenziell: 0.05,
          color: am4core.color("#4CC8DD"),
        },
        {
          branch: "Sonst. Dienstleist.",
          essenziell: 0.1,
          color: am4core.color("#4985D4"),
        },
        {
          branch: "Sonst. Verarb. Gew.",
          essenziell: 0.12,
          color: am4core.color("#E1AAFE"),
        },
        {
          branch: "Ver-/Entsorg., Bg.b.",
          essenziell: 0.08,
          color: am4core.color("#BB57FE"),
        },
        {
          branch: "Chemie/Ph., Gr.st.",
          essenziell: 0.08,
          color: am4core.color("#0FAA94"),
        },
        {
          branch: "Fahrzeugbau",
          essenziell: 0.1,
          color: am4core.color("#FFF8F9"),
        },
        {
          branch: "Elektrot./Maschin.b.",
          essenziell: 0.35,
          color: am4core.color("#F09443"),
        },
        {
          branch: "Untern.nahe Dienstl.",
          essenziell: 0.88,
          color: am4core.color("#FA2662"),
        },
        {
          branch: "Finanzdienstleist.",
          essenziell: 0.28,
          color: am4core.color("#78DF6C"),
        },
        {
          branch: "IKT",
          essenziell: 1.51,
          color: am4core.color("#EDE750"),
        },
      ];

      // Create axes
      let categoryAxis = x.yAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "branch";
      categoryAxis.renderer.labels.template.disabled = true;
      categoryAxis.renderer.grid.template.opacity = 0;

      let valueAxis = x.xAxes.push(new am4charts.ValueAxis());
      valueAxis.title.text =
        "Anteil der hauptsächlich zu KI \n tätigen [bold #11A6B6]Personen[/] in % der \n Beschäftigten in allen Unternehmen";
      valueAxis.min = 0;
      valueAxis.max = 2.0;
      valueAxis.renderer.grid.template.opacity = 0;
      valueAxis.renderer.ticks.template.strokeOpacity = 0.5;
      valueAxis.renderer.ticks.template.length = 10;
      valueAxis.renderer.line.strokeOpacity = 0.5;
      valueAxis.renderer.baseGrid.disabled = true;
      valueAxis.renderer.minGridDistance = 40;

      valueAxis.title.align = "left";

      // Create series
      function createSeries(field, name) {
        let series = x.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueX = field;
        series.dataFields.categoryY = "branch";
        series.stacked = true;
        series.name = name;
        series.columns.template.height = am4core.percent(70);

        series.columns.template.propertyFields.fill = "color";
        series.columns.template.fillOpacity = 0.2;
        series.columns.template.propertyFields.stroke = "color";
        series.columns.template.strokeWidth = 3;

        let labelBullet = series.bullets.push(new am4charts.LabelBullet());
        labelBullet.label.horizontalCenter = "left";
        labelBullet.label.truncate = false;
        labelBullet.label.hideOversized = false;
        labelBullet.label.dx = 15;
        labelBullet.label.text = "{valueX}";
      }

      createSeries("essenziell", "essenziell");

      var image = new am4core.Image();
      image.width = 35;
      image.height = 35;
      image.verticalCenter = "middle";
      image.horizontalCenter = "right";
      image.dx = -10;
      image.adapter.add("href", (href, target) => {
        if (target.dataItem && target.dataItem.dataContext) {
          return target.dataItem.dataContext.icon;
        }
        return href;
      });
      categoryAxis.dataItems.template.bullet = image;

      x.logo.disabled = true;
      chart.current = x;

      return () => {
        x.dispose();
      };
    }
  }, [inViewport]);
  return (
    <div
      id="s43-stackedbarchart"
      style={{ width: "100%", height: "650px" }}
      ref={forwardedRef}
    ></div>
  );
}

export default handleViewport(Chart3);
