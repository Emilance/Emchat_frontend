<template>
    <form  class="loginform">
        <div class="formfield">
            <div  className="formIcon">
                <svg style="fill: rgba(0, 0, 0, 0.712); width: 1rem;  height:1rem;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
            </div>
            <input type="text" v-model="roomName" />
            <label>Room</label>
        </div>
        <div class="formfield" >
            <div className="formIcon">
                <svg  style="fill: rgba(0, 0, 0, 0.712); width: 1rem;  height:1rem;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
            </div>
            <input type="text" v-model="userName" />
            <label>Username</label>
        </div>
        <input @click="onSubmit" type="submit" value="Go in">
        <hr class="divider"/>
        <div class="links">
            <a href="/"   v-on:click.prevent="$emit('send-message', 'login')">
                Login here
            </a> <span> | </span>
            <a href="/"   v-on:click.prevent="$emit('send-message', 'signup')">
                Sign Up
            </a>
        </div>
    </form>
</template>

<script>
import { socket } from '../../websocket'

    export default {
       
        data(){
            return{
               
                roomName:'',
                userName:'',
                socket: socket
            }
        },
        methods:{
            onSubmit(e){
                e.preventDefault()
                if(!this.roomName || !this.userName ){
                    alert("kinldy fill all input correctly")
                    return
                }
                console.log(this.roomName)
                this.socket.emit("join_room", this.roomName)
                console.log(this.socket)
                this.$router.push('/');

              
            },
          
        },
        mounted : function (){

        }
    }
</script>

<style>
    /* .loginform{
        background-color: rgba(240, 248, 255, 0.336);
        height: 20rem;
        width: 30rem;
        display: grid;
        align-content: center;
        border-radius: 1rem;
        backdrop-filter: blur(10px)
    } */
    /* .loginform > input{
        height: 2.5rem;
        width: 85%;
        margin: auto;
        background-color:blueviolet ;
        border: none;
        color: white;
        font-weight: 600;
        border-radius: 5px;
        cursor: pointer;
    }
    .loginform > input:hover, button:hover{
        background-color:  rgb(90, 63, 116);
    }
    .formfield{
        height: 3rem;
        width: 85%;
        margin: auto;
    }
    .formfield>input{
        height: 2.5rem;
        width: 100%;
        padding-left: 1rem;
        font-size: 0.9rem;
        border-radius: 5px;
        background-color: white;
        border: none;
        border: 1px solid rgba(70, 65, 65, 0.432);
    }
   
    .divider{
        background-color:rgba(49, 48, 48, 0.411);
        width: 85%;
        font-size: 0.5rem;
        margin:1rem auto;
    }
    .links{
        font-size: 0.7rem;
        width: 85%;
        margin: 0.4rem auto;
        display: grid;
        grid-template-columns: 1.4fr 0.6fr 2fr;
    }
    .links> a{
        text-decoration: none;
        color: purple;
        font-weight: 600;
        text-align: center;

    }
    .links>span {
        color: purple;
        font-weight: 600;
    }
    .links> a:hover {
        color: black;
        background-color: transparent;
        font-weight: 600;
    }
    .loginform> button{
        height: 2.5rem;
        width: 85%;
        margin: auto;
        background-color:green ;
        border: none;
        color: white;
        font-weight: 600;
        border-radius: 5px;
        cursor: pointer;
    } */

    

</style>