import ​{ ​Component​, ​OnInit } ​from ​'@angular/core'​;
import ​{IProfile​, ​ProfileService} ​from ​'../profile.service'​;
@Component​({
​selector​: ​'profile-setting'​,
​templateUrl​: ​'./profile-setting.component.html'
})
export class ​ProfileSettingComponent ​implements ​OnInit {
​​title ​= ​'Profile'​;
user: IProfile  = {
  firstName: '',
  lastName: '',
  username: '',
  age: 0
};;
constructor​(​private ​profile​: ProfileService) { }
​ngOnInit​() {}
​saveProfile​() {}
}
