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

  },
  mounted() {
    if (! this.isLoggedUser) {
      this.$router.push('/login')
    }
  }
}
</script>
