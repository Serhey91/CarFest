import { Component, OnInit } from '@angular/core';
import { UserApi } from '../user-api';
import { UserService } from '../../../app/services/user.service';
import { Router } from '@angular/router';
import { NgForm } from '../../../../node_modules/@angular/forms';
import { visibility } from '../../services/animations';
import { Observable } from 'rxjs';

@Component({
  selector: 'spa-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  animations: [visibility]
})
export class SignInComponent implements OnInit {
  submitting = false;
  formError: string;
  constructor(private userApi: UserApi, private userService: UserService, private router: Router) { }
  onSubmit(signInForm: NgForm) {
    // Проверка на валидность формы
    if (signInForm.valid) {
  this.submitting = true;
  this.formError = null;
  this.userApi.signIn(signInForm.value.email, signInForm.value.password).subscribe((data) => {
    // в случае успеха
    console.log('ok');
    this.router.navigate(['/authenticated']);
  },
  // в случае ошибки
  (error) => {
    this.submitting = false;
      this.formError = error;
  });
    }
  }

  // onSubmit(signInForm: NgForm): void {
  //   if (signInForm.valid) {
  //     this.submitting = true;
  //     this.formError = null;
  //     this.userApi.signIn(signInForm.value.email, signInForm.value.password)
  //     .subscribe((input) =>
  //     {if (typeof input === 'string'){
  //       this.submitting = false;
  //       this.formError = input;
  //     } else {
  //       this.formError = null;
  //       this.router.navigate(['/authenticated']);
  //     }
  //     }); } else {
  //     this.submitting = false;
  //     this.formError = 'Please enter correct fields';
  //   }
  // }
  ngOnInit() {
  }

}
