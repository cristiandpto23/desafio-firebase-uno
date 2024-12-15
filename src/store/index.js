import { createStore } from 'vuex';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { db, USUARIOS_COLLECTION, usuariosRef } from '../firestoreConfiguration';

export default createStore({
    state: {
        usuarios: [],
    },
    mutations: {
        SET_USUARIOS(state, usuarios) {
            state.usuarios = usuarios;
        },
        ADD_USUARIO(state, usuario) {
            state.usuarios.push(usuario);
        },
        DELETE_USUARIO(state, id) {
            state.usuarios = state.usuarios.filter((usuario) => usuario.id !== id);
        },
    },
    actions: {
        async fetchUsuarios({ commit }) {
            try {
                const querySnapshot = await getDocs(usuariosRef);
                const usuarios = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                commit('SET_USUARIOS', usuarios);
            } catch (error) {
                console.error('Error al obtener usuarios:', error);
                throw error;
            }
        },

        async agregarUsuario({ commit }, usuario) {
            try {
                const docRef = await addDoc(usuariosRef, usuario);
                commit('ADD_USUARIO', { id: docRef.id, ...usuario });
            } catch (error) {
                console.error('Error al agregar usuario:', error);
                throw error;
            }
        },

        async eliminarUsuario({ commit }, id) {
            try {
                await deleteDoc(doc(db, USUARIOS_COLLECTION, id));
                commit('DELETE_USUARIO', id);
            } catch (error) {
                console.error('Error al eliminar usuario:', error);
                throw error;
            }
        },
    },
    getters: {
        getUsuarios: (state) => state.usuarios,
    },
});
