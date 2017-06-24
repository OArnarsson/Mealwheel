export class FoodOption {
  // Basics
  name: string;
  active: boolean;

  // Expansion?
  healty: boolean;
  location: string;
  logo: string;

  constructor(name: string,
              active: boolean = true,
              healty: boolean = false,
              location: string = '',
              logo: string = '')
  {
    this.name = name;
    this.active = active;
    this.healty = healty;
    this.location = location;
    this.logo = logo;
  }
}
