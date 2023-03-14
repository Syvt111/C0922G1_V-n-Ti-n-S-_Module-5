import {Customer} from "../customer/customer";
import {Facility} from "../facility/facility";

export interface Contract {
  id: number;
  customer: Customer;
  facility: Facility;
  startDay: string;
  endDay: string;
  cost: number;
}
