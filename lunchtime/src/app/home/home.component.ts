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
  activeChart: FoodChart = new FoodChart();  
  foodCharts: FoodChart[] = [this.activeChart];

  constructor() {
    this.activeChart.foodOptions.push((new FoodOption('Saffran', 1, 'rgba(255, 155, 0, .45)',  'rgba(255, 155, 0, .7)')));
    this.activeChart.foodOptions.push((new FoodOption('Dominos', 1, 'rgba(0, 109, 255, .45)',  'rgba(0, 109, 255, .7)')));
    this.activeChart.foodOptions.push((new FoodOption('Wok on',  1, 'rgba(204, 0, 0, .45)',    'rgba(204,0,0, .7)')));
    this.activeChart.foodOptions.push((new FoodOption('Serrano', 1, 'rgba(165, 90, 30, .45)',  'rgba(165, 90, 30, .7)')));
    this.activeChart.foodOptions.push((new FoodOption('Subway',  1, 'rgba(0, 255, 150, .45)',  'rgba(0, 255, 150, .7)')));
    this.activeChart.foodOptions.push((new FoodOption('Búllan',  1, 'rgba(255, 0, 0, .45)',    'rgba(255,0,0, .7)')));
    this.activeChart.foodOptions.push((new FoodOption('Krónan',  1, 'rgba(255, 255, 0, .45)',  'rgba(255,255,0, .7)')));
    this.activeChart.foodOptions.push((new FoodOption('Nova',    1, 'rgba(196, 24, 255, .45)', 'rgba(196, 24, 255, .7)')));
    this.updateData(this.activeChart);
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

    this.updateData(this.activeChart);
    this.chart.chart.update();
  }

  updateData(chart: FoodChart) {
    console.log('chart: ', chart);
    chart.pieLabels = chart.foodOptions.map(option => option.name);
    chart.pieData = chart.foodOptions.map(option => option.value);
    chart.pieColors[0] = {backgroundColor: chart.foodOptions.map(option => option.color)};
    chart.pieColors[1] = {hoverBackgroundColor: chart.foodOptions.map(option => option.hoverColor)};
    console.log('after: ', chart);
    this.activeChart = chart;
  }

  makeNewChart() {
    let newChart: FoodChart = new FoodChart();
    newChart.foodOptions.push((new FoodOption('Dominos',  1, 'rgba(0, 109, 255, .45)',  'rgba(0, 109, 255, .7)')));
    newChart.foodOptions.push((new FoodOption('DJ Grill', 1, 'rgba(204, 0, 0, .45)',    'rgba(204,0,0, .7)')));
    newChart.foodOptions.push((new FoodOption('Serrano',  1, 'rgba(165, 90, 30, .45)',  'rgba(165, 90, 30, .7)')));
    newChart.foodOptions.push((new FoodOption('Subway',   1, 'rgba(0, 255, 150, .45)',  'rgba(0, 255, 150, .7)')));
    newChart.foodOptions.push((new FoodOption('Bónus',    1, 'rgba(255, 255, 0, .45)',  'rgba(255,255,0, .7)')));
    newChart.foodOptions.push((new FoodOption('Sushi',    1, 'rgba(225, 225, 225, .45)',  'rgba(225,225,225, .7)')));
    newChart.foodOptions.push((new FoodOption('Nova',     1, 'rgba(196, 24, 255, .45)', 'rgba(196, 24, 255, .7)')));
    newChart.foodOptions.push((new FoodOption('Greifinn', 1, 'rgba(33, 33, 33, .45)', 'rgba(33, 33, 33, .7)')));
    
    this.foodCharts.push(newChart);
    this.updateData(newChart);
    setTimeout(() => {this.chart.refresh();}, 1)
    
  }

  switchChart(increase: boolean) {
    if (increase) {
        if (this.foodCharts.indexOf(this.activeChart) < this.foodCharts.length - 1) {
          this.updateData(this.foodCharts[this.foodCharts.indexOf(this.activeChart) + 1]);
        } else this.updateData(this.foodCharts[0]);
    }
    else {
      if (this.foodCharts.indexOf(this.activeChart) > 0) {
        this.updateData(this.foodCharts[this.foodCharts.indexOf(this.activeChart) - 1]);
      } else this.updateData(this.foodCharts[this.foodCharts.length - 1]);
    }
    setTimeout(() => {this.chart.refresh();}, 1)
  } 
}
