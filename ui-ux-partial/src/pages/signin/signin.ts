import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AlertController, IonicPage, LoadingController, ModalController, NavController, NavParams } from 'ionic-angular';
import { SidemenuPage } from '../sidemenu/sidemenu';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
	selector: 'page-signin',
	templateUrl: 'signin.html',
})
export class SigninPage {
	userInfo: any = {};
	loading: any;
	passwordType: string = 'password';
	passwordIcon: string = 'eye-off';
	isLoggedIn: boolean = false;

	constructor(
		private fb: Facebook,
		public navCtrl: NavController,
		public navParams: NavParams,
		public loadingCtrl: LoadingController,
		public alertCtrl: AlertController,
		public modalCtrl: ModalController,
		private storage: Storage,
	) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad SigninPage');
	}

	signinUser() {
		const navCtrl = this.navCtrl;
		setTimeout(function() {
			navCtrl.push(HomePage);
		},10000);
	}

	gotoResetPage() {
	}

	registerUser() {
	}

	// password Show /Hide
	hideShowPassword() {
		this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
		this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
		console.log("hideShowPassword", this.passwordType, this.passwordIcon);
	}

	//sign in with facebook
	signinWithFacebook() {
	}

	getUserDetail(userid) {
	}

	//sign in with google
	signinWithGoogle() {
		console.log('signin with google');
	}

	clearContent() {
		this.userInfo.email = '';
		this.userInfo.pwd = '';
	}

}
