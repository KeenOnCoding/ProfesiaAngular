import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menu: boolean;
  menuServices: boolean;
  menuProducts: boolean;
  menuCompany: boolean;

  ngOnInit(): void {
    this.menu = false;
    this.menuServices = false;
    this.menuProducts = false;
    this.menuCompany = false;
  }

  menuClick() {
    this.menu = !this.menu;
  }
  menuServicesClick() {
    this.menuServices = !this.menuServices;
  }
  menuProductsClick() {
    this.menuProducts = !this.menuProducts;
  }
  menuCompanyClick() {
    this.menuCompany = !this.menuCompany;
  }
}
