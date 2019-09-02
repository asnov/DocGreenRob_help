import { Page } from './signin.po';

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
            const title = await page.getTitle();
            expect(title).toEqual('Ionic App');
        });

        it('should login a valid user', async () => {
            await page.enterEmail('test-owner');
            await page.enterPassword('abc@123');
            await page.clickLogin();

            //need to wait to give page time to load...
            // await page.waitForTheTitle('Home');
            // await page.sleep(5000);

            const title = await page.getPageTitle();
            expect(title).toEqual('Home');
        });

    })
});
