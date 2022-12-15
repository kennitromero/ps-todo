<template>

  <div class="row justify-content-center">
    <div class="col-lg-12 col-xs-12 mt-3">
      <ul class="list-group">
        <li class="list-group-item">

        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

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
    ...mapActions(['getTodosByUserID'])
  },
  mounted() {
    if (! this.isLoggedUser) {
      this.$router.push('/login')
    }

    //this.getTodosByUserID()
  }
}
</script>
