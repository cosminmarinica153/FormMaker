import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from '@core/core.module';
import { SettingsModule } from '@modules/settings/settings.module';
import { ViewFormModule } from '@modules/view-form/view-form.module';
import { ViewResponseModule } from '@modules/view-response/view-response.module';
import { CreateFormModule } from '@modules/create-form/create-form.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,

    CoreModule,
    CreateFormModule,
    SettingsModule,
    ViewFormModule,
    ViewResponseModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
