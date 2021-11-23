import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileSettingComponent } from './profile-setting/profile-setting.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    ProfileSettingComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports : [
    ProfileSettingComponent
  ]
})
export class ProfileSettingModule { }
