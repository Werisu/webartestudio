import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { WorkProcessComponent } from './work-process/work-process.component';

@NgModule({
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    SpinnerComponent,
    WorkProcessComponent,
    FooterComponent,
  ],
  exports: [
    HeaderComponent,
    HeroComponent,
    SpinnerComponent,
    WorkProcessComponent,
    FooterComponent,
  ],
})
export class LayoutModule {}
