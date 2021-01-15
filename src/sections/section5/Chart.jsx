import { useLayoutEffect, useRef } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_wdTheme from "../../theme";
import {
  chemiePath,
  FinzanzPath,
  MaschinenbPath,
  IKTPath,
  GrosshPath,
  VerkehrPath,
  EntsorgPath,
  SonstVerarbGewPath,
  UnternnaheDienstlPath,
  SonstDienstlPath,
  FahrzeugbauPath,
  GesamtwirtschaftPath,
} from "../../utils/svgPaths";
import handleViewport from "react-in-viewport";

// am4core.options.autoSetClassName = true;

am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_wdTheme);

function Chart(props) {
  const chart = useRef(null);
  const { inViewport, forwardedRef } = props;

  useLayoutEffect(() => {
    if (inViewport) {
      var x = am4core.create("ersterEinsatz", am4charts.XYChart);
      x.dateFormatter.dateFormat = "yyyy";

      x.paddingRight = 20;

      // DateAxis
      var dateAxis = x.xAxes.push(new am4charts.DateAxis());
      dateAxis.title.text = "Jahr";
      dateAxis.renderer.line.strokeOpacity = 1;
      dateAxis.renderer.line.strokeWidth = 5;
      dateAxis.renderer.line.stroke = am4core.color("#004D88");
      dateAxis.strictMinMax = true;
      dateAxis.tooltipDateFormat = "yyyy";
      dateAxis.extraTooltipPrecision = 2;

      dateAxis.gridIntervals.setAll([{ timeUnit: "year", count: 1 }]);
      // dateAxis.skipEmptyPeriods = true;
      dateAxis.renderer.labels.template.adapter.add("text", (text, label) => {
        if (text === "2010") {
          return "vor " + text;
        }
        return text;
      });

      // ValueAxis
      var valueAxis = x.yAxes.push(new am4charts.ValueAxis());
      valueAxis.title.text = "Prozent";
      valueAxis.min = 0;
      valueAxis.max = 105;
      valueAxis.strictMinMax = true;
      valueAxis.renderer.minLabelPosition = 0.01;
      valueAxis.renderer.line.strokeOpacity = 1;
      valueAxis.renderer.line.strokeWidth = 5;
      valueAxis.renderer.line.stroke = am4core.color("#004D88");

      const series2 = createSeries("Chemie/Pharma, Grundstoffe", true, "#0FAA94", chemiePath);
      const series3 = createSeries("Elektrotechnik, Maschinenbau", true, "#F09443", MaschinenbPath);
      const series11 = createSeries("Fahrzeugbau", true, "#FFF8F9", FahrzeugbauPath);
      const series1 = createSeries("Finanzdienstleistungen", true, "#78DF6C", FinzanzPath);
      const series5 = createSeries("Großhandel", true, "#FF00FF", GrosshPath);
      const series4 = createSeries("IKT", true, "#EDE750", IKTPath);
      const series10 = createSeries("Sonstige Dienstleistungen", true, "#4985D4", SonstDienstlPath);
      const series8 = createSeries(
        "Sonstiges Verarbeitendes Gewerbe",
        true,
        "#E1AAFE",
        SonstVerarbGewPath
      );
      const series9 = createSeries(
        "Unternehmensnahe Dienstleistungen",
        true,
        "#FA2662",
        UnternnaheDienstlPath
      );
      const series6 = createSeries("Verkehr und Logistik", true, "#4CC8DD", VerkehrPath);
      const series7 = createSeries("Ver- und Entsorgung, Bergbau", true, "#BB57FE", EntsorgPath);
      const series12 = createSeries("Gesamtwirtschaft", false, "#4F4FFE", GesamtwirtschaftPath);

      // Add chart cursor
      x.cursor = new am4charts.XYCursor();
      x.cursor.fullWidthLineX = true;
      x.cursor.lineX.strokeWidth = 0;
      x.cursor.lineX.fill = am4core.color("#8F3985");
      x.cursor.lineX.fillOpacity = 0.1;
      x.cursor.behavior = "zoomXY";
      x.cursor.maxTooltipDistance = 3;
      x.cursor.snapToSeries = [
        series1,
        series2,
        series3,
        series4,
        series5,
        series6,
        series7,
        series8,
        series9,
        series10,
        series11,
        series12,
      ];

      // Create series
      function createSeries(name, hide, color, svg) {
        var series = x.series.push(new am4charts.LineSeries());
        series.dummyData = {
          path: svg,
          legendTooltip: name,
        };
        series.dataFields.valueY = name;
        series.dataFields.dateX = "year";
        series.name = name;
        series.strokeWidth = 3;
        series.stroke = am4core.color(color);
        series.fill = am4core.color(color);
        const bullet = series.bullets.push(new am4charts.CircleBullet());
        bullet.fill = color;
        series.legendSettings.labelText = " ";
        series.hidden = hide;

        series.id = name + "-Id";
        series.tooltip.getFillFromObject = false;
        series.tooltip.background.fill = color;

        series.dataFields.customValue = "year";

        var segment = series.segments.template;
        segment.interactionsEnabled = true;

        var hoverState = segment.states.create("hover");
        hoverState.properties.strokeWidth = 6;

        var dimmed = segment.states.create("dimmed");
        dimmed.properties.stroke = am4core.color("#333");

        const data = [
          {
            year: "2010",
            "Chemie/Pharma, Grundstoffe": 11,
            Finanzdienstleistungen: 6,
            "Elektrotechnik, Maschinenbau": 17,
            IKT: 9,
            Großhandel: 8,
            "Verkehr und Logistik": 20,
            "Ver- und Entsorgung, Bergbau": 12,
            "Sonstiges Verarbeitendes Gewerbe": 35,
            "Unternehmensnahe Dienstleistungen": 24,
            "Sonstige Dienstleistungen": 43,
            Fahrzeugbau: 17,
            Gesamtwirtschaft: 20,
          },
          {
            year: "2015",
            "Chemie/Pharma, Grundstoffe": 11 + 14,
            Finanzdienstleistungen: 6 + 19,
            "Elektrotechnik, Maschinenbau": 17 + 15,
            IKT: 9 + 26,
            Großhandel: 8 + 30,
            "Verkehr und Logistik": 20 + 19,
            "Ver- und Entsorgung, Bergbau": 12 + 31,
            "Sonstiges Verarbeitendes Gewerbe": 35 + 9,
            "Unternehmensnahe Dienstleistungen": 24 + 20,
            "Sonstige Dienstleistungen": 43 + 11,
            Fahrzeugbau: 17 + 39,
            Gesamtwirtschaft: 20 + 20,
          },
          {
            year: "2017",
            "Chemie/Pharma, Grundstoffe": 11 + 14 + 51,
            Finanzdienstleistungen: 6 + 19 + 38,
            "Elektrotechnik, Maschinenbau": 17 + 15 + 41,
            IKT: 9 + 26 + 39,
            Großhandel: 8 + 30 + 41,
            "Verkehr und Logistik": 20 + 19 + 16,
            "Ver- und Entsorgung, Bergbau": 12 + 31 + 31,
            "Sonstiges Verarbeitendes Gewerbe": 35 + 9 + 35,
            "Unternehmensnahe Dienstleistungen": 24 + 20 + 29,
            "Sonstige Dienstleistungen": 43 + 11 + 14,
            Fahrzeugbau: 17 + 39 + 26,
            Gesamtwirtschaft: 20 + 20 + 33,
          },
          {
            year: "2019",
            "Chemie/Pharma, Grundstoffe": 11 + 14 + 51 + 24,
            Finanzdienstleistungen: 6 + 19 + 38 + 37,
            "Elektrotechnik, Maschinenbau": 17 + 15 + 41 + 27,
            IKT: 9 + 26 + 39 + 26,
            Großhandel: 8 + 30 + 41 + 21,
            "Verkehr und Logistik": 20 + 19 + 16 + 45,
            "Ver- und Entsorgung, Bergbau": 12 + 31 + 31 + 26,
            "Sonstiges Verarbeitendes Gewerbe": 35 + 9 + 35 + 21,
            "Unternehmensnahe Dienstleistungen": 24 + 20 + 29 + 27,
            "Sonstige Dienstleistungen": 43 + 11 + 14 + 32,
            Fahrzeugbau: 17 + 39 + 26 + 18,
            Gesamtwirtschaft: 20 + 20 + 33 + 27,
          },
          {
            year: "2020",
          },
        ];

        //  GUT
        // series.events.on("beforedatavalidated", function (ev) {
        //   var source = ev.target.data;
        //   console.log(source);
        //   if (source.year) {
        //     ev.target.data.year = "vor 2010";
        //   }
        // });

        series.adapter.add("tooltipText", function (ev, target) {
          let text = "[bold]{dateX}[/]\n";

          x.series.each(function (item, index) {
            // Buggy
            // if (
            //   item.tooltipDataItem.dataContext &&
            //   item.tooltipDataItem.dataContext.year === "2010" &&
            //   !item.isHidden
            // ) {
            //   // let text = "[bold]vor {dateX}[/]\n";
            //   text = text.replace(/^/, "[bold]vor [/]");
            // }

            // if (item.dataItems.getIndex(0).dateX.getFullYear() === "2010" && !item.isHidden) {
            //   text = text.replace(/^/, "vor ");
            // }
            if (!item.isHidden) {
              text +=
                "[" +
                item.stroke.hex +
                "]●[/] " +
                item.name +
                ": {" +
                item.dataFields.valueY +
                "} %\n";
            }
          });

          return text;
        });

        series.tooltip.getFillFromObject = false;
        series.tooltip.background.fill = am4core.color("#65737E");
        series.tooltip.background.stroke = am4core.color("#65737E");
        series.tooltip.label.fill = am4core.color("#fff");

        series.data = data;

        return series;
      }

      /* Create legend and enable default markers */
      x.legend = new am4charts.Legend();
      x.legend.useDefaultMarker = true;
      x.legend.itemContainers.template.tooltipText = "{dataContext.dummyData.legendTooltip}";
      x.legend.paddingLeft = 50;
      x.legend.marginTop = 20;

      x.legend.align = "middle";

      /* Remove square from marker template */
      var marker = x.legend.markers.template;
      marker.disposeChildren();
      // marker.paddingRight = 2;
      marker.marginRight = 10;

      // Add custom image instead
      const customMarker = marker.createChild(am4core.Image);

      customMarker.strokeWidth = 0;
      customMarker.scale = 0.7;

      customMarker.propertyFields.fill = "fill";

      customMarker.adapter.add("dx", function (dx, target) {
        target.path = target.dataItem.dataContext.dummyData.path;
        target.align = "center";
        target.valign = "center";
        target.y = -15;

        return dx;
      });

      x.logo.disabled = true;
      chart.current = x;

      return () => {
        x.dispose();
      };
    }
  }, [inViewport]);
  return (
    <div id="ersterEinsatz" style={{ width: "100%", height: "600px" }} ref={forwardedRef}></div>
  );
}

export default handleViewport(Chart);
