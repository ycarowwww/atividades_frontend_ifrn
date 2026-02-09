<script setup>
  import { ref } from 'vue';
  
  const enrollment = ref('');
  const name = ref('');
  const password = ref('');
  const classroom = ref('');
  const studentCreated = ref(false);
  
  function saveStudent() {
    let data = localStorage.getItem('students');
    data = data ? JSON.parse(data) : [];

    const student = {
      enrollment: enrollment.value,
      name: name.value,
      password: password.value,
      classroom: classroom.value
    };
    data.push(student);
    localStorage.setItem('students', JSON.stringify(data));

    studentCreated.value = true;
    setTimeout(() => {
      studentCreated.value = false;
    }, 1000);
  }
</script>

<template>
  <h2>Cadastrar Aluno</h2>

  <form>
    <label for="enrollment-student">Matrícula do Estudante</label>
    <input type="text" name="enrollment-student" id="enrollment-student" placeholder="Matrícula" v-model="enrollment">

    <label for="name-student">Nome do Estudante</label>
    <input type="text" name="name-student" id="name-student" placeholder="Nome" v-model="name">

    <label for="password-student">Senha do Estudante</label>
    <input type="password" name="password-student" id="password-student" placeholder="Senha" v-model="password">

    <label for="classroom-student">Turma do Estudante</label>
    <input type="text" name="classroom-student" id="classroom-student" placeholder="Turma" v-model="classroom">

    <button type="submit" @click.prevent="saveStudent">Cadastrar</button>
  </form>

  <p class="student-created" v-if="studentCreated">Aluno Cadastrado com Sucesso!</p>
</template>

<style scoped>
  h2 {
    color: #f0f0f0;
    text-align: center;
  }

  label {
    display: block;
    color: #f0f0f0;
  }

  input {
    display: block;
    color: #f0f0f0;
    font-size: 1.1rem;
    padding: .3rem;
    border-radius: .3rem;
    margin-block: .5rem 1.5rem;
    width: 100%;
    background-color: #404040;
    box-shadow: 0 0 2px rgba(0, 0, 0, .5);
  }

  input:focus {
    background-color: #454545;
  }

  button {
    color: #f0f0f0;
    font-size: 1.1rem;
    padding: .3rem;
    border-radius: .3rem;
    background-color: #576a8d;
    box-shadow: 0 0 2px rgba(0, 0, 0, .5);
    cursor: pointer;
  }

  button:hover {
    background-color: #445675;
  }

  .student-created {
    color: #f0f0f0;
    padding: 1rem;
    border-radius: .5rem;
    margin-top: 1.5rem;
    background-color: #022e04;
    box-shadow: 0 0 2px rgba(0, 0, 0, .5);
  }
</style>
