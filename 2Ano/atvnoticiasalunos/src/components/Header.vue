<template>
  <header>
    <h1>Logo</h1>

    <nav>
      <ul>
        <li><RouterLink to="/">Listar</RouterLink></li>
        <li><RouterLink to="/create">Cadastrar</RouterLink></li>
        <li><RouterLink to="/update">Atualizar</RouterLink></li>
        <li><RouterLink to="/delete">Deletar</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    color: #f0f0f0;
    padding-inline: 2rem;
    background-color: #303030;
    box-shadow: 0 0 2px rgba(0, 0, 0, .5);
  }

  header h1 {
    align-self: center;
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: stretch;
    gap: .5rem;
  }

  ul a {
    color: #f0f0f0;
    text-decoration: none;
    display: inline-block;
    padding: 1.5rem 1rem;
  }

  ul a:hover {
    text-decoration: underline;
    background-color: #505050;
  }
</style>
