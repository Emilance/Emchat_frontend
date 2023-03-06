<template>
    <form  class="loginform">
        <div class="formfield">
            <span className="formIcon">
                <svg  style="fill: rgba(0, 0, 0, 0.712); width: 1rem;  height:1rem;"     xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
            </span>
            <input type="text" v-model="email"  />
            <label>Email</label>
        </div>
        <div class="formfield" >
            <span className="formIcon"  >
                <svg    style="fill: rgba(0, 0, 0, 0.712);  height:1rem;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>
            </span>
            <input type="password" v-model="password"/>
            <label>Password</label>
        </div>
        <input @click="onSubmit" type="submit" value="Login">
        <hr class="divider"/>
        <button @click="toggleform"   v-on:click.prevent="$emit('send-message', 'signup')">Register Here </button>
        <div class="links">
            <a href="/">
                Forgot Password
            </a> <span> | </span>
            <a href="/"   v-on:click.prevent="$emit('send-message', 'anonymous')">
                Join anonymously
            </a>
        </div>
    </form>
</template>

<script>
import  axios from 'axios'
    export default {
        data(){
            return{
               
                email:'',
                password:''
            }
        },
        methods:{
            onSubmit(e){
                e.preventDefault()
                if(!this.email || !this.password){
                    alert("kinldy fill all input correctly")
                    return
                }
                const loginInfo ={
                    email : this.email,
                    password: this.password
                }
                const baseUrl = process.env.BASE_URL
                axios.post(`${baseUrl}/login`, loginInfo).then((resp) =>{
                console.log(resp)
                this.$router.push('/');
                }).catch(err =>{
                    console.log(err)
                })
            },
          
        }
    }
</script>

<style>
    .loginform{
        background-color: rgba(240, 248, 255, 0.199);
        height: fit-content;
        width: 30rem;
        display: flex;
        padding: 2rem 0;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        border-radius: 1rem;
        box-shadow: 1px 1px 10px white;
        backdrop-filter: blur(10px)
    }
    .loginform > input, .loginform> button{
        height: 2.5rem;
        width: 85%;
        margin:0.5rem auto;
        border:2px solid white ;
        background-color: blueviolet;
        color: white;
        font-weight: 600;
        border-radius: 5px;
        cursor: pointer;
    }
    .formIcon{
        width:fit-content;
        height:fit-content;
        position: absolute;
        right: 0.4rem;
        top:50%;
        transform: translateY(-50%);
    }
    .loginform > input:hover, button:hover{
        border:2px solid blueviolet ;

    }
    .formfield{
        height: 4rem;
        width: 85%;
        position: relative;
        border-bottom: 2px solid  rgba(0, 0, 0, 0.712);
        margin: auto;
        margin-top: 1rem;
    }
    .formfield>input{
        height: 100%;
        width: 100%;
        font-size: 0.9rem;
        border-radius: 5px;
        background-color: transparent;
        border: none;
        outline: none;

    }
    .formfield input:focus~ label {
        top: 1px;
    }
    /* .formfield  input:valid~ label {
        top: -5px;
    } */
    .formfield > label{
        position: absolute;
        top:50%;
         left:0.5rem;
         font-weight: 500;
         font-size: 0.9rem;
         transform: translateY(-50%);
         color:  rgba(0, 0, 0, 0.712);
         transition: 0.25s;
      }
   
    .divider{
        background-color:rgba(49, 48, 48, 0.411);
        width: 85%;
        font-size: 0.5rem;
        margin:0.3rem auto;
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
        color:white;
        font-weight: 600;
        font-size: 1rem;
        text-align: center;

    }
    .links>span {
        color: rgba(128, 0, 128, 0.185);
        font-weight: 600;
    }
    .links> a:hover {
        color:  rgba(0, 0, 0, 0.712);
        background-color: transparent;
        font-weight: 600;
    }

    @media (max-width:600px) {
        .links> a {
            font-size: 0.7rem;
        }        
        .loginform{
            width: 20rem;
        }
    }

</style>