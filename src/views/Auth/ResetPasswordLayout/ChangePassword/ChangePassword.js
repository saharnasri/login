export default {
  name: "change-password",
  components: {},
  props: [],
  data() {
    return {
      valid: false,
      isFocused: false,
      isBlurred: false,
      form: {
        email: "",
        firstName: "",
        lastName: "",
        companyName: "",
        country: "",
        password: "",
        repeatPassword: "",
        acceptTerms: false,
      },
      showPassword: false,
      countries: ["Bahrain", "Cameroon", "iran", "France"],
      requiredRule: [(v) => !!v || "this filed is required"],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      passwordRules: [(v) => !!v || "Password is required"],
      repeatPasswordRules: [
        (v) => !!v || "RepeatPassword is required",
        (v) => v === this.form.password || "Does not match password",
      ],
      acceptTermsRules: [(v) => !!v || "You have to accept Terms of Service"],
      regexErrors: [],
      matchedCase: [
        {
          regex: "^(?=.*?[A-Za-z])(.*)$",
          message: "A mixture of both uppercase and  lowercase letters.",
          name_locale: "حرف",
          type: "word",
        },
        {
          regex: "^(?=.*?[0-9])(.*)$",
          message: "A mixture of letters and numbers.",
          name_locale: "عدد",
          type: "digit",
        },
        {
          regex: "^(?=.*?[!@#$%^&*()\\-_=+{};:,<.>])(.*)$",
          message: "Contain at least one special character,e.g., ! @ # ? ]",
          name_locale: "کاراکتر مخصوص",
          type: "specialCharacter",
        },
        {
          regex: "^(?=.{8,}$)(.*)$",
          message: "Be at least 8 characters",
          name_locale: "طول رمز عبور",
          type: "passwordLength",
        },
      ],
    };
  },
  computed: {},
  mounted() {},
  methods: {
    submitFrom() {
      this.$refs.registerForm.validate();
    },
    validatePassword(value) {
      this.regexErrors = [];
      this.matchedCase.forEach((elem) => {
        if (value.match(elem.regex)) {
          if (this.isFocused) {
            elem.status = "checked";
          }
          this.regexErrors.push(elem);
        } else {
          if (this.isFocused) {
            elem.status = "default";
          }
          this.regexErrors.push(elem);
        }
      });
    },
    reInitValidation(event) {
      if (event.type === "focus") {
        this.validatePassword(this.form.password);
        this.isFocused = true;
        this.regexErrors = [...this.matchedCase];
      }
    },
  },
};
