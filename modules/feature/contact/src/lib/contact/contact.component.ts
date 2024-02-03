import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  jackInTheBoxOnEnterAnimation,
  pulseOnEnterAnimation,
} from 'angular-animations';

@Component({
  selector: 'webartestudio-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  animations: [
    jackInTheBoxOnEnterAnimation({ anchor: 'enter', duration: 2000 }),
    pulseOnEnterAnimation({ anchor: 'zoom', duration: 2000 }),
  ],
})
export class ContactComponent {}
