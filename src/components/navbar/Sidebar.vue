<template>
<<<<<<< HEAD
<div v-if="isVissible" id="sidebar">
=======
<div id="sidebar">
>>>>>>> cfe8c7963d4c12671b2071759cfe787ca4416984
    <nav class="user-menu">
        <div class="pull-right">
            <a v-on:click="show()" v-bind:class="{active: isShowMenu}" class="main-menu-access btn">
            <i class="fa fa-bars"></i>
        </a>
        </div>
    </nav>
    <nav class="main-menu" v-bind:class="{expanded: showMenu}">
        <ul @click="showMenu = false; isShowMenu = false">
            <li>
                <router-link to="/">
                    <i class="fa fa-home nav_icon"></i>
                    <span class="nav-text text-capitalize">
					Home
					</span>
                </router-link>
            </li>
            <li v-for="link in navs" :key="link.id">
                <router-link :to="'/'+link.sub_name">
                    <i :class="link.fa_icon" class="nav_icon"></i>
                    <span class="nav-text text-capitalize">
<<<<<<< HEAD
					{{ link.sub_name || capitalize }}
=======
					{{ link.name }}
>>>>>>> cfe8c7963d4c12671b2071759cfe787ca4416984
					</span>
                </router-link>
            </li>
            <!--li class="has-subnav">
                <a href="javascript:;">
                    <i class="fa fa-cogs" aria-hidden="true"></i>
                    <span class="nav-text">
					UI Components
				</span>
                    <i class="icon-angle-right"></i><i class="icon-angle-down"></i>
                </a>
                <ul>
                    <li>
                        <a class="subnav-text" href="buttons.html">
                            Buttons
                        </a>
                    </li>
                    <li>
                        <a class="subnav-text" href="grids.html">
                            Grids
                        </a>
                    </li>
                </ul>
            </li-->
        </ul>
        <ul class="logout">
            <li>
            <li>
                <a href="/settings">
                    <i class="fa fa-cog nav-icon"></i>
                    <span class="nav-text">
			Settings
			</span>
                </a>
            </li>
            <li>
                <a href="/login" @click.prevent="logout">
                    <i class="fa fa-power-off nav-icon"></i>
                    <span class="nav-text">
			Logout
			</span>
                </a>
            </li>
        </ul>
    </nav>
</div>
</template>
<script>

<<<<<<< HEAD
    import {bus} from '../../main'

=======
>>>>>>> cfe8c7963d4c12671b2071759cfe787ca4416984
    export default{
        name: 'main-menu',
        props:[ 'urls' ],
        data(){
            return{
                showMenu: false,
                isShowMenu: false,
<<<<<<< HEAD
                navs: '',
                isVissible: true
=======
                navs: ''
>>>>>>> cfe8c7963d4c12671b2071759cfe787ca4416984
            }
        },
        methods:{
            show(){
                this.isShowMenu = !this.isShowMenu
                this.showMenu = !this.showMenu                
            },
            logout(){
                this.$store.dispatch('logout')
            }
        },
        created(){
<<<<<<< HEAD
            bus.$on('hide_navs', (e)=>{
                if(e) this.isVissible = false
                else this.isVissible = true
            })
=======
>>>>>>> cfe8c7963d4c12671b2071759cfe787ca4416984
            this.navs = this.$store.getters.permissions
        }
      
    }
</script>
<style scoped>
    #logo{
        width: 100px;
        padding: 10px;
        margin-top: -5px
    }
    @media(min-width:480px){
        #logo{
            display: none
        }
    }
        i.nav_icon.fa
        {
            position:relative;
            display:table-cell;
            width:60px;
            text-align:center;
            vertical-align:middle;
            font-size:18px;
            padding:.7em 0;
                
    }
</style>