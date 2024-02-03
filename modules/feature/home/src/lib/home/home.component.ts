import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
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
export class HomeComponent {
  public visible = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    this.visible = event.target?.scrollingElement.scrollTop > 350;
  }
}
