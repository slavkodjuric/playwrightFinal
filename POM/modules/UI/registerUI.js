export class RegisterPage {
  constructor(page) {
    this.page = page;
    this.usernameInputField = page.locator("#username");
    this.emailInputField = page.locator("#email");
    this.passwordInputField = page.locator("#password");
    this.submitButton = page.locator("button");
  }

  async register(username, email, password) {
    await this.usernameInputField.fill(username);
    await this.emailInputField.fill(email);
    await this.passwordInputField.fill(password);
    await this.submitButton.click();
  }
}
