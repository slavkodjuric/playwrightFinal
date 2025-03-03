import { test, expect } from "@playwright/test";
import { generateUserCredentials, URLS } from "../../fixtures";
import { LoginPage } from "../../POM/modules/UI/loginUI.js";
import { RegisterPage } from "../../POM/modules/UI/registerUI.js";
import { Dashboard } from "../../POM/modules/UI/dashboard.js";
test.describe("Login user using UI", () => {
  let loginPage;
  let registerPage;
  let dashboard;
  let email1, username1, password1, userData;
  test.beforeEach("visit the login page", async ({ page }) => {
    registerPage = new RegisterPage(page);
    loginPage = new LoginPage(page);
    dashboard = new Dashboard(page);
    await page.goto(URLS["REGISTER"]);
    await expect(page).toHaveURL(URLS["REGISTER"]);
    userData = generateUserCredentials(6);
    username1 = userData.username;
    email1 = userData.email;
    password1 = userData.password;

    await registerPage.register(username1, email1, password1);

    await dashboard.hamburgerMenu.click();
    await dashboard.logOutButton.click();

    await expect(page).toHaveURL("/");
    await dashboard.loginButton.click();
  });

  test("Login user with valid credentials", async ({ page }) => {
    await expect(page).toHaveURL(URLS["LOGIN"]);
    loginPage.login(email1, password1);

    await page.waitForURL(URLS["DASHBOARD"]);
    await expect(page).toHaveURL(URLS["DASHBOARD"]);
  });
});
