import {CustomerType} from './customerType';

export interface Customer {
  id?: string;
  customerName?: string;
  dateOfBirth?: string;
  sex?: string;
  identityNumber?: string;
  phoneNumber?: string;
  email?: string;
  address?: string;

  customerType?: CustomerType;
}
