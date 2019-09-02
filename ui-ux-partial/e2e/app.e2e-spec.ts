import { Page } from './app.po';

describe('App', () => {
	let page: Page;

	beforeEach(() => {
		page = new Page();
	});

	describe('Sign-In page', () => {
		beforeEach(() => {
			page.navigateTo('/');
		});

		it('should have a title saying Ionic App', async () => {
			await page.getTitle().then(x => {
				expect(x).toEqual('Ionic App');
			});
		});

		it('should login a valid user', async () => {
			//page.doTest();
			
			// page.getElementTextByClass().then(x => {
			// 	expect(x).toEqual('Home');
			// });

			await page.enterText('USER-NAME', 'test-owner');
			await page.enterText('PASSWORD', 'abc@123');
			await page.clickButton('LOGIN');

			//need to wait to give page time to load...
			setTimeout(async function () {
				await page.getElementTextByClass('TEXT').then(x => {
					expect(x).toEqual('Home');
				});
			}, 2000);

		});
		
	})
});
