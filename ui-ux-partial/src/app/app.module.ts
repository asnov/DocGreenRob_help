import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Facebook } from '@ionic-native/facebook';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Camera } from '@ionic-native/camera';
import { Chooser } from '@ionic-native/chooser';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SocialSharing } from '@ionic-native/social-sharing';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { HomePageModule } from '../pages/home/home.module';
import { SidemenuPage } from '../pages/sidemenu/sidemenu';
import { SigninPage } from '../pages/signin/signin';
import { MyApp } from './app.component';


@NgModule({
	declarations: [
		MyApp,
		SigninPage,
		SidemenuPage
	],
	imports: [
		BrowserModule,
		IonicStorageModule.forRoot(),
		IonicModule.forRoot(MyApp),
		HttpClientModule,
		HomePageModule,
		CommonModule,
		SuperTabsModule.forRoot()
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		SigninPage,
		SidemenuPage
	],
	providers: [
		StatusBar,
		SplashScreen,
		{ provide: ErrorHandler, useClass: IonicErrorHandler },
		Facebook,
		BarcodeScanner,
		Camera,
		SocialSharing,
		InAppBrowser,
		Chooser,
	]
})
export class AppModule { }
