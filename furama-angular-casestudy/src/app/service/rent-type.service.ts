import { Injectable } from '@angular/core';

class RentType {
}

@Injectable({
  providedIn: 'root'
})
export class RentTypeService {
  rentTypeLists: RentType[] = [{
    id: 1,
    name: "date"
  }, {
    id: 2,
    name: "month"
  }, {
    id: 3,
    name: "year"
  }];
  constructor() { }
  getAll() {
    return this.rentTypeLists;
  }
}
