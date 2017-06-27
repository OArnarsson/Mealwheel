export class FoodOption {
  // Basics
  name: string;
  active: boolean;
  color: string;
  hoverColor: string;
  // Expansion?
  healty: boolean;
  location: string;
  logo: string;

  constructor(name: string,
              active: boolean = true,
              color: string = '#fff',
              hoverColor: string = '#fff',
              healty: boolean = false,
              location: string = '',
              logo: string = '')
  {
    this.name = name;
    this.active = active;
    this.color = color;
    this.hoverColor = hoverColor;
    this.healty = healty;
    this.location = location;
    this.logo = logo;
  }
}
