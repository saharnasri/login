export default {
  name: "login",
  components: {},
  props: [],
  data() {
    return {
      valid: false,
      form: {
        email: "",
        password: "",
      },
      showPassword: false,
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
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
