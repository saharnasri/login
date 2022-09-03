export default {
  name: "register",
  components: {},
  props: [],
  data() {
    return {
      valid: false,
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
    };
  },
  computed: {},
  mounted() {},
  methods: {
    submitFrom() {
      this.$refs.registerForm.validate();
    },
  },
};
