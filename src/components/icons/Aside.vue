<template>
<aside class="barraizquierda a">
  <ul class="menu bg-base-500 text-white">
    <li><a>Proyectos</a></li>

    <li v-for="proyecto in store.projects" :key="proyecto.id">
      <details>
        <summary>{{ proyecto.name }}</summary>
        <ul>
          <li v-for="(tareas, index) in proyecto.tareas" :key="index">
            <a>{{ tareas }}</a>
          </li>
        </ul>
      </details>
    </li>

  </ul>
</aside>

</template>

<script setup>
import { useProjectsStore } from '@/stores/projectsStore'

const store = useProjectsStore()
</script>
