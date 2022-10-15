<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'primary-button'
  }
</script>

<style lang="scss" scoped>
$primary: #42b983;
$white: #ffffff;

.btn {
  &.nav__link {
    border: none;
    transition: .3s;

    box-shadow: none;

    &:focus {
      box-shadow: none;
    }
  }

  cursor: pointer;
  padding: .4rem 2.5rem;
  background: transparent;
  outline: none;

  max-width: 15rem;
  width: 100%;

  transition: .3s;

  border: .1rem solid $primary;
  font-weight: 500;

  &:hover {
      color: $white;
      background: $primary;
  }
  
  &:focus {
    box-shadow: 0 0 2px $primary,
                0 0 5px $primary,
                0 0 7px $primary,
                0 0 10px $primary
  }
}
</style>