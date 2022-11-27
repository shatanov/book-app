import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileInfoComponent } from './components/profileInfo/profileInfo.component';
import { ProfileLogoComponent } from './components/profileLogo/profileLogo.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ProfileInfoComponent, ProfileLogoComponent],
  exports: [ProfileInfoComponent, ProfileLogoComponent]
})
export class ProfileInfoModule {}
