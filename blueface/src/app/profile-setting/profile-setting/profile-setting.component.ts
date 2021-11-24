import ​{ ​Component​, ​EventEmitter, ​OnInit, Output } ​from ​'@angular/core'​;
import { Observable } from 'rxjs';
import ​{IProfile​, ​ProfileService} ​from ​'../profile.service'​;
@Component​({
​selector​: ​'profile-setting'​,
​templateUrl​: ​'./profile-setting.component.html'
})
export class ​ProfileSettingComponent ​implements ​OnInit {

constructor​(​private ​profile​: ProfileService) { }
// @Output() dataSaved: EventEmitter<number> =   new EventEmitter(); 
​​title ​= ​'Profile'​;
firstName : string= "";
user$: Promise<IProfile> = <Promise<any>>{};
​ngOnInit​() {
  this.user$ = this.profile.getProfileUser();
}
​saveProfile​() {

}
}
