import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Storage } from '@ionic/storage';
import { SidemenuPage } from '../pages/sidemenu/sidemenu';
import { SigninPage } from '../pages/signin/signin';
import { Platform } from 'ionic-angular';
@Component({
	templateUrl: 'app.html'
})

export class MyApp {
	// rootPage:any = SigninPage;
	rootPage: any;
	constructor(
		platform: Platform,
		statusBar: StatusBar,
		splashScreen: SplashScreen,
		public storage: Storage
	) {
		platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			statusBar.styleDefault();
			splashScreen.hide();
			this.storage.get('userID').then((userID) => {
				console.log(userID);
				if (userID == null) {
					this.rootPage = SigninPage;
				} else {
					this.rootPage = SidemenuPage;
				}
			})
		});
	}

	
	}
