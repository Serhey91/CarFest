import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { SpaModule } from '../spa/spa.module';
import { AppHomeComponent } from './routes/app-home/app-home.component';
import { SettingsComponent } from './routes/settings/settings.component';
import { RouterModule } from '../../node_modules/@angular/router';
import { appRoutes } from './routes/app.routes';
import { CarDetailComponent } from './routes/car-detail/car-detail.component';
import { CarListComponent } from './routes/car-list/car-list.component';
import { CarMaintComponent } from './routes/car-maint/car-maint.component';
import { AuthenticatedComponent } from './routes/authenticated/authenticated.component';
import { UserService } from './services/user.service';
import { UserApi } from '../spa/users/user-api';
import { AuthGuard } from './services/auth-guard.service';
import { AppDataService } from './services/app-data.service';
import { FormsModule } from '@angular/forms';
import { CarPanelComponent } from './panels/car-panel/car-panel.component';
import { ImagePanelComponent } from './panels/image-panel/image-panel.component';
@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent,
    SettingsComponent,
    CarDetailComponent,
    CarListComponent,
    CarMaintComponent,
    AuthenticatedComponent,
    CarPanelComponent,
    ImagePanelComponent
  ],
  imports: [
    BrowserModule, SpaModule, RouterModule.forRoot(appRoutes), FormsModule, HttpModule
  ],
  providers: [UserService,
     {
    provide: UserApi, useExisting: UserService
  },
   AuthGuard, AppDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
