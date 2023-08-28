import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
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
      name: ['', Validators.required],
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
              this.toastrNotifier.success('Hello word', 'Toastr fun!');
              console.log('sucesso ao registrar user')
            },
            error: error => {
              console.log(error);
              this.toastrNotifier.error(error.msg, 'Toastr fun!');
              console.log('erro ao registrar user');
              this.loading = false;
            }
        });

    //reset form submit
    // this.form.reset();
  }
}
