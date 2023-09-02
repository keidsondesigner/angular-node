import { NavbarService } from './../../core/services/navbar.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit, OnDestroy {
  showNavbar: boolean = false;
  subscription!: Subscription;
  isMenuMobileVisible: boolean = true;

  constructor(private navbarService: NavbarService, private router: Router) {
    this.subscription = this.navbarService.showNavbar.subscribe((value) => {
      this.showNavbar = value;
    });
   }

  ngOnInit(): void {
  }

  toggleMenuMobile(): void {
    this.isMenuMobileVisible = !this.isMenuMobileVisible;
  }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
