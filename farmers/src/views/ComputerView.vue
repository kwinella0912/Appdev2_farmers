<template>
    <!-- <div class="computer">
        <h1>Hiiiiii Guysssss</h1>
    </div>
    <button @click="getComputers()">Open</button> -->

    <table class="table table-straped table-bordered">
        <thead>
            <th>Brand</th>
            <th>Model</th>
            <th>Actions</th>
        </thead>

        <tbody>
            <tr v-for="computer in computerlist" v-bind:key="computer.id">
                <td>{{ computer.brand }}</td>
                <td>{{ computer.model }}</td>
                <td><button class="btn btn-warning">Edit Record</button>     <button class="btn btn-danger">Delete Record</button></td>
            </tr>
            
        </tbody>
    </table>
</template>

<script>

import axios from 'axios';

export default{
    data(){
        return{
            name: 'Jose Mari Chan',
            computerlist:[]
        }
    },
    methods:{
        getComputers(){
            axios.get('http://127.0.0.1:8000/api/computer')
            .then((response)=>{
                this.computerlist = response.data;
            })
            .catch((error) => {
                console.log(error);
            });
           // alert(this.name);
        }

    },
    mounted(){
        this.getComputers();
    }
}

</script>