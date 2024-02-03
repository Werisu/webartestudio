import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { homeRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(homeRoutes), HomeComponent],
  exports: [HomeComponent],
})
export class HomeModule {}
