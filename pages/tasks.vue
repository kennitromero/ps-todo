<template>
  <div class="row justify-content-center">
    <div class="col-lg-12 col-xs-12 mt-3">
      <ul class="list-group">
        <li class="list-group-item"
            v-for="tempTask in tasks">
          {{ tempTask.todo }}
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
      tasks: []
    }
  },
  methods: {
    ...mapActions(['getTodosByUserIDAction'])
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
