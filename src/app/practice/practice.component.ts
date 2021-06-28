import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss'],
})
export class PracticeComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  @ViewChild('f') signUpPage: NgForm | undefined;
  defaultContry = 'india';
  answer = '';
  genders = ['male', 'female'];
  defaultGender = 'male';
  getvalue: any = [];
  user = {
    username: '',
    emailids: '',
    country: '',
    gender: '',
    questionAns: '',
  };

  //  Reactive Form All Data

  SignUpForm = this.fb.group({
    inputUserName: ['', Validators.required],
    inputUserDetails: this.fb.group({
      inputAdd: [''],
      inputEmail: [''],
      inputGender: [''],
    }),
    // inputSkillsArray: this.fb.array([this.fb.control('')]),
    inputActive: [''],
  });
  // get inputSkillsArray() {
  //   return this.SignUpForm.get('skills') as FormArray;
  // }
  // addSkills() {
  //   this.inputSkillsArray.push(this.fb.control(''));
  // }
  submitReactiveData() {
    console.log(this.SignUpForm);
  }
  updateName() {
    this.SignUpForm.patchValue({
      inputUserName: 'Nancy',
    });
  }

  //

  // getValue(val: any) {
  //   this.getvalue = (<HTMLInputElement>val.target).value;
  // }

  onclick() {
    alert('u are in que wait some time to type in input');
    setTimeout(() => {
      alert('now you can type in input box');
      console.log('5 seconds');
    }, 100);
  }
  onSubmit() {
    this.user.username = this.signUpPage?.value.username;
    this.user.emailids = this.signUpPage?.value.emailids;
    this.user.country = this.signUpPage?.value.country;
    this.user.gender = this.signUpPage?.value.gender;
    this.user.questionAns = this.signUpPage?.value.questionAns;
    this.signUpPage?.reset();
    console.log(this.user);
    setTimeout(() => {
      this.user = {
        username: '',
        emailids: '',
        country: '',
        gender: '',
        questionAns: '',
      };
    }, 2000);
  }
  ngOnInit(): void {}
}
