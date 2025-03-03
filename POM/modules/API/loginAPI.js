export class LoginAPI {
  constructor(page) {
    this.page = page;
  }

  async login(email, password) {
    let response = await this.page.request.post("/api/v1/auth/login", {
      data: { email: email, password: password },
      headers: { Accept: "application/json" },
    });
    let responseJSON = await response.json();

    return responseJSON;
  }
}

// {
//     "cardholder": "John Doe",
//     "card_type": "Visa",
//     "card_number": "4111111111111111",
//     "cvv": 123,
//     "card_expiration_date": "12/24"
//   }
