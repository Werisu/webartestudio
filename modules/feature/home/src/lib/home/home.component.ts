import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { ContactComponent } from '@webartestudio/contact';
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
    ContactComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  public visible = false;
  public isContactVisible = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    this.visible = event.target?.scrollingElement.scrollTop > 350;
    this.isContactVisible = event.target?.scrollingElement.scrollTop > 950;
  }
}
