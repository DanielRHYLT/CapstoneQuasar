<template>
  <div class="app">
    <header class="header">
      <h1 class="title">AvocadoHealth</h1>
    </header>
    <main class="main">
      <section class="upload-section">
        <h2 class="section-title">Arrastre archivos o cargue sus propias imágenes</h2>
        <input type="file" class="file-input" />
      </section>
      <section class="image-section">
        <img src="https://th.bing.com/th/id/R.60766cdf940691c55d7a93c4d9aa4588?rik=vRPOV%2fDES5baQw&riu=http%3a%2f%2f2.bp.blogspot.com%2f-UCMxiue_xRg%2fVUpdbNV6g-I%2fAAAAAAAAEMc%2fwXyo9cdFH5E%2fs1600%2fPalta%5b1%5d.JPG&ehk=6PLG7dZCdxs1kGNtwGBlC5fHPIEKdOVhMBb5wgrmad0%3d&risl=&pid=ImgRaw&r=0" class="image" />
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
html,
body {
  height: 100%;
  margin: 0; /* Eliminar el margen predeterminado */
}
.app {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
}

.header {
  background-color: rgb(10, 112, 41);
  color: #ffffff;
  padding: 20px; /* Reducir el padding para hacer el encabezado menos grueso */
 /* Centrar el texto en el encabezado */
}

.title {
  font-size: 30px;
  font-weight: bold;
  margin: 0; /* Eliminar el margen predeterminado */
}

.main {
  width: 100%;
  max-width: 800px; /* Limitar el ancho máximo del contenido principal */
  height: 100%;
  max-height: 500px; /* Limitar la altura máxima del contenido principal */
  margin: 30px auto 30px auto; /* Margen superior e inferior ajustados */
  padding: 20px;
  box-sizing: border-box; /* Incluir el padding en el ancho total */
  border: 1px solid #000000; /* Añadir un borde de 1px de ancho y color negro */
  overflow: hidden;
}

.upload-section {
  margin-top: 20px;
}

.section-title {
  font-size: 20px;
  font-weight: bold;
}

.file-input {
  width: 100%;
}

.image-section {
  margin-top: 20px;
  overflow: hidden;
}

.image {
  width: 100%;
  max-width: 100%;
  max-height: 100%;
  height: 100%;
}
</style>
