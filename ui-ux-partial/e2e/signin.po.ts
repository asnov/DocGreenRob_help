import {Page as DefaultPage} from './app.po';

export class Page extends DefaultPage {
    enterEmail = (email: string) => this.enterText('USER-NAME', email);
    enterPassword = (pass: string) => this.enterText('PASSWORD', pass);
    clickLogin = () => this.clickButton('LOGIN');
}
