import { AuthService } from "@/services";

export default {
  name: "check-mobile",
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
        (v) => /^0[1-9]\d{9}$/g.test(v) || "شماره موبایل معتبر وارد کنید.",
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
      if (this.$refs.checkMobileForm.validate()) {
        AuthService.checkMobile(this.form.phoneNumber).then((res) => {
          console.log("res", res.data);
          if(res.data.status === 0) {
            this.$router.push("/auth/login");
          } else if ( res.data.status === 1) {
            console.log('send otp');
          } else {
            console.log('wrong no');
          }
        });
      }
    },
  },
};
