<template>
    <div class="lista-usuarios">
        <h2>Usuarios Registrados</h2>
        <ul>
            <li v-for="usuario in usuarios" :key="usuario.id">
                {{ usuario.nombre }} - {{ usuario.email }}
                <button @click="eliminarUsuario(usuario.id)">Eliminar</button>
            </li>
        </ul>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
    name: 'ListaUsuarios',
    setup() {
        const store = useStore();

        store.dispatch('fetchUsuarios');

        return {
            usuarios: computed(() => store.state.usuarios),
            eliminarUsuario: (id) => store.dispatch('eliminarUsuario', id),
        };
    },
};
</script>

<style scoped>
.lista-usuarios {
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

ul {
    list-style: none;
    padding: 0;
}

li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    margin-bottom: 0.5rem;
    background: #f8f9fa;
    border-radius: 4px;
    transition: transform 0.2s ease;
}

li:hover {
    transform: translateX(5px);
}

button {
    background-color: #dc3545;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    margin-left: 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #c82333;
}

@media (max-width: 768px) {
    li {
        flex-direction: column;
        gap: 0.5rem;
        text-align: center;
    }
}
</style>
