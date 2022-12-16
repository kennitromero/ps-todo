<template>
  <div class="row justify-content-center">
    <div class="col-lg-12 col-xs-12 mt-3">

      <input class="form-control form-control-lg mb-3"
             type="text" placeholder="Escribe tu tarea..."
             v-on:keyup.enter="saveTask" v-model="description">

      <ul class="list-group">
        <li class="list-group-item"
            v-for="(tempTask, taskIndex) in tasks">
          {{ tempTask.todo }}

          <div class="float-right">
            <button type="button" class="btn btn-outline-danger btn-sm"
                    v-on:click="deleteTask(taskIndex, tempTask.id)">
              Del
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  computed: {
    ...mapGetters(['isLoggedUser', 'getUserID'])
  },
  data() {
    return {
      tasks: [],
      description: '',
    }
  },
  methods: {
    ...mapActions([
      'getTodosByUserIDAction',
      'createTaskAction',
      'deleteTaskAction'
    ]),
    async saveTask() {
      if (this.description === '') {
        return
      }

      const newTask = await this.createTaskAction({
        completed: false,
        todo: this.description,
        userId: this.getUserID
      })

      this.tasks.push(newTask)

      this.description = ''
    },
    deleteTask(taskIndex, taskID) {
      this.deleteTaskAction(taskID)
      this.tasks.splice(taskIndex, 1)
    }
  },
  // mounted(), esta función se ejecuta al cargar la página de tasks (tareas)
  async mounted() {
    if (! this.isLoggedUser) {
      await this.$router.push('/login')
    }

    this.tasks = await this.getTodosByUserIDAction(this.getUserID)
  }
}
</script>
