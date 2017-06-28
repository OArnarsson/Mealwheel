import { FoodOption } from "./foodOption";

export class FoodChart {
  foodOptions: FoodOption[];
  pieType: string;
  pieData: number[];
  pieLabels: string[];
  pieColors: any[];
  pieOptions: any;

  constructor() {
    this.pieType = 'pie';
    this.foodOptions = [];
    this.pieData = [];
    this.pieLabels = [];
    this.pieColors = [];
    
    this.pieOptions = {
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
  }
  
}
