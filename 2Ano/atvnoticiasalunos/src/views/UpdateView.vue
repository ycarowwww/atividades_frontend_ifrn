<script setup>
  import { ref } from 'vue';
  
  let students = localStorage.getItem('students');
  students = students ? JSON.parse(students) : [];
  
  const enrollment = ref('');
  const name = ref('');
  const password = ref('');
  const classroom = ref('');
  const studentUpdated = ref(false);
  
  function saveStudent() {
    const studentID = students.findIndex(student => student.enrollment === enrollment.value);
    const student = {
      enrollment: enrollment.value,
      name: name.value,
      password: password.value,
      classroom: classroom.value
    };
    students[studentID] = student;
    localStorage.setItem('students', JSON.stringify(students));

    studentUpdated.value = true;
    setTimeout(() => {
      studentUpdated.value = false;
    }, 1000);
  }
</script>

<template>
  <h2>Atualizar Aluno</h2>

  <form v-if="students.length > 0">
    <label for="enrollment-student">Matrícula do Estudante</label>
    <select name="enrollment-student" id="enrollment-student" placeholder="Matrícula" v-model="enrollment">
      <option value="" selected disabled>Selecione uma Matrícula</option>
      <option v-for="student in students" :value="student.enrollment">{{ student.enrollment }}</option>
    </select>

    <label for="name-student">Nome do Estudante</label>
    <input type="text" name="name-student" id="name-student" placeholder="Nome" v-model="name">

    <label for="password-student">Senha do Estudante</label>
    <input type="password" name="password-student" id="password-student" placeholder="Senha" v-model="password">

    <label for="classroom-student">Turma do Estudante</label>
    <input type="text" name="classroom-student" id="classroom-student" placeholder="Turma" v-model="classroom">

    <button type="submit" @click.prevent="saveStudent">Salvar</button>
  </form>
  <p class="no-students" v-else>Nenhum Aluno Encontrado!</p>

  <p class="student-updated" v-if="studentUpdated">Aluno Atualizado com Sucesso!</p>
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

  input, select {
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

  select {
    cursor: pointer;
  }

  input:focus, select:hover {
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

  .no-students {
    color: #420d0d;
    font-weight: bold;
    padding: 1rem;
    border-radius: .5rem;
    margin-top: 1rem;
    background-color: #975e5e;
    box-shadow: 0 0 2px rgba(0, 0, 0, .5);
  }

  .student-updated {
    color: #f0f0f0;
    padding: 1rem;
    border-radius: .5rem;
    margin-top: 1.5rem;
    background-color: #022e04;
    box-shadow: 0 0 2px rgba(0, 0, 0, .5);
  }
</style>
