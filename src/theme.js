import * as am4core from "@amcharts/amcharts4/core";

function am4themes_wdTheme(target) {
  if (target instanceof am4core.InterfaceColorSet) {
    target.setFor("text", am4core.color("#fff"));
  }
  if (target instanceof am4core.Container) {
    target.fontFamily = "IBM Plex Sans";
  }
  if (target instanceof am4core.ColorSet) {
    target.list = [am4core.color("#65737E"), am4core.color("#4F5B66"), am4core.color("#343D46")];
  }
}

export default am4themes_wdTheme;
