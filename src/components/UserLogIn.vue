<template>
    <div   class="userlogin">
        <h1 class="logintitle">Welcome To Emchat</h1>
        <p class="loginsubtitle">Let's help build your connection</p>
        <div className="snow"></div>

        <Login  v-if="displayloginform  === 'login'"  @send-message="changeForm"  />
        <SignUp   v-else-if ="displayloginform === 'signup'"   @send-message="changeForm"/>
        <Anonymous  v-else-if ="displayloginform === 'anonymous'"  @send-message="changeForm"/>
        
        
         
    </div>
</template>

<script>
import Login from './userLogin/Login.vue';
import SignUp from './userLogin/SignUp.vue';
import Anonymous from './userLogin/Anonymous.vue';
    export default {
     data(){
        return{
            displayloginform : "anonymous"
        }
     },
     methods:  {
        changeForm(form){
        
                this.displayloginform =form
         
        } 
     },

    components: { Login, SignUp, Anonymous }
}
</script>

<style >
@import url('https://fonts.googleapis.com/css2?family=Rampart+One&display=swap');
    .userlogin{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
        background: url('/landscape1.jpg') no-repeat center center fixed;
        background-size: cover;
        position: relative;
    }
    .snow, .snow:after, .snow:before{
        content: "";
          position: absolute;
          top: -650px;
          bottom: 0;
          left: 0;
          right: 0;
          background-image:
          radial-gradient(4px 4px at 100px 50px, #fff, transparent),
          radial-gradient(6px 6px at 200px 150px, #fff, transparent),
          radial-gradient(3px 3px at 300px 250px, #fff, transparent),
          radial-gradient(4px 4px at 400px 350px, #fff, transparent),
          radial-gradient(6px 6px at 500px 100px, #fff, transparent),
          radial-gradient(3px 3px at 50px 200px, #fff, transparent),
          radial-gradient(4px 4px at 150px 300px, #fff, transparent),
          radial-gradient(6px 6px at 250px 400px, #fff, transparent),
          radial-gradient(3px 3px at 350px 500px, #fff, transparent);
          background-size:650px  650px;
          animation : snowAnimation 3s linear;
          animation-iteration-count: infinite;

    }
    .snow:after{
        margin-left:  -240px;
        opacity: 0.7;
        filter: blur(1px);
    }


    @keyframes snowAnimation {
        from{
            transform: translateY(0);
        }
        to{
            transform: translateY(650px);
        }
    }
    .logintitle{
        font-weight: 900;
        font-size: 2.5rem;
        font-family: 'Rampart One', cursive;
        color: rgba(0, 0, 0, 0.712);
    }
    .loginsubtitle{
        margin-bottom: 2rem;
        font-family: 'Rampart One', cursive;
        color: rgba(0, 0, 0, 0.808);
    }

    @media (max-width: 600px) {
        .logintitle{
            font-size: 1.3rem;
        }
    }
</style>