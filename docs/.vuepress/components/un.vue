<template>
  <span>
    <span v-if="label">@unikname ID: </span>
    <span class="unikname"><a :href="href()">{{ id }}&nbsp;&nbsp;<img src="/chainlink.svg" /></a></span>
  </span>
</template>

<script>
export default {
    props: {
      id: {type: String},
      unikid: {type: String},
      label: {type: Boolean},
    },
    methods: {
      href: function() {
        let xhref = "https://explorer.uns.network/uniks/";
        if (!this.unikid || 0 === this.unikid.length) {
          // xhref = "https://unikname.id/" + this.id
          xhref += this.id;
        } else {
          xhref += this.unikid;
        }
        return xhref;
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

