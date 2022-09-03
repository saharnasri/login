
export default {
  name: "authBanner",
  props: [],
  data() {
    return {
      logo: require("../../../../public/images/logo-small.svg"),
    };
  },
  computed: {
  },
  watch: {
  },
  mounted() {},
  methods: {
    closeSearchBar() {
      this.openSearchBar = !this.openSearchBar;
    },
  },
};
