import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('appTitle') appTitle: ElementRef;
  title: string;
  cartItemsNumber: number = 0;
  isAdminPage: boolean = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.title = 'Book Shop Online';
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        event.url.includes('admin') ? this.isAdminPage = true : this.isAdminPage = false;
      }
    });
  }

  ngAfterViewInit() {
    this.appTitle.nativeElement.style.color = 'red';
  }
}
