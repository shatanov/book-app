import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-logo',
  templateUrl: './profileLogo.component.html',
  styleUrls: ['./profileLogo.component.scss']
})
export class ProfileLogoComponent implements OnInit {
  @Input('imgUrl') imgUrlProps: string;
  @Input('hasImg') hasImgProps: boolean;
  @Input('profileName') profileNameProps: string;

  public profileName: string;

  ngOnInit(): void {
    if (!this.hasImgProps) {
      this.profileName = this.profileNameProps.substring(0, 1);
    }
  }
}
