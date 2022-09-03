<template>
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.6665 10.6666L21.3332 21.3333" :stroke="clr" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M21.3332 10.6666L10.6665 21.3333" :stroke="clr" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>

<script>
export default {
  name: 'CloseIcon',
  props: ['clr']
}
</script>

<style scoped>

</style>
