<template>
  <div class="row justify-content-center">
    <div class="col-5 mt-3">
      <h3 class="text-center">
        Iniciar Sesión
      </h3>

      <form action="#">

        <div class="mb-3">
          <label for="email" class="form-label">Correo Electrónico</label>
          <input type="email"
                 id="email"
                 placeholder="Ingrese su correo electrónico"
                 class="form-control"
          >
        </div>

        <div class="mb-3">
          <label for="password" class="form-label">Contraseña</label>
          <input type="password"
                 id="password"
                 placeholder="Ingrese contraseña"
                 class="form-control"
          >
        </div>

        <div class="text-center">
          <button type="submit" class="btn btn-primary">
            Iniciar Sesión
          </button>
        </div>
      </form>

    </div>
  </div>
</template>

<script>
export default {}
</script>