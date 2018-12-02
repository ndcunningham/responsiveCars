import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';

import { AppEffects } from './app.effects';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { CarFilterComponent } from './containers/car-filter/car-filter.component';
import { HomePageComponent } from './containers/home-page/home-page.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemService } from './database/inMemory.service';
import { CarsEffects } from './effects/cars.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { CarDetailComponent } from './containers/car-detail/car-detail.component';
import { SelectedCarComponent } from './components/selected-car/selected-car.component';
import { ViewCarPageComponent } from './containers/view-car-page/view-car-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CarFilterComponent,
    HomePageComponent,
    CarDetailComponent,
    SelectedCarComponent,
    ViewCarPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          component: HomePageComponent
        },
        {
          path: ':id',
          component: ViewCarPageComponent
        }
      ],
      { useHash: true }
    ),
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([CarsEffects]),
    HttpClientInMemoryWebApiModule.forRoot(InMemService, { delay: 300 }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
