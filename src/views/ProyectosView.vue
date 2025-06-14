<template>
  <div class="overflow-x-auto text-white">
    <table class="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Proyectos</th>
          <th>Tareas</th>
          <th>Avance</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(proyecto, index) in store.projects" :key="proyecto.id">
          <th>{{ index + 1 }}</th>
          <td>{{ proyecto.name }}</td>
          <td>{{ proyecto.tareas }}</td>
         <td><progress class="progress progress-primary w-56" :value="proyecto.avance" max="100"></progress></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useProjectsStore } from '@/stores/projectsStore'

const store = useProjectsStore()
</script>
