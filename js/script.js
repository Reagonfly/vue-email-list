const {
    createApp
} = Vue;

createApp({
    data(){
        return{
            emailList: [],
        }
    },
    mounted() {
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
                console.log(result.data);
                this.emailList.push(result.data.response)
            })
        }        
    }
}).mount('#app')