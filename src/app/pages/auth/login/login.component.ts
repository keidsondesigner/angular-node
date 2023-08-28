import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';

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

    // stop here if form is invalid
    if (this.form.invalid) {
      this.toastrNotifier.error('Preencha todos os campos.', 'Formulário inválido!');
      return;
    }

    this.loading = true;
    this.authService.loginUser(this.form.value).pipe(first()).subscribe({
      next: (result) => {
        this.loading = false;
        console.log('result', result);
        localStorage.setItem('token', result.token);
        localStorage.setItem('email', result.user.email);
        this.router.navigate(['produtos/lista-produtos']);

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
          this.toastrNotifier.error('Crie uma conta', 'Email não existe!');
        }
      }
    });
  }
}
