<template>
  <!-- span class="unikname"><a :href="href()">{{ id }}</a></span -->
  <span class="unikname">{{ id }}</span>
</template>

<script>
export default {
    props: { 
      id: {type: String}
    },
    methods: {
      href: function() {
        return "https://unikname.id/" + this.id
      }
    }
}
</script>

<style lang="stylus" scoped>

.unikname
  background-color: #f6f8fa
  color: #293984
  font-weight: 500
  margin: 1px 
  padding: 0px 10px 2px 8px 
  border-radius: 5px
  border-style: solid 
  border-width: 0.5px
  a
    color: #293984    

</style>

