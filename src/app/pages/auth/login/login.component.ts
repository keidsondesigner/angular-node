import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  loading = false;
  submitted = false;

  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private authService: AuthService,
      private toastrNotifier: ToastrService
      // private alertService: AlertService
  ) {
    this.initForm();
  }

  ngOnInit() {

  }
  initForm() {
    this.form = this.formBuilder.group({
      email: ['', Validators.email],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {
      this.submitted = true;

      // reset alerts on submit
      // this.alertService.clear();

      // stop here if form is invalid
      if (this.form.invalid) {
        this.toastrNotifier.error('Preencha todos os campos.', 'Formulário inválido!');
        return;
      }

      this.loading = true;
      this.authService.loginUser(this.form.value)
          .pipe(first())
          .subscribe({
              next: (result) => {
                this.loading = false;
                console.log('result', result);
                this.router.navigateByUrl('lista-produtos');
                localStorage.setItem('token', result.token);
                localStorage.setItem('email', result.user.email);

                this.toastrNotifier.success('token criado com sucesso.', 'Login efetuado!');
                console.log('sucesso ao efetuar login');
              },
              error: (e: HttpErrorResponse) => {
                this.loading = false;
                console.log('httpError: ', e);
                console.log('status code: ', e.status);
                console.log('erro: ', e.error.error);

                if(e.status === 401) {
                  this.toastrNotifier.error('preencha novamente.', 'Senha incorreta!');
                } else if(e.status === 400) {
                  this.toastrNotifier.error('Clique e registrar-se', 'Email não existe!');
                }
              }
          });

      // this.authService.loginUser(this.form.value).subscribe(result => {
      //   console.log(result);
      //   this.loading = false;
      //   this.toastrNotifier.success('Hello word', 'Toastr fun!');
      //   this.router.navigateByUrl('novo-produto');
      // }, (event: HttpErrorResponse) => {
      //   this.loading = false;
      //   if(event.error.msg){
      //     this.toastrNotifier.error('error', '*****');
      //   } else {
      //     this.toastrNotifier.error('Ops erro comunique-se com administratdor', '*****');
      //   }
      // });
  }
}
