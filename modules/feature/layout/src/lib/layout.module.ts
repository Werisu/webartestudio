import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  imports: [CommonModule, HeaderComponent, HeroComponent, SpinnerComponent],
  exports: [HeaderComponent, HeroComponent, SpinnerComponent],
})
export class LayoutModule {}
