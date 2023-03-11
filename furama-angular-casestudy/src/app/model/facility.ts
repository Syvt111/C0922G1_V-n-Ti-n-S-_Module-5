import {RenType} from "./ren-type";
import {FacilityType} from "./facility-type";

export interface Facility {
  id: number;
  name?: string;
  image?: string;
  area?: string;
  cost?: string;
  maxPeople?: number;
  standard?: string;
  description?: string;
  poolArea?: string;
  floor?: number;
  facilityFree?: string;
  rentType?: RenType;
  facilityType?: FacilityType;
}
