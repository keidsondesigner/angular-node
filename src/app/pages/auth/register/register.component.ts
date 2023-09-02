import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { NavbarService } from 'src/app/core/services/navbar.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  hide = true;

  loading = false;
  submitted = false;

  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private authService: AuthService,
      private toastrNotifier: ToastrService,
      private navbarService: NavbarService
  ) {
    this.initForm();
  }

  ngOnInit() {
    this.navbarService.hide();
  }

  initForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', Validators.email],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  // getter de conveniência para fácil acesso aos campos do formulário
  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      this.toastrNotifier.warning('Preencha todos os campos.', 'Formulário inválido!');
      return;
    }

    this.loading = true;
    this.authService.createUser(this.form.value)
        .pipe(first())
        .subscribe({
            next: () => {
              this.router.navigateByUrl('/pages/auth/login')
              // this.router.navigate(['../login'], { relativeTo: this.route });
              this.toastrNotifier.success('Usuário criado com sucesso', 'Wowww!');
              console.log('sucesso ao registrar user')
            },
            error: error => {
              console.log(error);
              this.toastrNotifier.error(error.msg, 'Error ao criar usuário!');
              console.log('erro ao registrar user');
              this.loading = false;
            }
        });

    //reset form submit
    // this.form.reset();
  }

  ngOnDestroy() {
    this.navbarService.show();
  }
}
