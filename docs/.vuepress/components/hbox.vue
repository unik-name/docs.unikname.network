<template>
<div class="hbox"><slot></slot></div>
</template>

<script>
</script>

<style lang="stylus" scoped>
.hbox
    padding-left: 25px

    th
        text-align left
        vertical-align top
        font-weight 400
        border-left unset
        border-right unset
    tr
        text-align left
        vertical-align top
        font-weight 400
    
    td
        border-left unset
        border-right unset   
    
    tr:nth-child(even) {background-color: #fff;}

</style>

