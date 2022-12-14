<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-4 mt-3">
        <div class="card">
          <img :src="getImage" class="card-img-top" alt="Imagen de usuario">
          <div class="card-body">
            <h5 class="card-title">
              {{ getFullName }}
            </h5>
            <p class="card-text">
              <b>@</b>{{ getUsername }}
              <br>
              <b>Sexo</b>: {{ getGender }}
              <br>
              <b>Correo electrónico</b>: {{ getEmail }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters(['getFullName', 'getEmail', 'getUsername', 'getImage', 'getGender', 'isLoggedUser'])
  },
  mounted() {
    if (! this.isLoggedUser) {
      this.$router.push('/login')
    }
  }
}
</script>