export default {
  name: "login",
  components: {},
  props: [],
  data() {
    return {
      valid: false,
      phoneExample: "۰۹۳۸۸۲۲۴۳۳۵ :مثال",
      form: {
        phoneNumber: "",
      },
      showPassword: false,
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      phoneRules: [
        (v) => !!v || "فیلد الزامی است.",
        (v) => /^0[1-9]\d{9}$/g.test(v) || "شماره موبایل معتبر وارد کنید."
      ],
      passwordRules: [
        (v) => !!v || "password is required",
        (v) => v.length >= 8 || "Min 8 characters",
      ],
    };
  },
  computed: {},
  mounted() {},
  methods: {
    submitFrom() {
      this.$refs.loginForm.validate();
    },
  },
};
