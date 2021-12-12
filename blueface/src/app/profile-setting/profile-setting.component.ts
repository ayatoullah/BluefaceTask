import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IProfile, ProfileService } from './profile.service';

@Component({
  selector: 'app-profile-setting',
  templateUrl: './profile-setting.component.html',
  styleUrls: ['./profile-setting.component.scss'],
})
export class ProfileSettingComponent implements OnInit {
  title = 'profile';
  user$!: Promise<IProfile>;
  username: string = '';
  firstName: string = '';
  lastName : string = "";
  error: string = '';
  isLoading = false;
  isSaving = false;
  profileForm = this.fb.group({
    firstName: [''],
    lastName: [''],
  });
  email : string ="";

  constructor(
    private profileService: ProfileService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getProfileUser();
    this.changeInputs();
  }

  changeInputs() {
    this.profileForm.controls['firstName'].valueChanges.subscribe(selectedValue => {
      this.deleteErrMesg();
    })
  }
  deleteErrMesg() {
    this.error = "";
  }

  getProfileUser() {
    this.isLoading = true;
    this.disableIputs();
    this.user$ = this.profileService.getProfileUser();
    this.user$.then(
      (user) => {
        this.isLoading = false;
        this.disableIputs();
        this.username = user.username;
        this.email = user.email;
        this.profileForm.controls['firstName'].setValue(user.firstName);
        this.profileForm.controls['lastName'].setValue(user.lastName);
      },
      (error) => {
        this.getProfileUser();
      }
    );
  }

  disableIputs() {
    
    if (this.isLoading) {
      this.profileForm.controls['firstName'].disable();
      this.profileForm.controls['lastName'].disable();
    } else {
      this.profileForm.controls['firstName'].enable();
      this.profileForm.controls['lastName'].enable();
    }
  }
  setName(firstName : string, lastName : string) : void {
    this.profileService.setName(firstName).then((res) => {
      this.isSaving = false;
      console.log("saved");
      this.setEmail(firstName, lastName);
      
    }).catch((error)=> {
      this.isSaving = false;
      this.error = "Error!" + error.error;
    });
  }

  // revertInputsToInitialValues(firstName : string, lastName : string){
  //   this.profileForm.patchValue({
  //     firstName,
  //     lastName
  //   });
  // }
  setEmail(firstName : string, lastName : string) {

    const emailPromise = this.profileService.setEmail(firstName, lastName);
    emailPromise.then((res) => {
      this.email = res.email;
    }).catch((error)=>{
      
      
      this.getProfileUser();
      this.error = "Error on email generation";
    });
  }

  onSubmit() {
    this.isSaving = true;
    this.error = "";
    const firstName = this.profileForm.controls['firstName'].value;
    const lastName = this.profileForm.controls['lastName'].value;
    // const user = {
    //   "username" : firstName + '.' + lastName,
    //   "firstName" : firstName,
    //   "lastName" : lastName
    // }
    this.setName(firstName, lastName);
    

    
  }
}
