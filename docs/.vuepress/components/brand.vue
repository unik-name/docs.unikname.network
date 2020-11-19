<template>
    <span :class="this.name" :title="title()">{{ fullBrandName() }}</span>
</template>

<script>
export default {
    props: { name: {type: String} },
    methods: {
      fullBrandName: function () {
        switch (this.name.trim().toLowerCase()) {
          case 'uns': return 'uns.network';
          case 'unc': return 'Unikname Connect';
          default: return 'Unikname™';
        }
      },
      title: function () {
        switch (this.name.trim().toLowerCase()) {
          case 'uns': return 'Universal Name System Network: The Unikname Blockchain';
          case 'unc': return "Unikname Connect: The next-generation authentication solution";
          default: return "Unikname™ is a set of user friendly cyber-solutions aiming of securing internet platforms and protecting user's privacy.";
        }
      }
    }
}
</script>

<style lang="stylus" scoped>

.uns
  color #293984
  // color #4DCFCA
  font-weight 500

.unikname
  color #293984
  // color #0F2046
  font-weight 500

.UNC, .unc
  color #293984
  font-weight 500

</style>

