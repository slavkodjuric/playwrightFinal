export class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInputField = page.locator("#email");
    this.passwordInputField = page.locator("#password");
    this.submitButton = page.locator("button");
  }
  async login(email, password) {
    await this.emailInputField.fill(email);
    await this.passwordInputField.fill(password);
    await this.submitButton.click();
  }
}
