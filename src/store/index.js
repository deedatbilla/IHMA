import Vue from 'vue'
import Vuex from 'vuex'
import { stat } from 'fs';

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        user: JSON.parse(localStorage.getItem('user')) || ''
    },
    getters: {
        user: state=> {return state.user}, 
        token: state=>{return state.user.token},
        permissions: state=>{return state.user.permissions},
        first_name: state=>{
            if(state.user.name) return state.user.name.first || ''
            else return ''
<<<<<<< HEAD
        },
        isUser: state=>{
            if(state.user.token){
                return true
            }else return false
=======
>>>>>>> cfe8c7963d4c12671b2071759cfe787ca4416984
        }
    },
    mutations:{
        user: (state, payload)=>{
            state.user = payload
            localStorage.setItem('user', JSON.stringify(payload))
        }
    },
    actions:{
        logout:({commit})=>{
            commit('user', '')
        }
    }
})

export default {store}