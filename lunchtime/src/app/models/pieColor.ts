export class PieColor {
  wholeThang: any;
  backgroundColor: string[];
  hoverBackgroundColor: string[];

  constructor() {
    this.backgroundColor = [];
    this.hoverBackgroundColor = [];
    this.wholeThang = [{backgroundColor: this.backgroundColor}, {hoverBackgroundColor: this.hoverBackgroundColor}];
  }
}
