import { useLayoutEffect, useRef } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { buchHref } from "../../svg/svgHref";

am4core.useTheme(am4themes_animated);

function Chart1(props) {
  const chart = useRef(null);

  useLayoutEffect(() => {
    var x = am4core.create("chartdiv_sec6", am4charts.PieChart);

    // Let's cut a hole in our Pie chart the size of 40% the radius
    x.innerRadius = am4core.percent(40);

    // Add data
    x.data = [
      {
        Nutzen: "Nutzen Maschinelles Lernen und Beweisen",
        IKT: 59,
        Gesamtwirtschaft: 55,
      },
      {
        Nutzen: "Nutzen es nicht",
        IKT: 41,
        Gesamtwirtschaft: 45,
      },
    ];

    // Add and configure Series
    var pieSeries = x.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "IKT";
    pieSeries.dataFields.category = "Nutzen";
    pieSeries.slices.template.strokeWidth = 0;
    pieSeries.slices.template.tooltipText = "IKT: {IKT}";
    pieSeries.radius = am4core.percent(43);
    pieSeries.colors.list = [
      am4core.color("#EDE750"),
      am4core.color("rgba(165, 173, 180, 0.3)"), // Note: Here
    ];

    // Note: Here
    pieSeries.slices.template.propertyFields.stroke = am4core.color("#EDE750");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;
    pieSeries.slices.template.fillOpacity = 0.15;

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
    pieSeries2.slices.template.strokeWidth = 0;
    pieSeries2.slices.template.states.getKey("hover").properties.shiftRadius = 0;
    pieSeries2.slices.template.states.getKey("hover").properties.scale = 1.1;
    pieSeries2.labels.template.disabled = true;
    pieSeries2.ticks.template.disabled = true;
    pieSeries2.slices.template.tooltipText = "Gesamtwirtschaft: {Gesamtwirtschaft}";
    pieSeries2.colors.list = [
      am4core.color("#4F4FFE"),
      am4core.color("rgba(165, 173, 180, 0.3)"), // Note: Here
    ];

    // Note: Here
    pieSeries2.slices.template.propertyFields.stroke = am4core.color("rgb(0, 77, 136)");
    pieSeries2.slices.template.strokeWidth = 2;
    pieSeries2.slices.template.strokeOpacity = 1;
    pieSeries2.slices.template.fillOpacity = 0.15;

    let bullet = pieSeries.createChild(am4charts.Bullet);
    let image = bullet.createChild(am4core.Image);
    image.href = buchHref;
    image.width = 50;
    image.height = 50;
    image.horizontalCenter = "middle";
    image.verticalCenter = "middle";

    const slice1 = pieSeries.slices.template;
    slice1.states.getKey("hover").properties.scale = 1;
    slice1.states.getKey("active").properties.shiftRadius = 0;
    const slice2 = pieSeries2.slices.template;
    slice2.states.getKey("hover").properties.scale = 1;
    slice2.states.getKey("active").properties.shiftRadius = 0;

    pieSeries.tooltip.label.adapter.add("text", function (text, target) {
      if (target.dataItem && target.dataItem.values.value.percent === 41) {
        return "";
      } else {
        return text;
      }
    });

    pieSeries2.tooltip.label.adapter.add("text", function (text, target) {
      if (target.dataItem && target.dataItem.values.value.percent === 45) {
        return "";
      } else {
        return text;
      }
    });

    pieSeries.events.on("childadded", function (ev) {
      ev.target.slices.each(function (slice) {
        if (slice.dataItem.values.value.percent === 41) {
          slice.states.getKey("active").properties.shiftRadius = 0;
        }
      });
    });

    pieSeries2.events.on("childadded", function (ev) {
      ev.target.slices.each(function (slice) {
        if (slice.dataItem.values.value.percent === 45) {
          slice.states.getKey("active").properties.shiftRadius = 0;
        }
      });
    });

    let label = x.createChild(am4core.Label);
    label.text = "Maschinelles Lernen und Beweisen";
    label.align = "center";

    x.logo.disabled = "true";
    chart.current = x;
  }, []); // end am4core.ready()
  return <div id="chartdiv_sec6" style={{ width: "100%", height: "300px" }}></div>;
}

export default Chart1;
