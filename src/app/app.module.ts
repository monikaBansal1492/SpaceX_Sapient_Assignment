import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FilterComponentComponent } from './components/filter-component/filter-component.component';
import { MainGridComponent } from './components/main-grid/main-grid.component';
import { SpaceXDataService } from './services/space-xdata.service';
import { HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    FilterComponentComponent,
    MainGridComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule
  ],
  providers: [SpaceXDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
