import { Component } from '@angular/core';
import { AppLauncher, AppLauncherOptions } from '@ionic-native/app-launcher/ngx';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  appName = '';
  appDisplayMsg = '';



  constructor(private appLauncher: AppLauncher, private platform: Platform) { }



  launchApp() {
    const options: AppLauncherOptions = {
    };

    if (this.platform.is('ios')) {
      options.uri = 'spotify://';
    } else {
      options.packageName = 'com.facebook.katana';
    }

    this.appLauncher.canLaunch(options)
      .then((canLaunch: boolean) => {
        console.log('Spotify is available');
        const variable = this.appName + '://';
        console.log(variable);

        // this.appLauncher.launch({ uri: 'spotify://' });
        this.appLauncher.launch({ uri: variable });
      })
      .catch((error: any) => {
        console.error(this.appName, ' is not available');
        this.appDisplayMsg = this.appName + ' is not available';
      });

  }
}
