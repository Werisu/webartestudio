import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroMoon, heroSun } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'webartestudio-header',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  viewProviders: [provideIcons({ heroSun, heroMoon })],
})
export class HeaderComponent implements OnInit {
  public darkMode: string = localStorage.getItem('theme') || 'light';

  ngOnInit(): void {
    if (this.darkMode === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }

  darkModeActive() {
    if (this.darkMode === 'light') {
      this.darkMode = 'dark';
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    } else {
      this.darkMode = 'light';
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    }
  }
}
