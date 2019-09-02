import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Storage } from "@ionic/storage";
import { AlertController, LoadingController, NavController } from "ionic-angular";

@Component({
	selector: "page-home",
	templateUrl: "home.html"
})

export class HomePage {
	simple: any;
	//setflag: boolean = false;
	user: any = {};
	//mailFlag: boolean = false;
	showMailFlag: boolean = false;
	availableUserTypes: any = [];
	userID: any = "";
	userName: any = "";
	ownerProperty = [];
	ownerMailingAddressState = false;
	//show is default
	isDefaultFlag: boolean = false;
	sameAsMailingAddress: boolean = false;
	notifications: any = [];
	interval: any;
	allAvailableUserTypes: any = [];
	userUserTypes: any = [];
	loader: any;
	companyTypes: any = [];
	currentUserType: any = {};
	addUserTypeActive: any = false;

	//mailing address form
	topForm = new FormGroup({
		Name: new FormControl(""),
		Id: new FormControl(""),
		StreetAddress1: new FormControl("", [Validators.required]),
		StreetAddress2: new FormControl(""),
		City: new FormControl("", [Validators.required]),
		State: new FormControl("", [Validators.required]),
		Zip: new FormControl("", [Validators.required]),
		MailingAddressType: new FormControl("0"),
		UserId: new FormControl(this.userID)
	});


	///property form for posting property info
	propertyForm = new FormGroup({
		Id: new FormControl(0),
		Customer: new FormGroup({
			Id: new FormControl("0"),
			Name: new FormControl(""),
			Email: new FormControl("")
		}),
		StreetAddress1: new FormControl("", [Validators.required]),
		StreetAddress2: new FormControl(""),
		City: new FormControl("", [Validators.required]),
		State: new FormControl("", [Validators.required]),
		Zip: new FormControl("", [Validators.required]),
		UserId: new FormControl(""),
		Type: new FormControl({}),
		Profiles: new FormControl([]),
		Name: new FormControl(""),
		IsProxy: new FormControl(false),
		IsDefault: new FormControl(false),
		ProxyPropertyId: new FormControl(0),
		UserTypeId: new FormControl([])
	});

	constructor(
	) {

	}

	updateSameAsMailingAddress() {
	}

	showSetting(availableUserType) {
	}


	// Mailing Address

	// save mail address
	saveMail(_availableUserType) {
		

	}

	// show / hide mail content
	showHideMailContent(selectedAvailableUserType) {
	}

	populateCustomerForm(properties: any[]) {
		
	}

	//show /hide property div
	showHidePropertyContent(selectedPage) {
	}

	//if an option has three options hide/show the third option here
	showHideCustomerContent(selectedPage) {
	}

	showSetUp(selectedUserType) {

	}

	toggleFormSelectionView(selectedAvailableUserType) {
		
	}

	//update default propety
	updateDefaultProperty() {
	}

	// go my page
	goMypage() {
	}

	//reset company info/mailing address form
	getMailingAddress(availableUserType) {

	}

	//on selecct of a property from the dropdown
	onPropertySelect(event, pageType) {
		
	}

	//get property default status
	get IsDefault() {
		return this.propertyForm.get("IsDefault").value;
	}

	getProperties(userType) {
		
	}

	//add a new property into the System
	addNewPropertyUpdate() {
	}

	//navigate to property-customer page
	addNewProperty(availableUserType) {
	}

	//post new or existing property and also customers
	async postProperty(_availableUserType) {

		let postPropertyObj = this.propertyForm.value;

		postPropertyObj.IsProxy = this.propertyForm.value.IsProxy;
		postPropertyObj.IsDefault = this.propertyForm.value.IsDefault;
		postPropertyObj.Type = _availableUserType.type;
		postPropertyObj.UserId = this.userID;
		postPropertyObj.UserTypeId = [_availableUserType.type.Id];
		postPropertyObj.CurrentUser = this.userName;

		if (this.propertyForm.value.Id == null || this.propertyForm.value.Id == 0) {
			this.propertyForm.value.Customer.Id = 0;
			postPropertyObj.Id = 0;
			//postPropertyObj.Customer.Id = 0;
			postPropertyObj.Profiles = [];
		}

		if (_availableUserType.name.toLowerCase() === 'owner' ||
			_availableUserType.name.toLowerCase() === 'gamer') {
			//ininitiliaze the profiles when its a new property
			this.userDetails
				.postProperty(postPropertyObj)
				.subscribe(async (response: any) => {
					await this.getUserMailingAddressAndProperties();
					this.addNewPropertyUpdate();
					this.alert.showToast("Property was updated.", this.constants.ToastColorGood);
				});
		} else if (_availableUserType.name.toLowerCase() !== 'owner' &&
			_availableUserType.name.toLowerCase() !== 'gamer') {
			this.userDetails
				.postProperty(postPropertyObj)
				.subscribe(async (response: any) => {
					this.loading.closeSimpleLoading();
					await this.getUserMailingAddressAndProperties();

					this.loading.presentSimpleLoading('getting your information and properties/customers...');
					this.addNewPropertyUpdate();
					// Not sure if this belongs here
					// ------>
					this.userDetails
						.getCompanyInformation(this.userID, _availableUserType.id)
						.subscribe((response: any) => {
							if (response) {
								this.ownerMailingAddressState = true;
							}

							let streetAddress2 = response.StreetAddress2;

							this.topForm.patchValue({
								Name: response.Name.trim(),
								Id: response.Id,
								StreetAddress1: response.StreetAddress1.trim(),
								StreetAddress2: (streetAddress2 !== undefined && streetAddress2 !== null && streetAddress2 !== '') ? streetAddress2.trim() : '',
								City: response.City.trim(),
								Zip: response.Zip.trim(),
								State: response.State
							});
							this.loading.closeSimpleLoading();
							this.alert.showToast("Property was updated.", this.constants.ToastColorGood);
						});
					// ------>
				});
		}


	}

	updateUserTypeLocalStorage(userType) {
	}

	// get all available user types
	getAllUserTypes() {
	}

	async getUserMailingAddressAndProperties() {
	}

	//get user notifications
	getNotififications() {}
	
	}
