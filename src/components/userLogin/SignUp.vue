<template>
    <form  class="signupform">
        <i class="fa fa-arrow-left" aria-hidden="true"></i>
       <div class="ufield">
        <input  v-model="name"  placeholder="name"/>
       </div>
       <div class="ufield">
        <input v-model="email" placeholder="email address"/>
       </div>
       <div class="ufield">
        <input v-model="password" placeholder="password" />
       </div>
       <div class="ufield">
         <select v-model="gender" options="gender" >
            <option value="male">Male</option>
            <option value="female"> Female</option>
         </select>
       </div>
       <input  @click="onSubmit" type="submit" value="register"/>
       <div class="links">
            <a href="/"  v-on:click.prevent="$emit('send-message', 'login')">
                Login
            </a> <span> | </span>
            <a href="/"   v-on:click.prevent="$emit('send-message', 'anonymous')" >
                Join anonymously
            </a>
        </div>
    </form>
</template>

<script>
import axios from 'axios'
import { register } from '../../../data/endpoints'

    export default {
        data(){
            props:{
             method:{type: Function}
            }
            return{
             name: "",
             email:'',
             gender:"",
             password:'',
           
                
            }
        },
        methods:{
         async onSubmit(e){
            e.preventDefault()
            if(!this.email){
                alert("Email is required")
                return
            }
            const newUser = {
                firstName:this.name,
                email: this.email,
                gender: this.gender,
                password:this.password
            }
            const resp = await register(newUser)
            console.log(resp)
            // axios.post(`${baseUrl}/api/signup`, newUser).then( resp =>{
            //     console.log(resp)
            //     this.$router.push('/');
            // }).catch(err =>{
            //     console.log(err)
            // })
        }
        }
    }
</script>

<style >
 .signupform{
        background-color: rgba(240, 248, 255, 0.171);
        height: fit-content;
        width: 30rem;
        display: flex;
        padding: 2rem 0;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        border-radius: 1rem;
        backdrop-filter: blur(10px)

    }
    
    .ufield{
        height: 3rem;
        width: 85%;
        margin: 0.2rem  auto ;
    }
    .ufield> input,  .ufield> select {
        width: 100%;
        height: 2.3rem;
        padding:0  0.7rem;
        border-radius: 5px;
        border: 1px solid rgba(70, 65, 65, 0.432);
    }
    .signupform>input{
        width: 85%;
        margin: auto;
        height: 2.3rem;
        cursor: pointer;
        border: none;
        background-color:blueviolet ;
        color: white;
        font-weight: 600;
        border-radius: 5px;
    }
    .signupform>input:hover{
        background-color:  rgb(90, 63, 116);
    }
   
    .fa-arrow-left{
        color:black;
        margin:0 0.8rem;
        cursor: pointer;
    }
    .fa-arrow-left:hover{
        transform: scale(1.01);
    }
    @media (max-width : 600px) {
        .signupform{
            width: 20rem;
        }
    }
</style>