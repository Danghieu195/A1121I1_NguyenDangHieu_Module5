import {ServiceType} from './service-type';
import {RentalType} from './rental-type';

export interface Facility {
  serviceId?: number;
  serviceName?: string;
  serviceArea?: number;
  rentalCost?: number;
  maxPeople?: number;
  roomStandard?: string;
  extraAmenity?: string;
  poolArea?: number;
  levels?: number;

  serviceType?: ServiceType;
  rentalType?: RentalType;
}
