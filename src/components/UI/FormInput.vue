<template>
  <input 
    type="text"
    class="input"
    :value="modelValue"
    @input="updateInput"
  >
</template>

<script>
export default {
  name: 'form-input',
  props: {
      modelValue: [String, Number]
  },
  methods: {
      updateInput() {
        this.$emit('update:modelValue', event.target.value)
      }
  },
}
</script>

<style lang="scss" scoped>

$primary: #42b983;

.input {
  width: 100%;

  border: .1rem solid $primary;
  outline: none;

  padding: .5rem;
  transition: .3s;

  &:focus {
    box-shadow: 0 0 2px $primary,
                0 0 5px $primary,
                0 0 7px $primary,
                0 0 10px $primary
  }
}
</style>