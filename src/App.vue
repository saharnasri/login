<template>
  <v-app class="poppins">
    <v-row no-gutters>
      <v-col cols="8"><AuthBanner /></v-col>
      <v-col cols="4">
        <v-main class="fill-height">
          <router-view />
        </v-main>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import AuthBanner from "@/components/Layout/AuthBanner";
export default {
  name: "App",
  components: {
    AuthBanner,
  },
  data: () => ({
    //
  }),
};
</script>
