import { API } from "@/services/config/main-axios";

class AuthService {
  checkMobile(mobileNumber) {
    return API.post("/register/check/mobile", {
      mobile: mobileNumber
    });
  }
}

export default new AuthService();
