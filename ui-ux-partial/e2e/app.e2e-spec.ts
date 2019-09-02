import { Page } from './signin.po';

describe('App', () => {
    let page: Page;

    beforeEach(() => {
        page = new Page();
    });

    describe('Sign-In page', () => {
        beforeEach(async () => {
            await page.navigateTo('/');
        });

        it('should have a title saying Ionic App', async () => {
            expect(await page.getTitle()).toEqual('Ionic App');
        });

        it('should login a valid user', async () => {
            await page.enterEmail('test-owner');
            await page.enterPassword('abc@123');
            await page.clickLogin();

            //need to wait to give page time to load...
            // await page.waitForTheTitle('Home');
            // await page.sleep(5000);

            expect(await page.getPageTitle()).toEqual('Home');
        });

    })
});
