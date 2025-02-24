export class Dashboard {
  constructor(page) {
    this.page = page;
    this.loginButton = page.getByRole("link", { name: "Log in", exact: true });
    this.hamburgerMenu = page.locator(".relative > div > span > .inline-flex");
    this.logOutButton = page.getByRole("button", { name: "Log Out" });
  }
}
