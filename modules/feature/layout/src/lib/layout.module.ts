import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  imports: [CommonModule, HeaderComponent, HeroComponent],
  exports: [HeaderComponent, HeroComponent],
})
export class LayoutModule {}
