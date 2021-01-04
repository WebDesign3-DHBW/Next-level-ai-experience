import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_wdTheme from "../../theme";

am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_wdTheme);

function Chart3() {
    am4core.ready(function() {
      
      // Create chart instance
      var chart = am4core.create("chartdiv_sec6_3", am4charts.PieChart);
      
      // Let's cut a hole in our Pie chart the size of 40% the radius
      chart.innerRadius = am4core.percent(40);
      
      // Add data
      chart.data = [{
        "Nutzen": "Nutzen Wissensbasierte Systeme",
        "IKT": 55,
        "Gesamtwirtschaft": 46

      }, {
        "Nutzen": "Nutzen es nicht",
        "IKT": 45,
        "Gesamtwirtschaft": 54
      }

    ];
      
      // Add and configure Series
      var pieSeries = chart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = "IKT";
      pieSeries.dataFields.category = "Nutzen";
      pieSeries.slices.template.stroke = am4core.color("#fff");
      pieSeries.slices.template.strokeWidth = 2;
      pieSeries.slices.template.strokeOpacity = 1;
      
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
      pieSeries2.slices.template.stroke = am4core.color("#fff");
      pieSeries2.slices.template.strokeWidth = 2;
      pieSeries2.slices.template.strokeOpacity = 1;
      pieSeries2.slices.template.states.getKey("hover").properties.shiftRadius = 0;
      pieSeries2.slices.template.states.getKey("hover").properties.scale = 1.1;
      
      let title = chart.titles.create();
      title.text = "Wissensbasierte Systeme";
      title.marginBottom = "5";
      title.marginTop = "20";

      }); // end am4core.ready()
  return <div id="chartdiv_sec6_3" style={{ width: "100%", height: "300px" }}></div>;
  }
  
  export default Chart3;