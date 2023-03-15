import {Component, OnInit} from '@angular/core';
import {FacilityType} from "../../model/facility/facility-type";
import {RentType} from "../../model/facility/rent-type";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FacilityService} from "../../service/facility-service";
import {RentTypeService} from "../../service/rent-type.service";
import {FacilictyTypeService} from "../../service/facilicty-type.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Facility} from "../../model/facility/facility";

@Component({
  selector: 'app-facility-update',
  templateUrl: './facility-update.component.html',
  styleUrls: ['./facility-update.component.css']
})
export class FacilityUpdateComponent implements OnInit {
  facilityUpdate: Facility;
  facilityTypeList: FacilityType[] = [];
  rentTypeList: RentType[];
  facilityList: FormGroup;
  public idAdd: 1;
  public standardError: string;
  public descriptionError: string;
  public floorError: string;
  public messagePoolError: string;

  constructor(private facilityService: FacilityService,
              private rentTypeService: RentTypeService,
              private facilictyTypeService: FacilictyTypeService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getAllFacilityType();
    this.getAllRentType();
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const id = parseInt(paramMap.get('id'), 10);
      this.facilityUpdate = this.facilityService.findById(id);
    });
    this.facilityList = new FormGroup({
      id: new FormControl(),
      name: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      area: new FormControl('', [Validators.required]),
      cost: new FormControl('', [Validators.required]),
      maxPeople: new FormControl('', [Validators.required]),
      standard: new FormControl(),
      description: new FormControl(),
      poolArea: new FormControl(),
      floor: new FormControl(),
      facilityFree: new FormControl(),
      rentType: new FormControl(null, [Validators.required]),
      facilityType: new FormControl(null, [Validators.required])
    });
  }

  getAllRentType() {
    // @ts-ignore
    this.rentTypeList = this.rentTypeService.getAll()
  }

  getAllFacilityType() {
    this.facilityTypeList = this.facilictyTypeService.getAll()
  }

  updateFacility() {
    const facility = this.facilityList.value;
    this.facilityService.updateById(facility);
    this.router.navigateByUrl('/product/list');
  };

  checkStandard(standard: string) {
    if (standard === '' || standard == null) {
      if (this.idAdd === 1) {
        this.facilityList.controls.standard.setErrors({nullStandard: true});
        this.standardError = 'Vui lòng nhập tiêu chuẩn phòng cho Villa';
      } else if (this.idAdd === 2) {
        this.facilityList.controls.standard.setErrors({nullStandard: true});
        this.standardError = 'Vui lòng nhập tiêu chuẩn phòng cho House';
      }
    }
  }

  checkDescription(description: string) {
    if (description === '' || description == null) {
      if (this.idAdd === 1) {
        this.facilityList.controls.description.setErrors({nullDescription: true});
        this.descriptionError = 'Vui lòng nhập mô tả cho Villa';
      } else if (this.idAdd === 2) {
        this.facilityList.controls.description.setErrors({nullDescription: true});
        this.descriptionError = 'Vui lòng nhập mô tả cho House';
      }
    }
  }

  checkPool(pool: string) {
    if (pool === '' || pool == null) {
      if (this.idAdd === 1) {
        this.facilityList.controls.poolArea.setErrors({nullPoolArea: true});
        this.messagePoolError = 'Vui lòng nhập diện tích hồ bơi cho Villa';
      }
    }
  }

  checkFloor(floor: string) {
    if (floor === '' || floor === null) {
      if (this.idAdd === 1) {
        this.facilityList.controls.poolArea.setErrors({nullFloor: true});
        this.floorError = 'Vui lòng nhập số tầng cho Villa';
      } else if (this.idAdd === 2) {
        this.facilityList.controls.description.setErrors({nullFloor: true});
        this.floorError = 'Vui lòng nhập số tầng cho House';
      }
    }
  }

  checkFreeFacility(free: string) {
    if (free === '' || free === null) {
      // @ts-ignore
      if (this.idAdd === 3) {
        this.facilityList.controls.facilityFree.setErrors({nullFreeFacility: true});
      }
    }
  }

  checkValue() {
    const facilityTypez = this.facilityList.controls.facilityType.value;
    this.idAdd = facilityTypez.id;
  }
}

