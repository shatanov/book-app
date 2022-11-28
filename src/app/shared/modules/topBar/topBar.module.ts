import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopBarComponent } from './components/topBar/topBar.component';
import { MainLogoModule } from '../mainLogo/mainLogo.module';
import { ProfileInfoModule } from '../profileInfo/profileInfo.module';
import { RouterLinkWithHref } from '@angular/router';

@NgModule({
  imports: [CommonModule, MainLogoModule, ProfileInfoModule, RouterLinkWithHref],
  declarations: [TopBarComponent],
  exports: [TopBarComponent]
})
export class TopBarModule {}
