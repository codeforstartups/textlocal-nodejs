const axios = require("axios");
//const user = {name: "Prabhat", phone: "917908679275"};

const tlClient = axios.create({
  baseURL: "https://api.textlocal.in/",
  params: {
    apiKey: "NDY2ODZjNGU2MzQyNzg3YTYxMzk3OTU5NDc3MDQyNTk=", //Text local api key
    sender: "SkuGal"
  }
});

const smsClient = {
  sendPartnerWelcomeMessage: user => {
    if (user && user.phone && user.name) {
      const params = new URLSearchParams();
      params.append("numbers", [parseInt("91" + user.phone)]);
      params.append(
        "message",
        `Dear ${user.name}, this is to inform you that ( ${user.name}) Skugal.`,
      );
      tlClient.post("/send", params);
    }
  },
  sendVerificationMessage: user => {
    if (user && user.phone) {
      const params = new URLSearchParams();
      params.append("numbers", [parseInt("91" + user.phone)]);
      params.append(
        "message",
        `Your iWheels verification code is ${user.verifyCode}`
      );
      tlClient.post("/send", params);
    }
  }
};

module.exports = smsClient;
