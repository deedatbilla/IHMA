<template>
<<<<<<< HEAD
    <form-temp>
        <div id="signup-btn">
            <router-link to="signup">
                <vs-button vs-type="primary-flat" >Sign Up</vs-button>
            </router-link>
        </div>
        <vs-card id="login-card">
                <vs-alert v-if="error" vs-icon="warning" vs-active="true" vs-color="warning">
                    {{error}}
                </vs-alert>
            <vs-card-header vs-title="Login" vs-background-color="primary" >
                <vs-avatar vs-size="large" vs-text="One Care"/>
            </vs-card-header>
            <vs-card-body vs-background="light">
                <form action="login" method="post" @keypress.enter.prevent="login">
                    <vs-input vs-icon="person" vs-label-placeholder="Username" v-model="username"/>
                    <vs-input
                        vs-icon="lock"
                        vs-type="password" vs-label-placeholder="Password" v-model="password"/>
                </form>
            </vs-card-body>
            <vs-card-actions>
                <vs-button @click="login" vs-type="primary-relief">Login</vs-button>
            </vs-card-actions>
            <div class="card-footer">
                Don't have an account? <router-link to="signup">Click here</router-link>
            </div>
        </vs-card>
    </form-temp>
=======
    <vs-row id="login"
    vs-align="center"
    vs-type="flex" vs-justify="space-around" vs-w="12">
    <vs-col vs-justify="center" vs-align="center" vs-lg="4" vs-xs="12" vs-sm="6">
            <vs-card id="login-card">
                 <vs-alert v-if="error" vs-icon="warning" vs-active="true" vs-color="warning">
                        {{error}}
                    </vs-alert>
                <vs-card-header vs-title="Login" vs-background-color="primary" >
                    <vs-avatar vs-size="large" vs-text="One Care"/>
                </vs-card-header>
                <vs-card-body vs-background="light">
                    <form action="login" method="post" @keypress.enter.prevent="login">
                        <vs-input vs-icon="person" vs-label-placeholder="Username" v-model="username"/>
                        <vs-input
                            vs-icon="lock"
                            vs-type="password" vs-label-placeholder="Password" v-model="password"/>
                    </form>
                </vs-card-body>
                <vs-card-actions>
                    <vs-button @click="login" vs-type="primary-relief">Login</vs-button>
                </vs-card-actions>
                <div class="card-footer">
                    Don't have an account? <router-link to="signup">Click here</router-link>
                </div>
            </vs-card>
        </vs-col>
    </vs-row>
>>>>>>> cfe8c7963d4c12671b2071759cfe787ca4416984
</template>
<script>
import host from '../../../config/host'
import axios from 'axios'
<<<<<<< HEAD

import FormTemp from './Template'

export default {
    name: 'login',
    components:{FormTemp},
=======
export default {
    name: 'login',
>>>>>>> cfe8c7963d4c12671b2071759cfe787ca4416984
    data(){
        return {
            username: '',
            password: '',
            error: '',
        }
    },
    methods:{
        login(){
            if(this.username && this.password){
                this.error = ''
                this.$vs.loading()
                axios.post(host.ihma+ '/login', {
                    username: this.username,
                    password: this.password
                }).then(doc=>{
                    if(doc.data){
                        var data = doc.data
                        if(data.error) this.error = data.error
                        else{
<<<<<<< HEAD
                            data.permissions.sort(function(a, b) {
                            var nameA = a.name.toUpperCase(); // ignore upper and lowercase
                            var nameB = b.name.toUpperCase(); // ignore upper and lowercase
                            if (nameA < nameB) {
                                return -1;
                            }
                            if (nameA > nameB) {
                                return 1;
                            }

                            // names must be equal
                            return 0;
                            })
=======
>>>>>>> cfe8c7963d4c12671b2071759cfe787ca4416984
                            this.$store.commit('user', data)
                            var name = this.$store.getters.first_name
                            console.log('hello')
                            this.$vs.notify({
                                title:'Logged in successfully',
                                text:'Welcome back '+ name,
                                color:'success',
                                position: 'bottom-right',
                                icon:'check_box',
                                time: 5000
                            })
                            this.$router.push('/')
                        }
                    }
                    this.$vs.loading.close()
                    
                }).catch((err)=>{
                    console.log(err)
                    this.$vs.notify({
                        title:'Connection Error',
                        text:'Check internet connection and try again',
                        color:'danger',
                        position: 'top-right'
                    })
                    this.$vs.loading.close()                
                })
            }else{
                this.error = 'please provide both email and password'
            }
            
        }
    }
}
</script>
<style scoped>

<<<<<<< HEAD
    #signup-btn{
        position: absolute;
        top: 0;
        right: 0;
=======
    #login{
        background: url('../../assets/wall.png');
        background-position: center;
        position: absolute;
        top: 0;
        bottom: 0;
        
>>>>>>> cfe8c7963d4c12671b2071759cfe787ca4416984
    }

    #login-card{
        background: #eee;
    }
    
</style>


