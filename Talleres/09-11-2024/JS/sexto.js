// Crear instancia de Vue
new Vue({
    el: '#interfaz',
    data() {
        return {
            count: 0,
            text: "",
            isFirstImage: true
        };
    },
    methods: {
        incrementCount() {
            this.count++;
        },
        decrementCount() {
            if (this.count > 0) {
                this.count--;
            }
        },
        transformText(event) {
            this.text = event.target.value.toUpperCase();
        },
        toggleImage() {
            this.isFirstImage = !this.isFirstImage;
        }
    },
    template: `
      <div style="text-align: center;">
        <h1>Ejemplos de Reactividad con Vue.js</h1>
        
        <!-- Ejemplo 1: Contador -->
        <div style="margin: 20px 0;">
          <h2>Ejemplo 1: Contador</h2>
          <p>Cuenta: {{ count }}</p>
          <button @click="incrementCount">Incrementar</button>
          <button @click="decrementCount">Decrementar</button>
        </div>

        <!-- Ejemplo 2: Transformar Texto -->
        <div style="margin: 20px 0;">
          <h2>Ejemplo 2: Transformar Texto</h2>
          <input type="text" v-model="text" @input="transformText" placeholder="Escribe aquí">
        </div>

        <!-- Ejemplo 3: Cambiar Imagen -->
        <div style="margin: 20px 0;">
          <h2>Ejemplo 3: Cambiar Imagen</h2>
          <img
            :src="isFirstImage ? 'https://i.pinimg.com/564x/b4/a6/b0/b4a6b0ba384cf7a802a5f81f99be588d.jpg' : 'https://i.pinimg.com/236x/e3/96/d9/e396d9b3967cd31da26b4a929dc5b8f9.jpg'"
            alt="Ejemplo Imagen"
            @click="toggleImage"
            style="cursor: pointer;">
          <p>Haz clic en la imagen para cambiarla</p>
        </div>
      </div>
    `
});
