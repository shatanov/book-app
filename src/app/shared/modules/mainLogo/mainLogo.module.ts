import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainLogoComponent } from './components/mainLogo.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MainLogoComponent],
  exports: [MainLogoComponent]
})
export class MainLogoModule {}
