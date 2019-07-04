<template>
  <div id=body>
      <AppLeft/> 
      <AddPage/> 
  </div>
</template>

<script>
import AppLeft from '~/components/AppLeft.vue'
import AddPage from '~/components/AddPage.vue'

export default {
  components: {
    AppLeft,
    AddPage,
  }
}
</script>

<style>

</style>
