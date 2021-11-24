import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileSettingComponent } from './profile-setting/profile-setting.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProfileSettingComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  exports : [
  ]
})
export class ProfileSettingModule { }
