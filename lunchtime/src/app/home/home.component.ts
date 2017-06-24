import {Component, OnInit, ViewChild} from '@angular/core';
import {FoodOption} from "../models/foodOption";
import {BaseChartDirective} from "ng2-charts";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  @ViewChild(BaseChartDirective)
  public chart: BaseChartDirective;
  options: FoodOption[];
  readyToSpin: boolean;
  pieData: number[];
  pieLabels: string[];
  pieType: string = 'pie';

  constructor() {
    this.readyToSpin = true;
    this.options = [];
    this.pieData = [];
    this.pieLabels = [];
    this.options.push(new FoodOption('Saffran'));
    this.options.push(new FoodOption('Wok on'));
    this.options.push(new FoodOption('Subway'));
    this.options.push(new FoodOption('Búllan'));
    this.options.push(new FoodOption('Serrano'));
    this.options.push(new FoodOption('Dominos'));
    this.options.push(new FoodOption('Krónan'));
    this.options.push(new FoodOption('Nova'));
    this.makePie();
  }

  spinToWin() {
    if (this.readyToSpin) {
      let random = Math.random() * 1000 * 2 + 2500;
      this.chart.chart.options.animation.duration = random;
      this.chart.chart.options.rotation = Math.random() * 360;
      this.chart.chart.update();
      this.readyToSpin = false;
      this.chart.chart.options.animation.duration = 1000;
      setTimeout(() => {
        this.readyToSpin = true;
      }, 30 * 1000);
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

    console.log(this.chart.chart);
    this.chart.chart.update();
  }

  makePie() {
    for (let option of this.options) {
      this.pieLabels.push(option.name);
      this.pieData.push(1);
    }
  }
}
