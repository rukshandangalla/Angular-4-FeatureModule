import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateComponent } from "./date/date.component";
import { ButtonComponent } from "./button/button.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ButtonComponent, DateComponent],
  exports: [CommonModule, ButtonComponent, DateComponent]
})
export class SharedModule { }
