<template>
  <svg
    width="92"
    height="92"
    viewBox="0 0 92 92"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M27.14 42.11L46.025 61L84.4 22.625C76.5 9.675 62.28 1 46 1C21.145 1 1 21.145 1 46C1 70.855 21.145 91 46 91C69.16 91 88.215 73.5 90.705 51"
      :stroke="clr ? clr : '#4D88FF'"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
<script>
export default {
  name: "RegisterCompletedIcon",
  props: ["clr"],
};
</script>

<style scoped></style>