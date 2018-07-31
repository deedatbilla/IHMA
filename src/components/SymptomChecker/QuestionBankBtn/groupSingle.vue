<template>
    <div>
<<<<<<< HEAD
        <vs-button v-for="(choice, index) in item" :key="index"
        class="col-sm-12"
        vs-type="primary-flat" 
        :name="choice.id"
        @click="buttonClicked({
            id: choice.id,
            choice_id: 'present'
        })"
        >{{choice.name}}</vs-button>

=======
        <button 
        class="btn btn-info col-sm-12"
        type="button" 
        :name="item.id"
        @click="newEvedence({
            id: item.id,
            choice_id: 'present'
        })"
        >{{item.name}}</button>

        <button class="btn btn-info col-sm-12"
         @click="newEvedence({
            id: item.id,
            choice_id: 'unknown'
        })"             
        >
        Don't know
        </button>
>>>>>>> cfe8c7963d4c12671b2071759cfe787ca4416984
    </div>
</template>

<script>
export default {
    name: 'single',
    props: ['item'],
    methods: {
        buttonClicked(payload){
            this.$emit('clicked', payload)
<<<<<<< HEAD
            console.log({
                type: 'g-single',
                options: this.item,
                choise: payload
            })
        }
    },
    created(){
        console.log(this.item)
=======
        }
    },
    created(){

>>>>>>> cfe8c7963d4c12671b2071759cfe787ca4416984
    }
}
</script>
