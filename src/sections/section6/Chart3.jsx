import { useLayoutEffect, useRef } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import handleViewport from "react-in-viewport";
import { brainHref } from "../../svg/svgHref";

am4core.useTheme(am4themes_animated);

function Chart3(props) {
  const chart = useRef(null);
  const { inViewport, forwardedRef } = props;

  useLayoutEffect(() => {
    if (inViewport) {
      // Create chart instance
      var x = am4core.create("chartdiv_sec6_3", am4charts.PieChart);

      // Let's cut a hole in our Pie chart the size of 40% the radius
      x.innerRadius = am4core.percent(40);

      // Add data
      x.data = [
        {
          Nutzen: "Nutzen Wissensbasierte Systeme",
          IKT: 55,
          Gesamtwirtschaft: 46,
        },
        {
          Nutzen: "Nutzen es nicht",
          IKT: 45,
          Gesamtwirtschaft: 54,
        },
      ];

      // Add and configure Series
      var pieSeries = x.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = "IKT";
      pieSeries.dataFields.category = "Nutzen";
      pieSeries.slices.template.stroke = am4core.color("#fff");
      pieSeries.slices.template.strokeWidth = 0;
      pieSeries.slices.template.tooltipText = "IKT: {IKT}";
      pieSeries.radius = am4core.percent(43);
      pieSeries.colors.list = [am4core.color("#EDE750"), am4core.color("rgba(0, 77, 136, 0.3)")];

      // Disabling labels and ticks on inner circle
      pieSeries.labels.template.disabled = true;
      pieSeries.ticks.template.disabled = true;

      // Disable sliding out of slices
      pieSeries.slices.template.states.getKey("hover").properties.shiftRadius = 0;
      pieSeries.slices.template.states.getKey("hover").properties.scale = 0.9;

      // Add second series
      var pieSeries2 = x.series.push(new am4charts.PieSeries());
      pieSeries2.dataFields.value = "Gesamtwirtschaft";
      pieSeries2.dataFields.category = "Nutzen";
      pieSeries2.slices.template.stroke = am4core.color("#fff");
      pieSeries2.slices.template.strokeWidth = 0;
      pieSeries2.slices.template.states.getKey("hover").properties.shiftRadius = 0;
      pieSeries2.slices.template.states.getKey("hover").properties.scale = 1.1;
      pieSeries2.labels.template.disabled = true;
      pieSeries2.ticks.template.disabled = true;
      pieSeries2.slices.template.tooltipText = "Gesamtwirtschaft: {Gesamtwirtschaft}";
      pieSeries2.colors.list = [am4core.color("#4F4FFE"), am4core.color("rgba(0, 77, 136, 0.3)")];

      let label = x.createChild(am4core.Label);
      label.text = "Wissensbasierte Systeme";
      label.align = "center";

      let bullet = pieSeries.createChild(am4charts.Bullet);
      let image = bullet.createChild(am4core.Image);
      image.href = brainHref;
      image.width = 50;
      image.height = 50;
      image.horizontalCenter = "middle";
      image.verticalCenter = "middle";

      pieSeries.tooltip.label.adapter.add("text", function (text, target) {
        if (target.dataItem && target.dataItem.values.value.percent === 45) {
          return "";
        } else {
          return text;
        }
      });

      pieSeries2.tooltip.label.adapter.add("text", function (text, target) {
        if (target.dataItem && target.dataItem.values.value.percent === 54) {
          return "";
        } else {
          return text;
        }
      });

      pieSeries.events.on("datavalidated", function (ev) {
        ev.target.slices.each(function (slice) {
          console.log("test", slice.dataItem.values.value.percent);
          slice.states.getKey("hover").properties.scale = 1;
          if (slice.dataItem.values.value.percent === 45) {
            slice.states.getKey("active").properties.shiftRadius = 0;
          }
        });
      });

      pieSeries2.events.on("datavalidated", function (ev) {
        ev.target.slices.each(function (slice) {
          slice.states.getKey("hover").properties.scale = 1;
          if (slice.dataItem.values.value.percent === 54) {
            slice.states.getKey("active").properties.shiftRadius = 0;
          }
        });
      });

      x.logo.disabled = true;
      chart.current = x;
    }
  }, [inViewport]); // end am4core.ready()
  return (
    <div id="chartdiv_sec6_3" style={{ width: "100%", height: "300px" }} ref={forwardedRef}></div>
  );
}

export default handleViewport(Chart3);
