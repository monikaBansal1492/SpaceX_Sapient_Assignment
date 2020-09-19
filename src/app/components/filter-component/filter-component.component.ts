import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-filter-component',
  templateUrl: './filter-component.component.html',
  styleUrls: ['./filter-component.component.css']
})
export class FilterComponentComponent implements OnInit {

  @Output() filterButtonClicked: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  yearArray = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
  filters = {'launch_year': null, 'launch_success': null, 'land_success': null};


  ngOnInit(): void {
  }

  applyFilter(type, value) {
    // console.log('prev filters: ', this.filters);
    // console.log('present filters: ', type, value);
    if(this.filters[type] !== null && this.filters[type]===value){
        this.filters[type] = null;
    } else {
      this.filters[type] = value;
    }
    
    this.filterButtonClicked.emit({...this.filters});
  }

}
