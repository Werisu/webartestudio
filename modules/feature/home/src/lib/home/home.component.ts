import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LayoutModule } from '../../../../layout/src/lib/layout.module';

@Component({
  selector: 'webartestudio-home',
  standalone: true,
  imports: [CommonModule, LayoutModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
