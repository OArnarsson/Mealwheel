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

  pieColors: any[] = [];
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
    this.options.push((new FoodOption('Saffran', 1, 'rgba(255, 155, 0, .45)',  'rgba(255, 155, 0, .7)')));
    this.options.push((new FoodOption('Dominos', 1, 'rgba(0, 109, 255, .45)',  'rgba(0, 109, 255, .7)')));
    this.options.push((new FoodOption('Wok on',  1, 'rgba(204, 0, 0, .45)',    'rgba(204,0,0, .7)')));
    this.options.push((new FoodOption('Serrano', 1, 'rgba(165, 90, 30, .45)',  'rgba(165, 90, 30, .7)')));
    this.options.push((new FoodOption('Subway',  1, 'rgba(0, 255, 150, .45)',  'rgba(0, 255, 150, .7)')));
    this.options.push((new FoodOption('Búllan',  1, 'rgba(255, 0, 0, .45)',    'rgba(255,0,0, .7)')));
    this.options.push((new FoodOption('Krónan',  1, 'rgba(255, 255, 0, .45)',  'rgba(255,255,0, .7)')));
    this.options.push((new FoodOption('Nova',    1, 'rgba(196, 24, 255, .45)', 'rgba(196, 24, 255, .7)')));
    this.updateData();
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
    if (option.value > 0) option.value -= 1;
    else option.value += 1;

    this.updateData();
    this.chart.chart.update();
  }

  updateData() {
    this.pieLabels = this.options.map(option => option.name);
    this.pieData = this.options.map(option => option.value);
    this.pieColors[0] = {backgroundColor: this.options.map(option => option.color)};
    this.pieColors[1] = {hoverBackgroundColor: this.options.map(option => option.hoverColor)};
  }
}
