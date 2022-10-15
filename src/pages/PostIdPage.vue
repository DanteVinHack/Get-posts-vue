<template>
  <div class="article">
    <article class="article__container">
      <h1>Это страница поста с ID: {{ $route.params.id }}</h1>

      <hr class="article__line">

      <p><b>Name:</b> {{ $route.params.title }}</p>
      <p><b>Description:</b> {{ $route.params.body }}</p>
    </article>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.article {
  min-width: 100vw;
  height: 100%;

  &__container {
    display: block;
    width: 700px;

    padding: 1rem 2rem;
    margin: 0 auto;

    border: .1rem solid #42b983;

  }

  &__line {
    height: 3px;
    background: #42b983;
    color: #42b983;

    border: none;
  }
}
</style>