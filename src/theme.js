import * as am4core from "@amcharts/amcharts4/core";

function am4themes_wdTheme(target) {
  if (target instanceof am4core.InterfaceColorSet) {
    target.setFor("text", am4core.color("#fff"));
  }
  if (target instanceof am4core.Container) {
    target.fontFamily = "IBM Plex Sans";
  }
  if (target instanceof am4core.ColorSet) {
    target.list = [am4core.color("#11A6B6"), am4core.color("#227AA4"), am4core.color("#004D88")];
  }
}

export default am4themes_wdTheme;
