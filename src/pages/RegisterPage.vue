<template>
  <div class="register-background">
    <div class="register-container">
      <h1>Registrarse</h1>
      <form @submit.prevent="register">
        <div class="form-group">
          <label for="username">Nombre de usuario</label>
          <input type="text" id="username" v-model="username" required>
        </div>
        <div class="form-group">
          <label for="email">Correo electrónico</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <div class="form-group">
          <label for="password">Contraseña</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <div class="form-group">
          <label for="confirmPassword">Confirmar contraseña</label>
          <input type="password" id="confirmPassword" v-model="confirmPassword" required>
        </div>
        <button type="submit">Registrarse</button>
      </form>
      <p>
        ¿Ya tienes una cuenta?
        <router-link to="/">Iniciar sesión</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    register() {
      // Realizar la lógica de registro aquí
    }
  }
}
</script>

<style scoped>
.register-background {
  background-color: #ccc; /* Color gris de fondo */
  height: 100vh; /* Toma el 100% de la altura de la ventana */
  display: flex;
  align-items: center;
  justify-content: center;
}

.register-container {
  background-color: #5dd765;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  padding: 20px;
  width: 350px;
  margin: 0 auto;
  max-width: 400;
}

.register-container h1 {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}

.register-container form {
  margin-bottom: 20px;
}

.register-container .form-group {
  margin-bottom: 10px;
}

.register-container .form-group label {
  display: block;
  font-size: 16px;
  margin-bottom: 5px;
}

.register-container .form-group input {
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
}

.register-container button[type="submit"] {
  width: 100%;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
}

.register-container p {
  text-align: center;
  font-size: 14px;
}

.register-container a {
  color: #007bff;
}
</style>
