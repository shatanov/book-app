import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';

import { TopBarComponent } from './components/topBar/topBar.component';
import { MainLogoModule } from '../mainLogo/mainLogo.module';
import { ProfileInfoModule } from '../profileInfo/profileInfo.module';
import { SearchInputComponent } from './components/searchInput/searchInput.component';

@NgModule({
  imports: [CommonModule, MainLogoModule, ProfileInfoModule, RouterLinkWithHref],
  declarations: [TopBarComponent, SearchInputComponent],
  exports: [TopBarComponent]
})
export class TopBarModule {}
