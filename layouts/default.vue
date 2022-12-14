<template>
  <div class="container">
    <b-navbar toggleable="lg" type="light" variant="light">
      <nuxt-link class="navbar-brand" to="/tasks">
        App ToDo
      </nuxt-link>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <li v-if="isLoggedUser">
            <nuxt-link class="nav-link" to="/tasks">Inicio</nuxt-link>
          </li>

          <li class="nav-item" v-if="! isLoggedUser">
            <nuxt-link class="nav-link" to="register">Registrarme</nuxt-link>
          </li>

          <li class="nav-item" v-if="! isLoggedUser">
            <nuxt-link class="nav-link" to="login">Iniciar Sesión</nuxt-link>
          </li>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto" v-if="isLoggedUser">
          <b-nav-item-dropdown text="Kennit Ruz" right>
            <li>
              <nuxt-link class="nav-link" to="profile">Mi Perfil</nuxt-link>
            </li>
            <li>
              <a href="#" class="nav-link" v-on:click="logout">Cerrar Sesión</a>
            </li>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

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