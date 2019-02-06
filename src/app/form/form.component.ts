import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../user';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  myForm: FormGroup;
  user = new User;
  users =[];
  constructor() { }

  addUser(){
    this.users.push(this.user);
    this.user = new User;
}
getUsers(){
  return this.users;
}

  ngOnInit() {
    
  }

}
