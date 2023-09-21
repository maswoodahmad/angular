export interface ICity {
  id: number;
  name: string;
  lat: number;
  lon: number;
  rating: number;
  doj: Date;
  cost: number;
}

export class City implements ICity {
  'id': number;
  'name': string;
  'lat': number;
  'lon': number;
  'rating': number;
  'doj': Date;
  'cost': number;

  cityList: ICity[] = [
    {
      id: 1,
      name: 'Pune',
      lat: 45.6733,
      lon: 55.7832,
      rating: 2.5,
      doj: new Date('09-20-2023'),
      cost: 5000.5,
    },
    {
      id: 2,
      name: 'Hyderabad',
      lat: 46.8732,
      lon: 12.0777,
      rating: 4.5,
      doj: new Date('05-24-2023'),
      cost: 7030.25,
    },
    {
      id: 3,
      name: 'Ahmedabad',
      lat: 30.6934,
      lon: 152.31,
      rating: 3,
      doj: new Date('10-10-2023'),
      cost: 3003.45,
    },
    {
      id: 4,
      name: 'Mangalore',
      lat: 72.7677,
      lon: 133.4185,
      rating: 5,
      doj: new Date('12-30-2023'),
      cost: 3000.6,
    },
  ];
  get list() {
    return this.cityList;
  }
  addCity(city: ICity){
    this.cityList.push(city)
  }
}
