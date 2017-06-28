export class FoodOption {
  // Basics
  name: string;
  value: number;
  color: string;
  hoverColor: string;
  // Expansion?
  healty: boolean;
  location: string;
  logo: string;
  url: string;

  constructor(name: string,
              value: number = 1,
              color: string = '#fff',
              hoverColor: string = '#fff',
              healty: boolean = false,
              logo?: string,
              url?: string,
              location?: string)
{
    this.name = name;
    this.value = value;
    this.color = color;
    this.hoverColor = hoverColor;
    this.healty = healty;
    this.location = location;
    this.logo = logo
    this.url = url;
  }
}
