import { Injectable } from '@angular/core';

export interface IProfile {
  firstName: string;
  lastName: string;
  username: string;
  age: number;
  email : string;
}

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  
  user!: IProfile;
  constructor() {}
  getProfileUser(): Promise<IProfile> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.round(Math.random())) {
          this.user = {
            firstName: 'Michael',
            lastName: 'Collins',
            username: 'michael.collins',
            age: 30,
            email : 'michael.collins@blueface.com'
          };
          resolve(this.user);
        } else {
          reject({ error: 'Profile not found' });
        }
      }, Math.random() * 5000);
    });
  }

  
  setName(firstName: string) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.round(Math.random())) {
          this.user.firstName = firstName;
          resolve(this.user);
        } else {
          reject({ error: 'Invalid name' });
        }
      }, Math.random() * 5000);
    });
  }


  removeSpacesFromString(string : string) {
    return string.replace(/\s+/g, '')
  }
  
  generateEmail(firstName : string, lastName : string) {
    return this.removeSpacesFromString(firstName) + '.' + this.removeSpacesFromString(lastName) + "@blueface.com"
  }

  setEmail(firstName : string , lastName: string) : Promise<IProfile> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.round(Math.random())) {
          this.user.email = this.generateEmail(firstName, lastName);
          console.log(lastName.trim());
          resolve(this.user);
        } else {
          reject({ error: 'Invalid name' });
        }
      }, Math.random() * 5000);
    });
  }
}
