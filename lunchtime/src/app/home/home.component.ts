import {Component, OnInit, ViewChild} from '@angular/core';
import {FoodOption} from "../models/foodOption";
import {BaseChartDirective} from "ng2-charts";
import {PieColor} from "app/models/pieColor";
import '../../../node_modules/chart.piecelabel.js/src/Chart.PieceLabel.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  @ViewChild(BaseChartDirective)
  public chart: BaseChartDirective;
  options: FoodOption[] = [];
  readyToSpin: boolean = true;
  pieColors: PieColor = new PieColor;
  pieData: number[] = [];
  pieLabels: string[] = [];
  pieType: string = 'pie';
  pieOptions: any =
    {
        responsive: true,
        legend: {
          display: false
        },
      pieceLabel: {
        mode: 'label',
        arc: true,
        position: 'border',
        fontSize: 18,
        fontStyle: 'bold',
        fontColor: '#ddd',
        fontFamily: '"Oxygen", cursive',
      },
        tooltips: {
          enabled: false
        }
    };

  constructor() {
    this.options.push((new FoodOption('Saffran', true, 'rgba(255, 155, 0, .45)',  'rgba(255, 155, 0, .7)')));
    this.options.push((new FoodOption('Dominos', true, 'rgba(0, 109, 255, .45)',  'rgba(0, 109, 255, .7)')));
    this.options.push((new FoodOption('Wok on',  true, 'rgba(204, 0, 0, .45)',    'rgba(204,0,0, .7)')));
    this.options.push((new FoodOption('Serrano', true, 'rgba(165, 90, 30, .45)',  'rgba(165, 90, 30, .7)')));
    this.options.push((new FoodOption('Subway',  true, 'rgba(0, 255, 150, .45)',  'rgba(0, 255, 150, .7)')));
    this.options.push((new FoodOption('Búllan',  true, 'rgba(255, 0, 0, .45)',    'rgba(255,0,0, .7)')));
    this.options.push((new FoodOption('Krónan',  true, 'rgba(255, 255, 0, .45)',  'rgba(255,255,0, .7)')));
    this.options.push((new FoodOption('Nova',    true, 'rgba(196, 24, 255, .45)', 'rgba(196, 24, 255, .7)')));

    for (let option of this.options) {
      this.pieLabels.push(option.name);
      this.pieColors.backgroundColor.push(option.color);
      this.pieColors.hoverBackgroundColor.push(option.hoverColor);
      this.pieData.push(1);
    }
  }

  spinToWin() {
    if (this.readyToSpin) {
      this.readyToSpin = false;
      let random = Math.random() * 1000 * 2 + 2500;
      this.chart.chart.options.animation.duration = random;
      this.chart.chart.options.rotation = Math.random() * 360;
      this.chart.chart.update();
      this.chart.chart.options.animation.duration = 1000;
      setTimeout(() => { this.readyToSpin = true; }, random);
    }
  }

  toggleOption(option: FoodOption) {
    if (option.active) {
      option.active = false;
      this.pieData[this.options.indexOf(option)] = 0;
      this.chart.chart.update();
    } else {
      option.active = true;
      this.pieData[this.options.indexOf(option)] = 1;
    }

    this.chart.chart.update();
  }
}
