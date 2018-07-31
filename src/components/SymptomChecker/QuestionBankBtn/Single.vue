<template>
    <div>
<<<<<<< HEAD
        <vs-button 
        class="col-md-4"
        vs-type="primary-flat"
=======
        <button 
        class="btn btn-info col-lg-12"
        type="button"  
>>>>>>> cfe8c7963d4c12671b2071759cfe787ca4416984
        v-for="choice in item"
        @click="buttonClicked(choice.id)"                                    
        :value="choice.id"
        :key="choice.id"
<<<<<<< HEAD
        >{{ choice.label }}</vs-button>
=======
        >{{ choice.label }}</button>
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
                type: 'single',
                options: this.item,
                choise: payload
            })
=======
>>>>>>> cfe8c7963d4c12671b2071759cfe787ca4416984
        }
    }
}
</script>

