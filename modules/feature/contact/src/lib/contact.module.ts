import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  imports: [CommonModule, ContactComponent],
  exports: [ContactComponent],
})
export class ContactModule {}
