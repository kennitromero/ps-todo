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

        <div class="alert alert-success" v-if="loginSuccess">
          Te has logueado exitosamente.
        </div>

        <div class="alert alert-danger" v-if="loginDanger">
          Ohh hay una falla en el sistema, inténtalo nuevamente.
        </div>

        <div class="alert alert-warning" v-if="modelErrors != null">
          {{ modelErrors }}
        </div>

      </form>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: null,
      password: null,

      loginSuccess: false,
      loginDanger: false,
      modelErrors: null
    }
  },
  methods: {
    async loginUser() {
      const payload = {
        username: this.username,
        password: this.password
      }

      this.modelErrors = null
      this.loginSuccess = false
      this.loginDanger = false

      try {
        const response = await this.$axios.post('/auth/login', payload)
        if (response.status === 200) {
          this.loginSuccess = true
        }
      } catch (err) {
        if (err.response.status === 400) {
          this.modelErrors = err.response.data.message
          console.log(err.response)
          return
        }

        if (err.response.status === 401) {
          this.modelErrors = err.response.data.message
          return
        }

        if (err.response.status === 500) {
          this.loginDanger = true
        }
      }
    }
  }
}
</script>