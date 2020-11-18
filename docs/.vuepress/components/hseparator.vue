<template>
<img src="/logo.png" class="hseparator" :style="{ 'padding-top': y, 'padding-bottom': y }"/>
</template>

<script>
export default {
    props: { 
        y: {type: String, default: "40px"},  
    }
}
</script>

<style lang="stylus" scoped>
.hseparator
  display: block;
  margin-left: auto;
  margin-right: auto;
</style>

