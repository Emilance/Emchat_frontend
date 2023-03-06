<template>
    <div   class="searchbar">
         <div class="sbheader">
            <div @click="$emit('send-text', 'cancel')" class="cancelicon">
                <svg style="fill:white;  height:100%; "  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>
            </div>
            <p>Search Message</p>
         </div>
         <div class="searchinput">
            <i class="fa fa-arrow-left" aria-hidden="true"></i>
            <input type="text"  placeholder="search"/>
         </div>
         <div class="searchresultcon">
               search for message here
         </div>
    </div>
</template>

<script>
    export default {
        props:{
        method:{type: Function}
    },
    }
</script>

<style >
   .searchbar{
    flex:0.5 ;
    background-color: rgb(90, 63, 116);
    display: flex;
    flex-direction: column;
    transition: 1s ease  all;
   }
   .sbheader{
      height:10vh;
      background-color: blueviolet;
      border-left: 2px solid rgba(255, 255, 255, 0.329);
      display: grid;
      align-items: center;
   }
   .cancelicon{
    width: 1rem;
    position: fixed;
    margin: 1rem;
    cursor: pointer;
     z-index: 500;
   }
   .sbheader> p{
       font-weight: 400;
       font-size: 0.9rem;
       text-align: center;
   }
   .searchinput {
        background-color: rgba(110, 6, 207, 0.726);
        width: 80%;
        margin: 0.5rem auto;
        padding: 0 0.3rem;
        height: 2rem;
        display: flex;
        align-items: center;
        border-radius: 0.7rem;
    }
    .searchinput >.fa-arrow-left{
         color:rgba(255, 255, 255, 0.658);
    }
    .searchinput > input{
       background-color: transparent;
       border: none;
       outline: none;
       color:white;
       height: 100%;
    }
   
    .searchresultcon{
        flex:1;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 00.8rem;
    }


   @media (max-width:700px) {
    .searchbar{
        position: absolute;
        height: 100vh;
        width:65%;
        right:0;
    }
   
   }
</style>