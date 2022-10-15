<template>
  <div 
    v-for="pageNumber in totalPages" 
    :key="pageNumber" 
    :class="{
        'current-page': page === pageNumber, 
        page: true}"
    @click="changePage(pageNumber)"
  >
    {{ pageNumber }}
  </div>
</template>

<script>
export default {
    name: 'page',
    props: {
        totalPages: Number,
        page: Number,
    },
    methods: {
        changePage(page) {
            this.$emit('change', page)
        }
    }
}
</script>

<style lang="scss">
.page {
    cursor: pointer;
    padding: .5rem 1rem;
    border: .1rem solid #42b983;

    transition: .3s;

    &:hover {
        color: white;
        background: #42b983;
    }
}

.current-page {
  background: #42b983;
  color: white;
}
</style>