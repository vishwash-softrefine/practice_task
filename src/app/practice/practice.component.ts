import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';

import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
} from '@angular/forms';
import { fromEvent } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { AppServiceService } from '../app-service.service';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss'],
})
export class PracticeComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('myInput') myInput: ElementRef | undefined;

  constructor(
    private fb: FormBuilder,
    private loader: LoadingBarService,
    private exclusiveSev: AppServiceService
  ) {}

  @ViewChild('f') signUpPage: NgForm | undefined;
  streamData: any = null;

  ngOnInit(): void {
    this.exclusiveSev.exclusive.next(true);
  }
  ngOnDestroy(): void {
    this.exclusiveSev.exclusive.next(false);
  }

  ngAfterViewInit() {
    const searchTerm = fromEvent<any>(
      this.myInput?.nativeElement,
      'keyup'
    ).pipe(
      map((e) => e.target.value),
      debounceTime(1000),
      distinctUntilChanged()
    );
    searchTerm.subscribe((res) => {
      console.log(res);
      this.streamData = res;
      this.loader.start();
      this;
      setTimeout(() => {
        this.loader.stop();
        this.streamData = null;
      }, 1000);
    });
  }

  defaultContry = 'india';
  answer = '';
  genders = ['male', 'female'];
  defaultStatus = 'checked';
  getvalue: any = [];
  skillsdisable = true;
  deleteButton = false;
  user = {
    username: '',
    emailids: '',
    country: '',
    gender: '',
    questionAns: '',
  };

  //  Reactive Form All Data

  SignUpForm = this.fb.group({
    inputUserName: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10),
      ]),
    ],
    inputUserDetails: this.fb.group({
      inputAdd: ['', [Validators.required]],
      inputEmail: ['', [Validators.pattern, Validators.required]],
      inputGender: [''],
    }),
    inputActive: [''],
    skills: this.fb.array([this.fb.control(null, [Validators.required])]),
  });

  get skills() {
    return this.SignUpForm.get('skills') as FormArray;
  }
  addSkills() {
    this.deleteButton = true;
    console.log(this.skills.status);
    this.skillsdisable = false;
    const control = this.fb.control(null, [Validators.required]);
    this.skills.push(control);
  }
  // removeSkill(id: number) {
  //   console.log(id);
  //   this.skills.removeAt(id);
  // }

  get userNameData() {
    return this.SignUpForm.get('inputUserName');
  }
  get addessData() {
    return this.SignUpForm.get('inputUserDetails.inputAdd');
  }
  get emailData() {
    return this.SignUpForm.get('inputUserDetails.inputEmail');
  }

  submitReactiveData() {
    console.log(this.SignUpForm.value);
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
}
