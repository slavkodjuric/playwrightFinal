import { test, expect } from "@playwright/test";
import { VALID_LOGIN_PAYLOAD } from "../../fixtures";
import {
  generateRandomString,
  generateRandomNumber,
} from "../../fixtures/utils";
import { LoginAPI } from "../../POM/modules/API/loginAPI";
import { messages } from "../../fixtures/messages";
import { ShippingInfoAPI } from "../../POM/modules/API/shippingInfo";

test.describe("Change users billing info", () => {
  let loginAPI;
  let shippingInfoAPI;
  let firstNameNew,
    lastNameNew,
    emailNew,
    streetAndNumberNew,
    phoneNumberNew,
    cityNew,
    postalCodeNew,
    countryNew;
  let userID, bearerToken;
  test.beforeEach("Log the user in", async ({ page }) => {
    loginAPI = new LoginAPI(page);
    shippingInfoAPI = new ShippingInfoAPI(page);
    const responsibile = await loginAPI.login(
      VALID_LOGIN_PAYLOAD["EMAIL"],
      VALID_LOGIN_PAYLOAD["PASSWORD"]
    );
    expect(responsibile.message).toBe(messages["userLoggedIn"]);
    userID = responsibile.user.id;
    bearerToken = responsibile.auth.token;
    firstNameNew = generateRandomString(6);
    lastNameNew = generateRandomString(7);
    emailNew = `${firstNameNew}@email.com`;
    streetAndNumberNew = generateRandomString(14);
    phoneNumberNew = generateRandomNumber(7);
    cityNew = generateRandomString(5);
    postalCodeNew = generateRandomNumber(5);
    countryNew = generateRandomString(6);
  });

  test("Update shipping info", async ({}) => {
    const response = await shippingInfoAPI.shippingInfoUpdate(
      userID,
      bearerToken,
      firstNameNew,
      lastNameNew,
      emailNew,
      streetAndNumberNew,
      phoneNumberNew,
      cityNew,
      postalCodeNew,
      countryNew
    );
    expect(response.message).toBe(messages["shippingInfoSuccess"]);
  });
});
