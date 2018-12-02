import { Availability } from './availability.enum';

export interface Car {
  id: number;
  name: string;
  make: string;
  year: string;
  image: string;
  availabilityId: number;
}
