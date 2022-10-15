<template>
<header class="header">
    <nav class="nav">

        <primary-button 
            class="nav__link"
            @click="$router.push('/')"
        >
            Main
        </primary-button>

        <primary-button
            class="nav__link"
            @click="$router.push('/about')"
        >
            About
        </primary-button>

        <primary-button
          class="nav__link"
          @click="$router.push('/store')"
        >
          Store
        </primary-button>

        <primary-button
            class="nav__link"
            @click="$router.push('/posts')"
        >
            Posts
        </primary-button>

    </nav>
</header>
</template>

<script>
export default {
    name: 'nav-bar'
}
</script>

<style lang="scss">
.header {
  width: 100vw;
}

.nav {
  display: flex;
  gap: 10px;
  
  list-style: none;

  padding: 1rem;

  &__link {
    position: relative;

    font-family: 'Poppins', serif;

    color: #000;
    text-decoration: none;
    font-size: 20px;
    letter-spacing: 5px;

    transition: .3s;

    padding: .5rem;


    &::after {
      content: '';
      position: absolute;
      z-index: -1;
      inset: 92% 0 0 0;

      background: #42b983;
      transition: .3s;
    }

    &:hover {
      color: #fff;
    }

    &:hover::after {
      inset: 0 0 0 0;
    }
  }
}
</style>