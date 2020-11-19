<template>
<div>
    <figure :class="style">
        <slot></slot>
        <figcaption>{{ caption }}</figcaption>
    </figure>
</div>
</template>

<script>
export default {
    props: {
        caption:    {type: String, required: false},
        noshadow: {type: Boolean, required: false, default: false}
    },
    computed: {
        style() {
            return this.noshadow ? '' : 'shadow';
        }
    }
}
</script>

<style lang="stylus" scoped>
figure
    text-align center

figcaption
    font-size 0.8em

img
    display block
    margin-left auto
    margin-right auto
    border-width 10px

.shadow    
    img 
       box-shadow 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)

</style>

