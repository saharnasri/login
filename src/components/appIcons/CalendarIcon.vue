<template>
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.50021 2.99622V5.99747" :stroke="clr" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16.5041 2.99622V5.99747" :stroke="clr" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="2.99609" y="4.49683" width="18.0075" height="16.5069" rx="3" :stroke="clr" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M7 10.9996H17.0042" :stroke="clr" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>

<script>
export default {
  name: 'CalendarIcon',
  props: ['clr']
}
</script>

<style scoped>

</style>
