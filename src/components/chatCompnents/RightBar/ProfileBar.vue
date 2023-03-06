<template>
    <div  class="profilebar">
        <div class="sbheader">
            <div  @click="$emit('send-text', 'cancel')"  class="cancelicon">
                <svg style="fill:white;  height:100%; "  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>
            </div>
            <p>Contact Info</p>
         </div>
         <div class="dpsection">
                <div class="image">
                    <img src="/user1.png"  />

                </div>
                <h3>Name of User</h3>
                <p>id: 08973436149</p>
         </div>
         <div class="aboutsection">
            <h4>About</h4>
            <p>...................</p>
         </div>
         <div class="mediasection">
            
         </div>
    </div>
</template>

<script>
    export default {
        props:{
            method:{type: Function}
        }
    }
</script>

<style >
    .profilebar{
        flex:0.5 ;
        background-color: rgb(90, 63, 116)

    }
    .dpsection{
        height: 18rem;
        width: 95%;
        border-radius: 1rem;
        margin: 0.2rem auto;
        background-color: rgba(137, 43, 226, 0.37);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .image{
        height: 12rem;
        widows: 12rem;
        border-radius: 100%;
    }
    .image > img{
        height: 100%;
        widows: 100%;
        border-radius: 100%;
    }
    .dpsection> h3{
        font-size: 1rem;
        font-weight: 600;
    }
    .dpsection>p{
        font-size: 0.7rem;
    }
    .aboutsection{
        height: 3rem;
        width: 95%;
        background-color: rgba(137, 43, 226, 0.37);
        border-radius: 1rem;
        margin: 0.2rem auto;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
        padding: 1.5rem;
    }
    .aboutsection>h4{
        font-size: 0.8rem;
        font-weight: 600;
        text-align: center;
    }
    .aboutsection>p{
        font-size: 0.7rem;
        
        text-align: center;
    }


    @media (max-width:700px) {
    .profilebar{
        position: absolute;
        height: 100vh;
        width:65%;
        right:0;
    }
   
   }
</style>