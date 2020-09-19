import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';
import { SpaceXDataService } from '../../services/space-xdata.service';
@Component({
  selector: 'app-main-grid',
  templateUrl: './main-grid.component.html',
  styleUrls: ['./main-grid.component.css']
})
export class MainGridComponent implements OnInit, OnChanges, OnDestroy{
  spaceXResponse: any;
  spaceResponse: any;
  @Input() filterInput;

  constructor(private spacexDataService: SpaceXDataService) { }

  ngOnChanges() {
    console.log('filter input found: ', this.filterInput);
    let params = '';
    for(let key in this.filterInput) {
      if(this.filterInput[key]){
        params += `&${key}=${this.filterInput[key]}`;
      }
    }

    if(this.filterInput) {
      this.spacexDataService.getSpaceXData(params).subscribe((response)=>{
        this.spaceXResponse = response;
      });
    }
  }

  ngOnInit(): void {
    this.spaceResponse = this.spacexDataService.getSpaceXData(null).subscribe((response)=>{
          this.spaceXResponse = response;
    });
  }

  ngOnDestroy() {
    console.log('inside ngonds');
    this.spaceResponse.unsubscribe();
  }


}
