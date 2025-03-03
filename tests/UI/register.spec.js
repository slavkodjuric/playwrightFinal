import { test, expect } from "@playwright/test";
import { generateUserCredentials } from "../../fixtures";
import { URLS } from "../../fixtures";
import { RegisterPage } from "../../POM/modules/UI/registerUI";

test.describe("register user using UI", () => {
  let registerPage;
  const { username, email, password } = generateUserCredentials(5);
  test.beforeEach("visit the login page", async ({ page }) => {
    registerPage = new RegisterPage(page);
    await page.goto(URLS["REGISTER"]);
  });

  test("Register a user with valid data using UI", async ({ page }) => {
    await expect(page).toHaveURL(URLS["REGISTER"]);
    await registerPage.register(username, email, password);

    await expect(page).toHaveURL(URLS["DASHBOARD"]);
  });
});
