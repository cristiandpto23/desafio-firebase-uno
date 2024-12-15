<template>
    <div id="app">
        <FormularioUsuario />
        <ListaUsuarios />
    </div>
</template>

<script>
import FormularioUsuario from './components/FormularioUsuario.vue';
import ListaUsuarios from './components/ListaUsuarios.vue';

export default {
    name: 'App',
    components: {
        FormularioUsuario,
        ListaUsuarios,
    },
};
</script>

<style>
:root {
    --primary-color: #2c3e50;
    --secondary-color: #42b983;
    --background-color: #f5f5f5;
    --text-color: #333;
    --spacing: 1rem;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
}

#app {
    max-width: 1200px;
    margin: 0 auto;
    padding: var(--spacing);
}

h1 {
    color: var(--primary-color);
    text-align: center;
    margin: 2rem 0;
}

.container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: var(--spacing);
}

@media (min-width: 768px) {
    .container {
        flex-direction: row;
    }
}
</style>
