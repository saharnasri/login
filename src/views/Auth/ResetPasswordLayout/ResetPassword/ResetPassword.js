export default {
  name: "reset-password",
  components: {},
  props: [],
  data() {
    return {
      valid: false,
      form: {
        email: "",
      },
      showPassword: false,
      requiredRule: [(v) => !!v || "this filed is required"],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
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
