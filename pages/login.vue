<template>
  <div class="row justify-content-center">
    <div class="col-12 mt-3">
      <h3 class="text-center">
        Iniciar Sesión
      </h3>

      <form action="#" v-on:submit.prevent="loginUser" autocomplete="off">

        <div class="mb-3">
          <label for="email" class="form-label">Correo Electrónico</label>
          <input type="email"
                 id="email"
                 placeholder="Ingrese su correo electrónico"
                 class="form-control"
                 v-model="email"
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

        <div class="alert alert-warning" v-if="modelErrors.length > 0">
          <ul class="mb-0">
            <li v-for="e in modelErrors" class="mb-0">{{ e.detail }}</li>
          </ul>
        </div>

      </form>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null,

      loginSuccess: false,
      loginDanger: false,
      modelErrors: []
    }
  },
  methods: {
    async loginUser() {
      const payload = {
        email: this.email,
        password: this.password
      }

      this.modelErrors = []
      this.loginSuccess = false
      this.loginDanger = false

      try {
        const response = await this.$axios.post('/api/1.0/todo/users/login', payload)
        if (response.status === 200) {
          this.loginSuccess = true
        }
      } catch (err) {
        if (err.response.status === 400) {
          this.modelErrors = err.response.data.errors
          return
        }

        if (err.response.status === 401) {
          this.modelErrors = err.response.data.errors
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