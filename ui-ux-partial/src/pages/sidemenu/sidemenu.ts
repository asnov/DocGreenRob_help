import { Component, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AlertController, IonicPage, LoadingController, Nav, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SigninPage } from '../signin/signin';

@IonicPage()
@Component({
	selector: 'page-sidemenu',
	templateUrl: 'sidemenu.html',
})
export class SidemenuPage {
	@ViewChild(Nav) nav: Nav;
	rootPage: any = HomePage;

	pages: Array<{ image: string, title: string, component: any, class: string }>;
	photoUrl: any = "assets/imgs/logo.png"
	username: any;
	displayName: any;
	userTypes: any;
	userID: any;
	UserUserTyes: any = [];
	isOwner: boolean = false;
	isPrivateLabeler: boolean = false;
	isPrivateLabelerUser: boolean = false;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public alertCtrl: AlertController,
		public loadingCtrl: LoadingController,
		private storageCtrl: Storage
	) {

		this.storageCtrl.get("displayName").then((displayName) => {
			this.displayName = displayName
		});

		this.storageCtrl.get("userTypes").then((userTypes) => {
			this.userTypes = userTypes
		});

		this.getUserTypes();
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad SidemenuPage');
		this.viewPage();
	}

	viewPage() {
		this.pages = [
			//{ image: 'assets/imgs/menu/home.svg', title: 'Home', component: HomePage},
			// { image: 'assets/imgs/menu/settings.svg', title: 'Account Settings', component: SettingPage },

			{ image: 'assets/imgs/menu/logout.svg', title: 'Logout', component: null, class: 'logout' },
		];
	}

	openPage(page) {
		if (page.component === null) {
			this.alertCtrl.create({
				title: "Confrim",
				message: "Are you sure want to Logout?",
				buttons: [{
					text: "Cancel",
					role: 'cancel',
					handler: () => {
						return;
					}
				},
				{
					text: "Ok",
					cssClass: "signout",
					handler: () => {
						this.storageCtrl.clear();
						localStorage.clear();
						this.navCtrl.setRoot(SigninPage)
					}
				}
				]
			}).present();
			return;
		} else if (page.component === HomePage) {
			this.nav.setRoot(HomePage);
		} else {
			this.nav.push(page.component);
		}
	}

	getUserTypes() {
		this.storageCtrl.get("userTypes").then((currentUserUserTypes) => {
			this.UserUserTyes = currentUserUserTypes;

			for (let userType of this.UserUserTyes) {

				if (userType.Name.toLowerCase() === 'owner') {
					this.isOwner = true;
				}

				if (userType.Name.toLowerCase() === 'privatelabeluser') {
					this.isPrivateLabelerUser = true;
				}

			}

			if (this.isOwner) {
				this.pages.push({
					image: 'assets/imgs/menu/account.svg',
					title: 'Authorization',
					component: null,
					class: 'authorization'
				});
			}

			if (this.isPrivateLabelerUser || this.isPrivateLabeler) {
				this.pages.push({
					image: 'assets/imgs/menu/settings.svg',
					title: 'Private Labeler Manager',
					component: null,
					class: 'private-labeler-manager'
				});
			}

			this.pages.push({
				image: 'assets/imgs/menu/settings.svg',
				title: 'Help',
				component: null,
				class: 'help'
			});
		})
	}
}
