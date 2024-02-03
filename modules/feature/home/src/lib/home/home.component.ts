import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SolutionCardComponent } from '@webartestudio/solution-ui';
import { LayoutModule } from '../../../../layout/src/lib/layout.module';

@Component({
  selector: 'webartestudio-home',
  standalone: true,
  imports: [CommonModule, LayoutModule, SolutionCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
