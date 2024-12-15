<template>
    <div class="formulario">
        <h2>Agregar Usuario</h2>
        <form @submit.prevent="agregarUsuario">
            <input v-model="usuario.nombre" type="text" placeholder="Nombre" required />
            <input v-model="usuario.email" type="email" placeholder="Email" required />
            <button type="submit">Agregar</button>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
    name: 'FormularioUsuario',
    setup() {
        const store = useStore();
        const usuario = ref({
            nombre: '',
            email: '',
        });

        const agregarUsuario = async () => {
            await store.dispatch('agregarUsuario', usuario.value);
            usuario.value = { nombre: '', email: '' };
        };

        return {
            usuario,
            agregarUsuario,
        };
    },
};
</script>

<style scoped>
.formulario {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
    color: var(--primary-color);
    margin-bottom: 1.5rem;
    text-align: center;
}

form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

input {
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
}

input:focus {
    outline: none;
    border-color: var(--secondary-color);
}

button {
    background-color: var(--secondary-color);
    color: white;
    padding: 0.8rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #3aa876;
}

@media (max-width: 768px) {
    .formulario {
        padding: 1rem;
    }
}
</style>
