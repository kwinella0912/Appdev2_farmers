<!-- <template>
    <h1>Hello World!</h1>
</template>

<script>

import axios from 'axios';

    export default {
        data(){
            return {
                token: "",
                password: "",
                user_id: ""
            }
        }, methods: {
            getUser(){

                this.token = localStorage.getItem('token');
                this.user_id = localStorage.getItem('user_id');

                alert(this.token);
                axios.get("http://192.168.84.14:8000/api/users/" + this.user_id, {headers: {Authorization: 'Bearer ' + this.token}})
                .then((response)=>{
                    console.log(response.data);
                })
                .catch((error)=>{
                    console.log(error);
                });
            }
        },
        mounted(){
            this.getUser()
        }
    }

</script> -->

<template>
    <h1>Hello World</h1>
    

</template>

<script>

import axios from 'axios';


export default{
    data(){
        return {
           token:"",
           user_id:""
        }
    }, methods:{
        getUser(){
            this.token = localStorage.getItem('meow'); 
            this.user_id =localStorage.getItem('user_id'); 
            

            axios.get("http://127.0.0.1:8000/api/users/"+this.user_id  ,{headers:{Authorization:'Bearer '+ this.token}})
            .then((response) => {
              console.log(response.data);
          })
          .catch((error)=>{
            console.log(error);
          });
            
        },

        
    },
    mounted(){
        this.getUser();
    }
}
</script>