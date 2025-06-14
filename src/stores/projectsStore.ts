// stores/projectsStore.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'

export interface Project {
  id: string
  name: string
  tareas: string[]
    avance: number
}

export const useProjectsStore = defineStore('projects', () => {
  const projects = ref<Project[]>([])

  function addProject(data: { name: string; tareas: string[]; avance: string }) {
    projects.value.push({ 
      id: uuidv4(),
      name: data.name,
      tareas: data.tareas,
    avance: Number(data.avance) 
    })
  }

  return {
    projects,
    addProject
  }
})

