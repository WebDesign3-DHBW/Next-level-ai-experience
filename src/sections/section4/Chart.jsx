import { useLayoutEffect, useRef } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import am4themes_wdTheme from '../../theme';
import Chemie from '../../svg/PhGrst.svg';
import Entsorg from '../../svg/EntsorgBgb.svg';
import Fahrzeugbau from '../../svg/Fahrzeugbau.svg';
import Finanzdienstleist from '../../svg/Finanzdienstleist.svg';
import Großhandel from '../../svg/Großhandel.svg';
import Gesamtwirtschaft from '../../svg/Gesamtwirthschaft.svg';
import IKT from '../../svg/IKT.svg';
import Maschinenbau from '../../svg/Maschinb.svg';
import SonstVerarb from '../../svg/SonstVerarbGew.svg';
import SonstDienst from '../../svg/SonstDienstleist.svg';
import UnternNaheDiesnt from '../../svg/UnternnaheDienstl.svg';
import VerkehrLogistik from '../../svg/VerkehrLogistik.svg';

am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_wdTheme);

function Chart() {
  const chart = useRef(null);

  useLayoutEffect(() => {
    var x = am4core.create('s4-stackedbarchart', am4charts.XYChart);

    x.paddingLeft = 50;
    x.maskBullets = false;

    // Add data
    x.data = [
      {
        branch: 'Gesamtwirtschaft',
        essenziell: 5.8,
        icon: Gesamtwirtschaft,
        color: am4core.color('#4F4FFE'),
      },
      {
        branch: 'Großhandel',
        essenziell: 1.0,
        icon: Großhandel,
        color: am4core.color('#FF00FF'),
      },
      {
        branch: 'Verkehr, Logistik',
        essenziell: 1.5,
        icon: VerkehrLogistik,
        color: am4core.color('#4CC8DD'),
      },
      {
        branch: 'Sonst. Dienstleist.',
        essenziell: 2.5,
        icon: SonstDienst,
        color: am4core.color('#4985D4'),
      },
      {
        branch: 'Sonst. Verarb. Gew.',
        essenziell: 3.3,
        icon: SonstVerarb,
        color: am4core.color('#E1AAFE'),
      },
      {
        branch: 'Ver-/Entsorg., Bg.b.',
        essenziell: 3.6,
        icon: Entsorg,
        color: am4core.color('#BB57FE'),
      },
      {
        branch: 'Chemie/Ph., Gr.st.',
        essenziell: 4.6,
        icon: Chemie,
        color: am4core.color('#0FAA94'),
      },
      {
        branch: 'Fahrzeugbau',
        essenziell: 5.1,
        icon: Fahrzeugbau,
        color: am4core.color('#FFF8F9'),
      },
      {
        branch: 'Elektrot./Maschin.b.',
        essenziell: 6.8,
        icon: Maschinenbau,
        color: am4core.color('#F09443'),
      },
      {
        branch: 'Untern.nahe Dienstl.',
        essenziell: 11.1,
        icon: UnternNaheDiesnt,
        color: am4core.color('#FA2662'),
      },
      {
        branch: 'Finanzdienstleist.',
        essenziell: 12.2,
        icon: Finanzdienstleist,
        color: am4core.color('#78DF6C'),
      },
      {
        branch: 'IKT',
        essenziell: 17.8,
        icon: IKT,
        color: am4core.color('#EDE750'),
      },
    ];

    // Create axes
    let categoryAxis = x.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'branch';
    categoryAxis.renderer.grid.template.opacity = 0;
    categoryAxis.renderer.labels.template.dx = -50;

    let valueAxis = x.xAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text =
      'Anteil der Unternehmen \n mit KI-Einsatz in % \n aller Unternehmen';
    valueAxis.min = 0;
    valueAxis.max = 20;
    valueAxis.renderer.grid.template.opacity = 0;
    valueAxis.renderer.ticks.template.strokeOpacity = 0.5;
    valueAxis.renderer.ticks.template.length = 10;
    valueAxis.renderer.line.strokeOpacity = 0.5;
    valueAxis.renderer.baseGrid.disabled = true;
    valueAxis.renderer.minGridDistance = 40;

    valueAxis.title.align = 'left';

    // Create series
    function createSeries(field, name) {
      let series = x.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueX = field;
      series.dataFields.categoryY = 'branch';
      series.stacked = true;
      series.name = name;

      series.columns.template.propertyFields.fill = 'color';
      series.columns.template.fillOpacity = 0.2;
      series.columns.template.propertyFields.stroke = 'color';
      series.columns.template.strokeWidth = 3;

      let labelBullet = series.bullets.push(new am4charts.LabelBullet());
      labelBullet.label.horizontalCenter = 'left';
      labelBullet.label.truncate = false;
      labelBullet.label.hideOversized = false;
      labelBullet.label.dx = 5;
      labelBullet.label.text = '{valueX}';
    }

    createSeries('essenziell', 'essenziell');

    var image = new am4core.Image();
    image.width = 35;
    image.height = 35;
    image.verticalCenter = 'middle';
    image.horizontalCenter = 'right';
    image.dx = -10;
    image.adapter.add('href', (href, target) => {
      if (target.dataItem) {
        return target.dataItem._dataContext.icon;
      }
      return href;
    });
    categoryAxis.dataItems.template.bullet = image;

    x.logo.disabled = true;
    chart.current = x;

    return () => {
      x.dispose();
    };
  }, []);
  return (
    <div id="s4-stackedbarchart" style={{ width: '100%', height: '650px' }}></div>
  );
}

export default Chart;
