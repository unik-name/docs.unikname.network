<!-- themePath/layouts/GlobalLayout.vue -->
<template>
  <div id="global-layout">
    <component :is="layout"/>
  </div>
</template>

<script>
export default {
  computed: {
    layout () {
      if (this.$page.path) {

        if (this.$frontmatter.layout) {
          // You can also check whether layout exists first as the default global layout does.
          return this.$frontmatter.layout
        }
        return 'Layout'
      }
      return 'NotFound'
    }
  }
}
</script>