<template>
  <div class="row justify-content-center">
    <div class="col-lg-6 col-xs-12 mt-3">

      <h3 class="text-center">Crea tu cuenta aquí!</h3>

      <form action="#" v-on:submit.prevent="registerUser" autocomplete="off">

        <div class="mb-3">
          <label for="full_name" class="form-label">Nombre completo</label>
          <input type="text"
                 id="full_name"
                 name="full_name"
                 placeholder="Ingres su nombre completo"
                 v-model="fullName"
                 class="form-control"
          >
        </div>

        <div class="mb-3">
          <label for="email" class="form-label">Correo Electrónico</label>
          <input type="email"
                 id="email"
                 name="email"
                 placeholder="Ingrese su correo electrónico"
                 v-model="email"
                 class="form-control"
          >
        </div>

        <div class="mb-3">
          <label for="password" class="form-label">Contraseña</label>

          <div class="input-group mb-3">
            <input type="password"
                   id="password"
                   name="password"
                   ref="password"
                   placeholder="Ingrese contraseña"
                   v-model="password"
                   class="form-control"
            >
            <button type="button" v-on:click="showPassword()" class="btn btn-sm btn-secondary">
              <span v-if="shownPasswords">Ocultar</span>
              <span v-else>Mostrar</span>
              contraseña
            </button>
          </div>
        </div>

        <div class="mt-3 mb-3">
          <label for="confirm_password" class="form-label">Confirmar Contraseña</label>
          <input type="password"
                 id="confirm_password"
                 name="confirm_password"
                 ref="confirm_password"
                 placeholder="De nuevo contraseña"
                 v-model="confirmPassword"
                 class="form-control"
          >
          <div id="emailHelp" class="form-text" v-if="password !== confirmPassword && confirmPassword !== ''">
            Las contraseñas no coinciden.
          </div>
        </div>

        <div class="text-center mb-3">
          <button type="submit" class="btn btn-primary" v-bind:disabled="password !== confirmPassword">
            <i class="bi bi-person-up"></i>
            Registrarme
          </button>
        </div>

        <!-- Mensajes de retroalimentación -->

        <div class="alert alert-success" v-if="registerSuccess">
          Te has registrado exitosamente.
        </div>

        <div class="alert alert-danger" v-if="registerDanger">
          Ohh hay una falla en el sistema, inténtalo nuevamente.
        </div>

        <div class="alert alert-warning" v-if="modelErrors.length > 0">
          <ul class="mb-0">
            <li v-for="e in modelErrors" class="mb-0">{{ e.detail }}</li>
          </ul>
        </div>

        <!-- / Fin de mensajes de retroalimentación -->
      </form>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shownPasswords: false,

      fullName: null,
      email: null,
      password: null,
      confirmPassword: null,

      registerSuccess: false,
      registerDanger: false,
      modelErrors: []
    }
  },
  methods: {
    showPassword() {
      this.shownPasswords = !this.shownPasswords

      if (this.shownPasswords) {
        this.$refs.password.type = 'text'
        this.$refs.confirm_password.type = 'text'
        return
      }

      this.$refs.password.type = 'password'
      this.$refs.confirm_password.type = 'password'
    },
    registerUser() {
      alert('Genial, te has registrado en nuestra APP')
    }
  }
}
</script>