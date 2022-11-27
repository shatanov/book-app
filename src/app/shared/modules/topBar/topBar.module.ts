import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopBarComponent } from './components/topBar/topBar.component';
import { MainLogoModule } from '../mainLogo/mainLogo.module';

@NgModule({
  imports: [CommonModule, MainLogoModule],
  declarations: [TopBarComponent],
  exports: [TopBarComponent]
})
export class TopBarModule {}
