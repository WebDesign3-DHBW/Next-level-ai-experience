import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_wdTheme from "../../theme";

am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_wdTheme);

function Chart2() {
    am4core.ready(function() {
      
      // Create chart instance
      var chart = am4core.create("chartdiv_sec7_2", am4charts.PieChart);
      
      // Let's cut a hole in our Pie chart the size of 40% the radius
      chart.innerRadius = am4core.percent(40);
      
      // Add data
      chart.data = [{
        "Nutzen": "Nutzen Automatisierung von Prozessen",
        "IKT": 54,
        "Gesamtwirtschaft": 56

      }, {
        "Nutzen": "Nutzen es nicht",
        "IKT": 46,
        "Gesamtwirtschaft": 44
      }

    ];
      
      // Add and configure Series
      var pieSeries = chart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = "IKT";
      pieSeries.dataFields.category = "Nutzen";
      pieSeries.slices.template.strokeWidth = 0;
      pieSeries.slices.template.tooltipText = "IKT: {IKT}";
      pieSeries.radius = am4core.percent(43);
      pieSeries.colors.list = [
        am4core.color("#EDE750"),
        am4core.color("rgba(0, 77, 136, 0.3)")]
      
      // Disabling labels and ticks on inner circle
      pieSeries.labels.template.disabled = true;
      pieSeries.ticks.template.disabled = true;
      
      // Disable sliding out of slices
      pieSeries.slices.template.states.getKey("hover").properties.shiftRadius = 0;
      pieSeries.slices.template.states.getKey("hover").properties.scale = 0.9;
      
      // Add second series
      var pieSeries2 = chart.series.push(new am4charts.PieSeries());
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
        am4core.color("rgba(0, 77, 136, 0.3)")]
      
      let label = chart.createChild(am4core.Label);
      label.text = "Automatisierung von Prozessen";
      label.align = "center";

      let bullet = pieSeries.createChild(am4charts.Bullet);
      let image = bullet.createChild(am4core.Image);
      image.href = "../../svg/Buch.svg";
      image.width = 30;
      image.height = 30;
      image.horizontalCenter = "middle";
      image.verticalCenter = "middle";

      chart.logo.disabled = "true";

      }); // end am4core.ready()
  return <div id="chartdiv_sec7_2" style={{ width: "100%", height: "300px" }}></div>;
  }
  
  export default Chart2;
