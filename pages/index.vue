<template>
  <div>
    <h1>
      Hola: {{ name }}
    </h1>
  </div>
</template>
<script>
export default {
  layout: 'my-main-layout',
  data() {
    return {
      name: "Kennit Ruz"
    }
  }
}
</script>
