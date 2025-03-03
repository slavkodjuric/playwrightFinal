export class ShippingInfoAPI {
  constructor(page) {
    this.page = page;
  }

  async shippingInfoUpdate(
    userID,
    token,
    firstName,
    lastName,
    emailNuevo,
    streetAndNumber,
    phoneNumber,
    cityNuevo,
    postalCode,
    countryNuevo
  ) {
    let response = await this.page.request.put(
      `/customers/${userID}/shipping-info`,
      {
        data: {
          first_name: firstName,
          last_name: lastName,
          email: emailNuevo,
          street_and_number: streetAndNumber,
          phone_number: phoneNumber,
          city: cityNuevo,
          postal_code: postalCode,
          country: countryNuevo,
        },
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    let responseJSON = response.json();
  }
}
