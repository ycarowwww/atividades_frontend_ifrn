<script setup>
  import { ref } from 'vue';
  
  let students = localStorage.getItem('students');
  students = students ? JSON.parse(students) : [];
  
  const enrollment = ref('');
  const studentDeleted = ref(false);
  
  function deleteStudent() {
    const studentID = students.findIndex(student => student.enrollment === enrollment.value);
    students.splice(studentID, 1);
    localStorage.setItem('students', JSON.stringify(students));

    studentDeleted.value = true;
    setTimeout(() => {
      studentDeleted.value = false;
    }, 1000);
  }
</script>

<template>
  <h2>Deletar Aluno</h2>

  <form v-if="students.length > 0">
    <label for="enrollment-student">Matrícula do Estudante</label>
    <select name="enrollment-student" id="enrollment-student" placeholder="Matrícula" v-model="enrollment">
      <option value="" selected disabled>Selecione uma Matrícula</option>
      <option v-for="student in students" :value="student.enrollment">{{ student.enrollment }}</option>
    </select>

    <button type="submit" @click.prevent="deleteStudent">Deletar</button>
  </form>

  <p class="no-students" v-else>Nenhum Aluno Encontrado!</p>

  <p class="student-deleted" v-if="studentDeleted">Aluno Deletado com Sucesso!</p>
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

  select {
    display: block;
    color: #f0f0f0;
    font-size: 1.1rem;
    padding: .3rem;
    border-radius: .3rem;
    margin-block: .5rem 1.5rem;
    width: 100%;
    background-color: #404040;
    box-shadow: 0 0 2px rgba(0, 0, 0, .5);
    cursor: pointer;
  }

  select:hover {
    background-color: #454545;
  }

  button {
    color: #f0f0f0;
    font-size: 1.1rem;
    padding: .3rem;
    border-radius: .3rem;
    background-color: #8e5757;
    box-shadow: 0 0 2px rgba(0, 0, 0, .5);
    cursor: pointer;
  }

  button:hover {
    background-color: #754444;
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

  .student-deleted {
    color: #f0f0f0;
    padding: 1rem;
    border-radius: .5rem;
    margin-top: 1.5rem;
    background-color: #022e04;
    box-shadow: 0 0 2px rgba(0, 0, 0, .5);
  }
</style>
