import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('appTitle') appTitle: ElementRef;
  title: string;

  ngOnInit() {
    this.title = 'Book Shop Online';
  }

  ngAfterViewInit() {
    this.appTitle.nativeElement.style.color = 'red';
  }
}
