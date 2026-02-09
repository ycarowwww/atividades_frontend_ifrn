<script setup>
  import { ref, onMounted } from 'vue';
  
  const students = ref([]);
  
  function loadStudents() {
    const data = localStorage.getItem('students');
    students.value = data ? JSON.parse(data) : [];
  }

  onMounted(() => {
    loadStudents();
  });
</script>

<template>
  <h2>Lista de Alunos</h2>

  <table>
    <thead>
      <tr>
        <th>Matrícula</th>
        <th>Nome</th>
        <th>Senha</th>
        <th>Turma Atual</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="student in students">
        <td>{{ student.enrollment }}</td>
        <td>{{ student.name }}</td>
        <td>{{ student.password }}</td>
        <td>{{ student.classroom }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
  h2 {
    color: #f0f0f0;
    text-align: center;
  }

  table, tr, th, td {
    color: #f0f0f0;
    border: 1px solid #f0f0f0;
    border-collapse: collapse;
  }

  table {
    margin-top: 1rem;
    width: 100%;
  }

  td, th {
    padding: .5rem;
  }
</style>
