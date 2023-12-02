<template>
  <div class="login-background">
    <div class="login-container">
      <h1>Iniciar sesión</h1>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="email">Correo electrónico</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="password">Contraseña</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button @click="login" type="submit">Iniciar sesión</button>
      </form>
      <p>
        ¿No tienes una cuenta?
        <router-link to="/Register">Registrate</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login: function () {
      // Realizar la autenticación y manejar el inicio de sesión aquí
      var url = "https://localhost:7237/api/Users/Login";
      var data = {
        email: this.email,
        password: this.password,
      };

      axios
        .post(url, data)
        .then((response) => {
          console.log(response.data);
          this.$q.notify({
            color: "positive",
            message: "Inicio de sesión exitoso",
          });
          localStorage.setItem("userData", JSON.stringify(response.data));
          this.$router.push("/Principal");
        })
        .catch((error) => {
          this.$q.notify({
            color: "negative",
            message: "Error en la contraseña o el correo electrónico",
          });
        });
    },
  },
};
</script>

<style scoped>
.login-background {
  background-color: #ccc; /* Color gris de fondo */
  height: 100vh; /* Toma el 100% de la altura de la ventana */
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-container {
  background-color: #5dd765;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  padding: 20px;
  width: 350px;
  margin: 0 auto;
  max-width: 400;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.login-container h1 {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}

.login-container form {
  margin-bottom: 20px;
}

.login-container .form-group {
  margin-bottom: 10px;
}

.login-container .form-group label {
  display: block;
  font-size: 16px;
  margin-bottom: 5px;
}

.login-container .form-group input {
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
}

.login-container button[type="submit"] {
  width: 100%;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
}

.login-container p {
  text-align: center;
  font-size: 14px;
}

.login-container a {
  color: #007bff;
}
</style>
