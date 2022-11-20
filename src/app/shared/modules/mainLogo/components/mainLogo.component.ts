import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-logo',
  templateUrl: './mainLogo.component.html',
  styleUrls: ['./mainLogo.component.scss']
})
export class MainLogoComponent {
  @Input('logoSize') logoSizeProps: string
}
