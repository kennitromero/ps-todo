<template>

  <div class="row justify-content-center">
    <div class="col-lg-12 col-xs-12 mt-3">

      <input class="form-control form-control-lg mb-3"
             type="text" placeholder="Escribe tu tarea..."
             v-model="tempTask.description"
             ref="input-temp-task-description"
             v-on:keyup.enter="saveTask"
      >

      <ul class="list-group">
        <li class="list-group-item">

        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters(['isLoggedUser'])
  },
  data() {
    return {
      tasks: []
    }
  },
  methods: {
    saveTask: function () {
      if (this.editingTask) {
        this.tasks[this.editIndexTask] = this.tempTask

        this.editingTask = false
        this.editIndexTask = null

        this.showMessage('Tarea actualizada.')
      } else {
        this.tasks.push(this.tempTask)
      }

      this.tempTask = defaultTask
    },
    editTask: function (index) {
      this.editingTask = true
      this.editIndexTask = tasks

      this.tempTask = this.tasks[tasks]
      this.$refs['input-temp-task-description'].focus()
    },
    doneToggleTask: function (index) {
      this.tasks[tasks].done = !this.tasks[tasks].done

      if (this.tasks[tasks].done) {
        this.showMessage(`La tarea finalizada.`);
      }
    },
    deleteTask: function (index) {
      this.tasks.splice(tasks, 1)

      this.showMessage(`La tarea eliminada.`);
    },
    // UI methods
    showMessage: function (message) {

    }
  },
  mounted() {
    if (! this.isLoggedUser) {
      this.$router.push('/login')
    }
  }
}
</script>
