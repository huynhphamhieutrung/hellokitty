<template>
  <div id=body>
      <AppLeft/> 
      <AppRight/> 
  </div>
</template>

<script>
import AppLeft from '~/components/AppLeft.vue'
import AppRight from '~/components/AppRigth.vue'

export default {
  layout: 'default',
  components: {
    AppLeft,
    AppRight,
  }
}
</script>

<style>
</style>
