import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Car } from '../models/car.type';
import { Availability } from '../models/availability.enum';

export class InMemService implements InMemoryDbService {
  createDb() {
    const cars: Array<Car> = [
      {
        id: 1,
        name: 'Awesome Car',
        make: 'Honda',
        year: '2018',
        image: 'https://www.yourmomhatesthis.com/images/2016/12/Car-PNG-Picture.png',
        availabilityId: 1
      },
      {
        id: 2,
        name: 'Awesome Car 1',
        make: 'Honda',
        year: '2019',
        image: 'https://www.yourmomhatesthis.com/images/2016/12/Car-PNG-Picture.png',
        availabilityId: 1
      },
      {
        id: 3,
        name: 'Awesome Car 3',
        make: 'Honda',
        year: '2018',
        image: 'https://www.yourmomhatesthis.com/images/2016/12/Car-PNG-Picture.png',
        availabilityId: 2
      },
      {
        id: 4,
        name: 'Awesome Car',
        make: 'Honda',
        year: '2018',
        image: 'https://www.yourmomhatesthis.com/images/2016/12/Car-PNG-Picture.png',
        availabilityId: 1
      },
      {
        id: 5,
        name: 'Awesome Car 1',
        make: 'Honda',
        year: '2019',
        image: 'https://www.yourmomhatesthis.com/images/2016/12/Car-PNG-Picture.png',
        availabilityId: 1
      },
      {
        id: 6,
        name: 'Awesome Car 3',
        make: 'Honda',
        year: '2018',
        image: 'https://www.yourmomhatesthis.com/images/2016/12/Car-PNG-Picture.png',
        availabilityId: 2
      },
      {
        id: 12,
        name: 'Awesome Car',
        make: 'Honda',
        year: '2018',
        image: 'https://www.yourmomhatesthis.com/images/2016/12/Car-PNG-Picture.png',
        availabilityId: 1
      },
      {
        id: 23,
        name: 'Awesome Car 1',
        make: 'Honda',
        year: '2019',
        image: 'https://www.yourmomhatesthis.com/images/2016/12/Car-PNG-Picture.png',
        availabilityId: 1
      },
      {
        id: 34,
        name: 'Awesome Car 3',
        make: 'Honda',
        year: '2018',
        image: 'https://www.yourmomhatesthis.com/images/2016/12/Car-PNG-Picture.png',
        availabilityId: 2
      },
      {
        id: 45,
        name: 'Awesome Car',
        make: 'Honda',
        year: '2018',
        image: 'https://www.yourmomhatesthis.com/images/2016/12/Car-PNG-Picture.png',
        availabilityId: 3
      },
      {
        id: 56,
        name: 'Awesome Car 1',
        make: 'Honda',
        year: '2019',
        image: 'https://www.yourmomhatesthis.com/images/2016/12/Car-PNG-Picture.png',
        availabilityId: 1
      },
      {
        id: 61,
        name: 'Greatness',
        make: 'Honda',
        year: '2018',
        image: 'https://www.yourmomhatesthis.com/images/2016/12/Car-PNG-Picture.png',
        availabilityId: 3
      }
    ];

    const availability: Array<Availability> = [
      { id: 1, value: 'In Dealership' },
      { id: 2, value: 'Out of Stock' },
      { id: 3, value: 'Unavailable' }
    ];
    return { cars, availability };
  }
}
