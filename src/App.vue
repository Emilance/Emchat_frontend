<script >
import {RouterView}   from  "vue-router"
import ChatPage from './components/ChatPage.vue'
import UserLogIn from './components/UserLogIn.vue';
// import { socket } from "./websocket";



export default {
   data(){
    return {
      // socket : socket,
    }
   },
    components: { ChatPage, UserLogIn },
    methods: {
      sendMessage(message){
        console.log(message);
        this.connection.send(message);
      }
    },

    mounted: function(){
      
                }
} 

      
    


</script>

<template>
  <div class="container">
    <!-- <router-view></router-view> -->
         <!-- <ChatPage/> -->
         <!-- <UserLogIn/> -->
         <RouterView  />
  </div> 
</template>

<style >
 
  
</style>
