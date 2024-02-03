import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { bounceInUpOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'webartestudio-work-process',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-process.component.html',
  styleUrl: './work-process.component.css',
  animations: [
    bounceInUpOnEnterAnimation({ anchor: 'enter', delay: 200 }),
    bounceInUpOnEnterAnimation({ anchor: 'enter2', delay: 300 }),
    bounceInUpOnEnterAnimation({ anchor: 'enter3', delay: 400 }),
    bounceInUpOnEnterAnimation({ anchor: 'enter4', delay: 500 }),
  ],
})
export class WorkProcessComponent {}
