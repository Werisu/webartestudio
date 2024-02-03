import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { LayoutModule, SpinnerComponent } from '@webartestudio/layout';
import { SolutionCardComponent } from '@webartestudio/solution-ui';

@Component({
  selector: 'webartestudio-home',
  standalone: true,
  imports: [
    CommonModule,
    LayoutModule,
    SolutionCardComponent,
    SpinnerComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  public inViewport = true;
  ngOnInit(): void {
    this.inViewport = false;
  }

  // hostlistener number_of_pixels_or_percentage_below
  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    if (window.innerHeight + window.scrollY >= 1000) {
      console.log('entrou');
      this.inViewport = true;
    } else {
      console.log('saiu');
      this.inViewport = false;
    }
  }
}
