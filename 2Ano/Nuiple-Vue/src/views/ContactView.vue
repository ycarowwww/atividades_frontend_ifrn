<script setup>
  import SocialMedia from '@/components/SocialMedia.vue';
</script>

<template>
  <h2>Contate-nos</h2>
  
  <section>
    <form>
      <input type="text" name="input-full-name" id="input-full-name" placeholder="Nome Completo" required>
      <input type="email" name="input-email" id="input-email" placeholder="E-mail" required>
      <textarea name="input-message" id="input-message" placeholder="Mensagem" rows="5" required></textarea>
      <button type="submit">Contate-nos</button>
    </form>

    <div class="contacts">
      <h2>Contato</h2>

      <ul>
        <li>suporte@nuiple.com</li>
        <li>+55 84 99876-5432</li>
        <li>295, Avenida 23 de Maio, Obelisco do Ibirapuera, São Paulo - 04001-000</li>
        <li>Segundo - Sexta --- 09:00 - 18:00</li>
      </ul>

      <SocialMedia class="social-media-contacts" />
    </div>
  </section>
</template>

<style scoped>
  h2 {
    color: var(--fg-color-1);
    text-align: center;
    font-size: 2rem;
    margin-block: 2rem;
  }

  section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    max-width: 940px;
    padding: 2rem;
    border: 3px solid var(--fg-color-2);
    margin-inline: auto;
  }

  form textarea {
    resize: none;
  }

  form :where(input, textarea) {
    display: block;
    color: var(--fg-color-1);
    font-size: 1.25rem;
    width: 100%;
    padding: .3rem;
    border-radius: .3rem;
    margin-bottom: 1rem;
    background-color: var(--bg-color-3);
    box-shadow: 0 0 2px var(--shadow);
    transition: box-shadow .3s ease;
  }

  form :where(input, textarea)::placeholder {
    color: var(--fg-color-2);
  }

  form :where(input, textarea):focus {
    box-shadow: 0 0 4px var(--fg-color-1);
  }

  form button {
    display: block;
    color: var(--fg-color-1);
    font-size: 1.25rem;
    font-weight: bold;
    width: 100%;
    padding-block: .3rem;
    border-radius: .3rem;
    background-color: var(--highlight-color);
    box-shadow: 0 0 2px var(--shadow);
    transition: background-color .3s ease;
    cursor: pointer;
  }

  form button:hover {
    background-color: var(--highlight-color-hover);
  }

  .contacts h2 {
    text-align: left;
    margin-block: 0 1rem;
  }

  .contacts li {
    color: var(--fg-color-1);
    font-size: 1.25rem;
  }

  .social-media-contacts {
    margin-top: 1rem;
    justify-content: left;
  }
</style>