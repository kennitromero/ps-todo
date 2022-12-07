<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <nuxt-link class="navbar-brand" to="/">
        App ToDo
      </nuxt-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <nuxt-link class="nav-link" to="/">Inicio <span class="sr-only">(current)</span></nuxt-link>
          </li>

          <li class="nav-item" v-if="! isLoggedUser">
            <nuxt-link class="nav-link" to="register">Registrarme</nuxt-link>
          </li>

          <li class="nav-item" v-if="! isLoggedUser">
            <nuxt-link class="nav-link" to="login">Iniciar Sesión</nuxt-link>
          </li>

          <li class="nav-item" v-if="isLoggedUser">
            <nuxt-link class="nav-link" to="profile">Mi Perfil</nuxt-link>
          </li>

          <li class="nav-item" v-if="isLoggedUser">
            <a href="#" class="nav-link" v-on:click="logout">Cerrar Sesión</a>
          </li>
        </ul>

      </div>
    </nav>

    <nuxt/>

    <div class="alert alert-dark mt-3" role="alert">
      Pie de página, todos los derechos reservados.
    </div>
  </div>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters(['isLoggedUser'])
  },
  methods: {
    ...mapMutations(['setDefaultUser']),
    logout() {
      this.setDefaultUser()
      this.$router.push('/login')
    }
  }
}
</script>