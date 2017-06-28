import {Component, ViewChild} from '@angular/core';
import {FoodOption} from "../models/foodOption";
import {FoodChart} from "../models/foodChart";
import {BaseChartDirective} from "ng2-charts";
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
  foodChart: FoodChart = new FoodChart();
    

  constructor() {
    this.foodChart.foodOptions.push((new FoodOption('Saffran', 1, 'rgba(255, 155, 0, .45)',  'rgba(255, 155, 0, .7)')));
    this.foodChart.foodOptions.push((new FoodOption('Dominos', 1, 'rgba(0, 109, 255, .45)',  'rgba(0, 109, 255, .7)')));
    this.foodChart.foodOptions.push((new FoodOption('Wok on',  1, 'rgba(204, 0, 0, .45)',    'rgba(204,0,0, .7)')));
    this.foodChart.foodOptions.push((new FoodOption('Serrano', 1, 'rgba(165, 90, 30, .45)',  'rgba(165, 90, 30, .7)')));
    this.foodChart.foodOptions.push((new FoodOption('Subway',  1, 'rgba(0, 255, 150, .45)',  'rgba(0, 255, 150, .7)')));
    this.foodChart.foodOptions.push((new FoodOption('Búllan',  1, 'rgba(255, 0, 0, .45)',    'rgba(255,0,0, .7)')));
    this.foodChart.foodOptions.push((new FoodOption('Krónan',  1, 'rgba(255, 255, 0, .45)',  'rgba(255,255,0, .7)')));
    this.foodChart.foodOptions.push((new FoodOption('Nova',    1, 'rgba(196, 24, 255, .45)', 'rgba(196, 24, 255, .7)')));
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

  updateOptionValue(option: FoodOption, increase: true) {
    if (increase) option.value += 1;
    else if (option.value > 0) option.value -= 1;

    this.updateData();
    this.chart.chart.update();
  }

  updateData() {
    this.foodChart.pieLabels = this.foodChart.foodOptions.map(option => option.name);
    this.foodChart.pieData = this.foodChart.foodOptions.map(option => option.value);
    this.foodChart.pieData = this.foodChart.foodOptions.map(option => option.value);
    this.foodChart.pieColors[0] = {backgroundColor: this.foodChart.foodOptions.map(option => option.color)};
    this.foodChart.pieColors[1] = {hoverBackgroundColor: this.foodChart.foodOptions.map(option => option.hoverColor)};
  }
}
