import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroUserSolid } from '@ng-icons/heroicons/solid';

@Component({
  selector: 'webartestudio-solution-card',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  templateUrl: './solution-card.component.html',
  styleUrl: './solution-card.component.css',
  viewProviders: [provideIcons({ heroUserSolid })],
})
export class SolutionCardComponent {}
