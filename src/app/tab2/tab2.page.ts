import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { AdOptions, AdSize, AdPosition } from '@rdlabo/capacitor-admob';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  isAdsense = false;
  constructor() {}

  displayAdMob() {
    const options: AdOptions = {
      adId: 'ca-app-pub-3940256099942544/6300978111',
      adSize: AdSize.BANNER,
      position: AdPosition.BOTTOM_CENTER,
      margin: '60',
    };
    Plugins.AdMob.showBanner(options).then(
      success => this.isAdsense = true,
      error => this.isAdsense = false
    );
  }

  hideAdMob() {
    Plugins.AdMob.hideBanner().then(
      success => this.isAdsense = false
    );
  }
}
