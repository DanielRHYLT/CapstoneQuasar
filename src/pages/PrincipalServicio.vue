<template>
  <div class="app">
    <header class="header">
      <h1 class="title">AvocadoHealth</h1>
      <q-btn color="primary" @click="cerrarSesion">Cerrar Sesión</q-btn>
    </header>
    <div class="q-pa-md">
      <div class="q-gutter-md">
        <q-card class="q-mb-md" style="width: 50%">
          <q-card-section>
            <div class="q-responsive-embed">
              <video
                ref="video"
                v-if="captureStream && cameraActive"
                :srcObject="captureStream"
                id="video"
                autoplay
                playsinline
                muted
                @loadedmetadata="videoLoaded"
                style="max-width: 100%; height: auto"
              ></video>
            </div>
          </q-card-section>

          <q-card-actions align="center">
            <q-btn
              color="primary"
              @click="takePhoto"
              :disable="!videoIsLoaded || !cameraActive"
            >
              Tomar Foto
            </q-btn>
            &nbsp;&nbsp;
            <input
              type="file"
              @change="handleFileUpload"
              style="display: none"
              ref="fileInput"
            />
            <q-btn color="primary" @click="openFileInput">Examinar</q-btn>
            <q-btn color="primary" @click="toggleCamera">
              {{ cameraActive ? "Desactivar" : "Activar" }} Cámara
            </q-btn>
          </q-card-actions>
        </q-card>

        <q-card class="q-mb-md" style="width: 50%">
          <q-card-section>
            <q-img v-if="photo" :src="photo" basic />
          </q-card-section>
          <q-card-actions align="center">
            <q-btn color="positive" @click="sendPhoto" :disable="!photo">
              Enviar Foto
            </q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PrincipalServicio",
  data() {
    return {
      captureStream: undefined,
      photo: null,
      videoIsLoaded: false,
      cameraActive: true,
    };
  },
  mounted() {
    /* global MediaStreamConstraints */
    const constraints = {
      audio: true,
      video: true,
    };

    const gotStream = (stream) => {
      this.captureStream = stream;
    };

    const handleError = (error) => {
      console.error(error.name, error.message);
    };

    if (this.cameraActive) {
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then(gotStream)
        .catch(handleError);
    }
  },
  methods: {
    videoLoaded() {
      this.videoIsLoaded = true;
    },
    takePhoto() {
      if (this.videoIsLoaded && this.cameraActive) {
        const canvas = document.createElement("canvas");
        const video = this.$refs.video;
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas
          .getContext("2d")
          .drawImage(video, 0, 0, canvas.width, canvas.height);
        this.photo = canvas.toDataURL("image/jpeg");
      }
    },
    sendPhoto() {
      if (this.photo) {
        // Agrega aquí la lógica para enviar la foto al backend
        // axios.post("/url_del_backend", { photo: this.photo })
        //   .then((response) => {
        //     // Manejar la respuesta del servidor si es necesario
        //   })
        //   .catch((error) => {
        //     console.error("Error al enviar la foto al backend", error);
        //   });
        this.$q.notify({
          color: "positive",
          message: "Foto enviada",
        });
      }
    },
    openFileInput() {
      this.$refs.fileInput.click();
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.photo = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    toggleCamera() {
      this.cameraActive = !this.cameraActive;
      if (this.cameraActive) {
        navigator.mediaDevices
          .getUserMedia({ audio: true, video: true })
          .then((stream) => {
            this.captureStream = stream;
          })
          .catch((error) => {
            console.error("Error al activar la cámara", error);
          });
      } else {
        const tracks = this.captureStream?.getTracks();
        tracks.forEach((track) => track.stop());
        this.captureStream = undefined;
      }
    },
    cerrarSesion() {
      // Agrega aquí la lógica para cerrar sesión
      // Por ejemplo, redirigir al usuario a la página de inicio de sesión
      // o realizar cualquier otra acción necesaria.
      this.$router.push("/");
      this.$q.notify({
        color: "positive",
        message: "Sesión cerrada",
      });
    },
  },
};
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
}

.app {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(10, 112, 41);
  color: #ffffff;
  padding: 20px;
}

.title {
  font-size: 30px;
  font-weight: bold;
  margin: 0;
}

.section-title {
  font-size: 20px;
  font-weight: bold;
}

.q-gutter-md {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
