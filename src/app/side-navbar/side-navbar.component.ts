import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { AppService } from '../app.service';
import { MENUS } from '../Utilities/constants';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent  {

  title = 'employee-app';

  constructor(public appService: AppService,
    private route: ActivatedRoute,
    private router: Router) {}

  menuClick(menu) {
    switch(menu) {
      case MENUS.EMPLOYEES_MENU:
        this.navigateToEmployees();
        break;
      case MENUS.LOGOUT_MENU:
        this.logout();
        break;
      default:
        break;
    }
  }

  navigateToEmployees() {
    this.router.navigate(['employees'], { relativeTo: this.route });
  }

  logout() {
    this.appService.setIsLoggedIn(false);
    this.router.navigate([''], { relativeTo: this.route });
  }

}
