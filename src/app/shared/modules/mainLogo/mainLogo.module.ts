import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainLogoComponent } from './components/mainLogo.component';
import { RouterLinkWithHref } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterLinkWithHref],
  declarations: [MainLogoComponent],
  exports: [MainLogoComponent]
})
export class MainLogoModule {}
