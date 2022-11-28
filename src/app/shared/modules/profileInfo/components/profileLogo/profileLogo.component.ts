import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-logo',
  templateUrl: './profileLogo.component.html',
  styleUrls: ['./profileLogo.component.scss']
})
export class ProfileLogoComponent implements OnInit {
  @Input('imgUrl') imgUrlProps: string | null | undefined;
  @Input('hasImg') hasImgProps: string | null | undefined;
  @Input('profileName') profileNameProps: string | undefined;

  public profileName: string | undefined;

  ngOnInit(): void {
    if (!this.hasImgProps) {
      this.profileName = this.profileNameProps?.substring(0, 1);
    }
  }
}
