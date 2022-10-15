<template>
  <div class="dialog" :class="{show: show}" @click="hideDialog">
    <div @click.stop class="dialog__content">
        <slot></slot>
    </div>
  </div>
</template>

<script>
import toggleMixin from '@/mixins/toggleMixin';

export default {
    name: 'dialog-module',
    mixins: [toggleMixin],
    mounted() {
        console.log('Dialog mounted')
    }
}
</script>

<style lang="scss" scoped>
$white: #ffffff;

.dialog {
    display: flex;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 10000;
    background: rgba(0, 0, 0, .4);

    &__content {
        display: flex;
        flex-direction: column;
        align-items: center;

        gap: .5rem;
        border-radius: .4rem;
        padding: 1rem;

        margin: auto;
        background: $white;
    }
    
    &:not(.show) {
        display: none;
    }
}

</style>