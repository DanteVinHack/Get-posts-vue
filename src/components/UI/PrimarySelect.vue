<template>
  <select 
        class="form__select" 
        v-model="modalValue"
        @change="changeOption"
    >
    <option value="" disabled>Select filter</option>
    <option 
        v-for="option in options" 
        :key="option.value" 
        :value="option.value"
    >
        {{ option.name }}
    </option>
    <span class="form__triangle"></span>
  </select>
</template>

<script>
export default {
    name: 'primary-select',
    props: {
        modalValue: {
            type: String,
        },
        options: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        changeOption(event) {
            this.$emit('update:modalValue', event.target.value)
        }
    }
}
</script>

<style lang="scss">
    $primary: #42b983;

    .form__select {
        position: relative;
        cursor: pointer;
        border-radius: 0;
        padding: .5rem 1rem .5rem 0.2rem;
        border: .1rem solid $primary;
        background: transparent;

        color: $primary;
        font-weight: bold;

        & option {
            border: .3rem solid $primary;
            background: transparent;
        }
    }
</style>