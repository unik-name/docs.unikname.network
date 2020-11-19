<template>
<img :src="imgsrc()" :height="imgsize()" class="hseparator" :style="{ 'padding-top': y, 'padding-bottom': y }"/>
</template>

<script>
export default {
    props: { 
        y: {type: String, default: "40px"},  
        type: {type: String, default: "unikname"},  
        size: {type: String, default: "small"},  
    },
    methods: {
      imgsrc: function () {
        switch (this.type.trim().toLowerCase()) {
          case 'uns': return '/uns.png';
          case 'unik': return '/unik.png';
          case 'unikname': return '/unikname.svg';
          default: return '/unikname.svg';
        }
      },
      imgsize: function () {
        switch (this.size.trim().toLowerCase()) {
          case 'small': case 'S': return '40px';
          case 'medium': case 'M': return '100px';
          case 'large': case 'L': return '200px';
          default: return '100px';
        }
      }
    }
}
</script>

<style lang="stylus" scoped>
.hseparator
  display: block;
  margin-left: auto;
  margin-right: auto;
</style>

