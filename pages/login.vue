<template>
  <div class="row justify-content-center">
    <div class="col-12 mt-3">
      <h3 class="text-center">
        Iniciar Sesión
      </h3>

      <form action="#" v-on:submit.prevent="loginUser" autocomplete="off">

        <div class="mb-3">
          <label for="username" class="form-label">Nombre de usuario</label>
          <input type="text"
                 id="username"
                 placeholder="Ingrese el usuario"
                 class="form-control"
                 v-model="username"
          >
        </div>

        <div class="mb-3">
          <label for="password" class="form-label">Contraseña</label>
          <input type="password"
                 id="password"
                 placeholder="Ingrese contraseña"
                 class="form-control"
                 v-model="password"
          >
        </div>

        <div class="text-center">
          <button type="submit" class="btn btn-primary">
            Iniciar Sesión
          </button>
        </div>

        <!-- Mensajes de retroalimentación -->

        <div class="alert alert-success mt-3" v-if="loginSuccess">
          Te has logueado exitosamente.
        </div>

        <div class="alert alert-warning mt-3" v-if="loginWarning">
          Las credenciales son incorrectas.
        </div>

        <div class="alert alert-danger mt-3" v-if="loginDanger">
          Ohh hay una falla en el sistema, inténtalo nuevamente.
        </div>
      </form>

    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  data() {
    return {
      username: 'kminchelle',
      password: '0lelplR',

      message: null,

      loginSuccess: false,
      loginWarning: false,
      loginDanger: false,
    }
  },
  methods: {
    ...mapActions(['loginUserAction']),
    async loginUser() {
      const payload = {
        username: this.username,
        password: this.password
      }

      this.loginSuccess = false
      this.loginWarning = false
      this.loginDanger = false

      const response = await this.loginUserAction(payload)

      if (response === 'OK') {
        this.loginSuccess = true
        setTimeout(_ => {
          this.$router.push('/profile')
        }, 2000)
      }

      if (response === 'INVALID_CREDENTIALS') {
        this.loginWarning = true
      }

      if (response === 'ERROR') {
        this.loginDanger = true
      }
    }
  }
}
</script>