import { useLayoutEffect, useRef } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_wdTheme from "../../theme";
// import Chemie from "../../svg/Ph., Gr. st..svg";
import Entsorg from "../../svg/Entsorg, Bg.b..svg";
import Fahrzeugbau from "../../svg/Fahrzeugbau.svg";
import Finanzdienstleist from "../../svg/Finanzdienstleist..svg";
import Gesamtwirtschaft from "../../svg/Gesamtwirthschaft.svg";
import Großhandel from "../../svg/Großhandel.svg";
import IKT from "../../svg/IKT.svg";
import Maschinenbau from "../../svg/Maschin.b..svg";
import SonstVerarb from "../../svg/Sonst Verarb. Gew..svg";
import SonstDienst from "../../svg/Sonst. Dienstleist..svg";
import UnternNaheDiesnt from "../../svg/Untern. nahe. Dienstl..svg";
import VerkehrLogistik from "../../svg/Verkehr, Logistik.svg";
import { chemiePath } from "../../utils/svgPaths";
import handleViewport from "react-in-viewport";

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
      // dateAxis.min = "0";
      // dateAxis.max = "2020";
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
      // valueAxis.extraMin = 0.1;
      // valueAxis.extraMax = 0.1;
      valueAxis.strictMinMax = true;
      valueAxis.renderer.minLabelPosition = 0.01;
      valueAxis.renderer.line.strokeOpacity = 1;
      valueAxis.renderer.line.strokeWidth = 5;
      valueAxis.renderer.line.stroke = am4core.color("#004D88");

      const series1 = createSeries("Finanzdienstleist.", true, "#78DF6C", Finanzdienstleist);
      const series2 = createSeries("Chemie/Ph., Gr.st.", true, "#0FAA94", chemiePath);
      const series3 = createSeries("Elektrot./Maschin.b.", true, "#F09443", Maschinenbau);
      const series4 = createSeries("IKT", true, "#EDE750", IKT);
      const series5 = createSeries("Großhandel", true, "#FF00FF", Großhandel);
      const series6 = createSeries("Verkehr, Logistik", true, "#4CC8DD", VerkehrLogistik);
      const series7 = createSeries("Ver-/Entsorg., Bg.b.", true, "#BB57FE", Entsorg);
      const series8 = createSeries("Sonst. Verarb. Gew.", true, "#E1AAFE", SonstVerarb);
      const series9 = createSeries("Untern.nahe Dienstl.", true, "#FA2662", UnternNaheDiesnt);
      const series10 = createSeries("Sonst. Dienstleist.", true, "#4985D4", SonstDienst);
      const series11 = createSeries("Fahrzeugbau", true, "#FFF8F9", Fahrzeugbau);
      const series12 = createSeries("Gesamtwirtschaft", false, "#4F4FFE", Gesamtwirtschaft);

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
          customIcon: svg,
        };
        if (svg === chemiePath) {
          series.dummyData = {
            path: chemiePath,
          };
        }
        series.dataFields.valueY = name;
        series.dataFields.dateX = "year";
        series.name = name;
        series.strokeWidth = 3;
        series.stroke = am4core.color(color);
        const bullet = series.bullets.push(new am4charts.CircleBullet());
        bullet.fill = color;
        // series.tooltipText = "{name} in {dateX}: [bold]{valueY}%[/]";
        series.legendSettings.labelText = " ";
        series.hidden = hide;
        // series.legendSettings.valueText = "{valueY}";
        series.tooltip.getFillFromObject = false;
        series.tooltip.background.fill = color;

        series.dataFields.customValue = "year";

        var segment = series.segments.template;
        segment.interactionsEnabled = true;

        var hoverState = segment.states.create("hover");
        hoverState.properties.strokeWidth = 6;

        var dimmed = segment.states.create("dimmed");
        dimmed.properties.stroke = am4core.color("#333");

        // segment.events.on("over", function (event) {
        //   processOver(event.target.parent.parent.parent);
        // });

        // segment.events.on("out", function (event) {
        //   processOut(event.target.parent.parent.parent);
        // });

        const data = [
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
          {
            year: "2020",
          },
        ];

        //GUT
        // series.events.on("beforedatavalidated", function (ev) {
        //   var source = ev.target.data;
        //   console.log(source);
        //   if (source.year) {
        //     ev.target.data.year = "vor 2010";
        //   }
        // });

        series.adapter.add("tooltipText", function (ev, target) {
          let text = "[bold]{dateX}[/]\n";

          // console.log("data", ev.target.data);
          // var firstItem = series.dataItems.getIndex(0);

          // console.log("year!", firstItem.dateX.getFullYear());

          // if (
          //   dataItem.year.getTime() ==
          //   am4core.time.round(new Date(dataItem.date.getTime()), "year").getTime()
          // ) {
          //   console.log("luli");
          // }

          x.series.each(function (item, index) {
            // console.log("dateX", item.dataItem.dates);
            // console.log("firstIndex", series.dataItems.getIndex(0));
            // console.log("item", item.dataItems.getIndex(0));

            // if (series.dataItems.getIndex(0).dateX.getFullYear() === "2010")
            // series.dataItems.each(function (item) {
            // if (item.dateX.getFullYear() === "2010") {
            //   series.tooltipText = "blubb";
            // }
            // });

            // console.log(
            //   "year",
            //   firstItem.dateX.getFullYear()
            //   // chart.addData(
            //   //   { date: new Date(lastdataItem.dateX.getTime() + 1000), value: visits },
            //   //   1
            // );

            // Buggy
            if (
              item.tooltipDataItem.dataContext &&
              item.tooltipDataItem.dataContext.year === "2010" &&
              !item.isHidden
            ) {
              // let text = "[bold]vor {dateX}[/]\n";
              text = text.replace(/^/, "[bold]vor [/]");
            }
            if (!item.isHidden) {
              text +=
                "[" +
                item.stroke.hex +
                "]●[/] " +
                item.name +
                ": {" +
                item.dataFields.valueY +
                "}\n";
            }
            // // var dataItem = target.dataItem.getValue("2010");
            // console.log(item.dataItem);
            // console.log(item.dataItems.getIndex(0));

            // console.log("index", index);
            // if (index == 0) {
            //   console.log("index", index);
            //   text = text.replace(/^/, "vor ");
            // }
          });

          return text;
        });

        // series.adapter.add("tooltipText", function (ev) {
        //   let text = "[bold]{dateX}[/]\n";

        // x.series.each(function (item) {
        // if (!item.isHidden) {
        //   text +=
        //     "[" +
        //     item.stroke.hex +
        //     "]●[/] " +
        //     item.name +
        //     ": {" +
        //     item.dataFields.valueY +
        //     "}\n";
        // }
        // if (item.dataItems.getIndex(0).dateX.getFullYear() === "2010" && !item.isHidden) {
        //   text = text.replace(/^/, "vor ");
        // }
        // });

        //   return text;
        // });

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

      /* Remove square from marker template */
      var marker = x.legend.markers.template;
      marker.disposeChildren();
      marker.width = 40;
      marker.height = 40;

      // Add custom image instead
      const customMarker = marker.createChild(am4core.Image);
      customMarker.width = 40;
      customMarker.height = 40;
      customMarker.verticalCenter = "top";
      customMarker.horizontalCenter = "left";
      customMarker.adapter.add("href", function (href, target) {
        if (
          target.dataItem &&
          target.dataItem.dataContext &&
          target.dataItem.dataContext.dummyData
        ) {
          return target.dataItem.dataContext.dummyData.customIcon;
        } else {
          return href;
        }
      });

      customMarker.propertyFields.fill = "fill";

      customMarker.adapter.add("dx", function (dx, target) {
        target.path = target.dataItem.dataContext.dummyData.path;
        return dx;
      });

      // x.legend.itemContainers.template.events.on("over", function (event) {
      //   processOver(event.target.dataItem.dataContext);
      // });
      // x.legend.itemContainers.template.events.on("out", function (event) {
      //   processOut(event.target.dataItem.dataContext);
      // });

      // function processOver(hoveredSeries) {
      //   hoveredSeries.toFront();

      //   hoveredSeries.segments.each(function (segment) {
      //     segment.setState("hover");
      //   });

      //   x.series.each(function (series) {
      //     if (series !== hoveredSeries) {
      //       series.segments.each(function (segment) {
      //         segment.setState("dimmed");
      //       });
      //       series.bulletsContainer.setState("dimmed");
      //     }
      //   });
      // }

      // function processOut(hoveredSeries) {
      //   x.series.each(function (series) {
      //     series.segments.each(function (segment) {
      //       segment.setState("default");
      //     });
      //     series.bulletsContainer.setState("default");
      //   });
      // }

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
