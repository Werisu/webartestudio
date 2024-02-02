import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@webartestudio/layout';
import { initFlowbite } from 'flowbite';

@Component({
  standalone: true,
  imports: [RouterModule, LayoutModule],
  selector: 'webartestudio-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'webartestudio';

  ngOnInit(): void {
    initFlowbite();
  }
}
