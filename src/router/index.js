import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: `/auth`,
  },
  {
    path: "/auth",
    // redirect: "/auth/login",
    meta: { transitionName: "slide" },
    component: () => import(/* webpackChunkName: "auth" */ "@/views/Auth"),
    children: [
      {
        path: "/",
        name: "check-mobile",
        meta: { transitionName: "slide" },
        component: () => 
          import(
            /* webpackChunkName: "check-mobile" */ "@/views/Auth/CheckMobile"
          ),
      },
      {
        path: "login",
        name: "login-layout",
        meta: { transitionName: "slide" },
        component: () =>
          import(
            /* webpackChunkName: "login-layout" */ "@/views/Auth/LoginLayout"
          ),
        children: [
          {
            path: "/",
            name: "login",
            meta: { transitionName: "slide" },
            component: () =>
              import(
                /* webpackChunkName: "Login" */ "@/views/Auth/LoginLayout/Login"
              ),
          },
        ],
      },
      {
        path: "reset-password",
        name: "reset-password-layout",
        meta: { transitionName: "slide" },
        component: () =>
          import(
            /* webpackChunkName: "ResetPasswordLayout" */ "@/views/Auth/ResetPasswordLayout"
          ),
        children: [
          {
            path: "/",
            name: "reset-password",
            meta: { transitionName: "slide" },
            component: () =>
              import(
                /* webpackChunkName: "ResetPassword" */ "@/views/Auth/ResetPasswordLayout/ResetPassword"
              ),
          },
          {
            path: "otp",
            name: "reset-password-otp",
            meta: { transitionName: "slide" },
            component: () =>
              import(
                /* webpackChunkName: "ResetPasswordOTP" */ "@/views/Auth/ResetPasswordLayout/OTP"
              ),
          },
          {
            path: "change-password",
            name: "change-password",
            meta: { transitionName: "slide" },
            component: () =>
              import(
                /* webpackChunkName: "ChangePassword" */ "@/views/Auth/ResetPasswordLayout/ChangePassword"
              ),
          },
          {
            path: "completed",
            name: "reset-password-completed",
            meta: { transitionName: "slide" },
            component: () =>
              import(
                /* webpackChunkName: "ResetPasswordCompleted" */ "@/views/Auth/ResetPasswordLayout/Completed"
              ),
          },
        ],
      },
      {
        path: "register",
        name: "register-layout",
        meta: { transitionName: "slide" },
        component: () =>
          import(
            /* webpackChunkName: "RegisterLayout" */ "@/views/Auth/RegisterLayout"
          ),
        children: [
          {
            path: "/",
            name: "register",
            meta: { transitionName: "slide" },
            component: () =>
              import(
                /* webpackChunkName: "Register" */ "@/views/Auth/RegisterLayout/Register"
              ),
          },
          {
            path: "otp",
            name: "register-otp",
            meta: { transitionName: "slide" },
            component: () =>
              import(
                /* webpackChunkName: "RegisterOTP" */ "@/views/Auth/RegisterLayout/OTP"
              ),
          },
          {
            path: "information",
            name: "register-information",
            meta: { transitionName: "slide" },
            component: () =>
              import(
                /* webpackChunkName: "RegisterInformation" */ "@/views/Auth/RegisterLayout/Information"
              ),
          },
          {
            path: "completed",
            name: "register-completed",
            meta: { transitionName: "slide" },
            component: () =>
              import(
                /* webpackChunkName: "RegisterCompleted" */ "@/views/Auth/RegisterLayout/Completed"
              ),
          },
        ],
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
