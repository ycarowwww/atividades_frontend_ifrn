<script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const searchMusic = ref('');

  function submitSearch() {
    if (!searchMusic.value.trim()) return;

    router.push({
      name: 'music',
      query: {
        search: searchMusic.value.trim()
      }
    });
  }
</script>

<template>
  <header>
    <h1>
      <RouterLink to="/">
        <img src="/logo.svg" alt="Logotipo da Nuiple">
      </RouterLink>
    </h1>

    <nav>
      <RouterLink to="/queue">Sua Fila</RouterLink>
      <RouterLink to="/contact">Contato</RouterLink>

      <div class="search-input">
        <input 
          type="search" 
          name="search-music" 
          id="search-music" 
          placeholder="O que deseja ouvir?"
          v-model="searchMusic"
          @keydown.enter="submitSearch"
        />
      </div>
    </nav>
  </header>
</template>

<style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    padding: .5rem 1.5rem;
    background-color: var(--bg-color-1);
    box-shadow: 0 0 2px var(--shadow);
  }

  header h1 {
    margin-right: auto;
  }

  header a {
    display: block;
  }

  header a img {
    height: 2.5rem;
  }

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  nav > a {
    position: relative;
    color: var(--fg-color-1);
    font-size: 1.2rem;
    text-decoration: none;
    transition: color .3s ease;
  }

  nav > a:hover {
    color: var(--highlight-color);
  }

  nav > a::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 100%;
    transform: translateX(-50%);
    width: 0%;
    height: 3px;
    border-radius: 3px;
    background-color: var(--fg-color-1);
    transition: width .3s ease, background-color .3s ease;
  }

  nav > a:hover::before {
    width: 100%;
    background-color: var(--highlight-color);
  }

  nav > a.router-link-exact-active {
    color: var(--highlight-color);
  }

  nav input[type="search"] {
    color: var(--fg-color-1);
    font-size: 1.2rem;
    width: 15rem;
    padding-block: .5rem;
    padding-inline: 2.5rem 1rem;
    border-radius: 99rem;
    background-color: var(--bg-color-3);
    box-shadow: 0 0 2px var(--shadow);
    transition: background-color .3s ease;
  }

  nav input[type="search"]::placeholder {
    color: var(--fg-color-2);
  }

  nav input[type="search"]:focus {
    background-color: var(--bg-color-4);
  }

  .search-input {
    position: relative;
  }

  .search-input::before {
    content: "";
    display: block;
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    width: 1rem;
    aspect-ratio: 1 / 1;
    background: url("/icon_search.svg") no-repeat center / cover;
  }
</style>
