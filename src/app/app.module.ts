import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RightSideComponent } from './right-side/right-side.component';
import { LeftSideComponent } from './left-side/left-side.component';
import { SettingsComponent } from './settings/settings.component';
import { LeftBarComponent } from './left-bar/left-bar.component';
import { ZacComponent } from './zac/zac.component';
import { TodayComponent } from './today/today.component';
import { MessageComponent } from './message/message.component';
import { MainComponent } from './main/main.component';
import { ProfilepicComponent } from './profilepic/profilepic.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { TypeComponent } from './type/type.component';

@NgModule({
  declarations: [
    AppComponent,
    RightSideComponent,
    LeftSideComponent,
    SettingsComponent,
    LeftBarComponent,
    ZacComponent,
    TodayComponent,
    MessageComponent,
    MainComponent,
    ProfilepicComponent,
    ToolbarComponent,
    TypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
