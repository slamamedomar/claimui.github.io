import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-admin-side-bar',
  templateUrl: './admin-side-bar.component.html',
  styleUrls: ['./admin-side-bar.component.css']
})

export class AdminSideBarComponent implements OnInit {
  isMenuOpen = true;
  contentMargin = 240;
  onToolbarMenuToggle() {
    this.isMenuOpen = !this.isMenuOpen;
    if(!this.isMenuOpen) {
      this.contentMargin = 70;
    } else {
      this.contentMargin = 240;
    }
  }
  constructor(private titlePage:Title) { }

  ngOnInit(): void {
  }
  pageTitle (title:string) {
      this.titlePage.setTitle(title);

  }
}
