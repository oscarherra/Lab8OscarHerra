<template>
  <div v-if="open" class="modal modal-open">
    
    <div class="modal-box" data-theme="light"> 

      <h3 class="font-bold text-lg mb-4">Agregar Proyecto</h3>

      <div class="form-control mb-2">
        <label class="label">Proyecto</label>
        <input v-model="form.proyecto" class="input input-bordered" />
      </div>

      <div class="form-control mb-2" v-for="(tarea, index) in form.tareas" :key="index">
        <label class="label">Tarea {{ index + 1 }}</label>
        <input v-model="form.tareas[index]" class="input input-bordered" />
      </div>

      <div class="form-control mb-4">
        <label class="label">Avance (%)</label>
        <input v-model.number="form.avance" type="number" min="0" max="100" class="input input-bordered" />
      </div>

      <div class="modal-action">
        <button class="btn btn-sm btn-accent mb-4" @click="addTarea">Agregar otra tarea</button>
        <button class="btn btn-primary" @click="handleAdd">Agregar</button>
        <button class="btn" @click="handleClose">Cancelar</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useProjectsStore } from '@/stores/projectsStore'

const props = defineProps({
  open: Boolean
})

const emit = defineEmits(['close'])

const form = ref({
  proyecto: '',
  tareas: [''],
  avance: 0
})

const store = useProjectsStore()

function handleAdd() {
  const tareasLimpias = form.value.tareas.filter(t => t.trim() !== '')
  if (form.value.proyecto && tareasLimpias.length && form.value.avance) {
    store.addProject({
      name: form.value.proyecto,
      tareas: tareasLimpias,
      avance: form.value.avance
    })
    resetForm()
    emit('close')
  }
}

function addTarea() {
  form.value.tareas.push('')
}

function handleClose() {
  resetForm()
  emit('close')
}

function resetForm() {
  form.value = {
    proyecto: '',
    tareas: [''],
    avance: 0
  }
}
</script>
