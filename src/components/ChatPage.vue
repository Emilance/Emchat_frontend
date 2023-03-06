
<script>
import Header from "./chatCompnents/Header.vue"
import Footer from "./chatCompnents/Footer.vue"
import SideHeader from "./sideBar/SideHeader.vue"
import Search from "./sideBar/Search.vue"
import Friend from "./sideBar/Friend.vue"
import ChatArena from "./chatCompnents/ChatArena.vue"
import SearchBar from "./chatCompnents/RightBar/SearchBar.vue"
import ProfileBar from "./chatCompnents/RightBar/ProfileBar.vue"
import { socket } from "../websocket"


 
export default {
     data(){
        return{
            messages: [] ,
            userInfo: [
                 { 
                    username :"Eminence",
                    lastMessage: "how are you doing ?",
                    picsurl :"/user3.png",
                    missedMessage : 1,
                    time: "6:00AM"
                 },
                 { 
                    username :"Peter",
                    lastMessage: "I have gone home",
                    picsurl :"/user2.jpg",
                    missedMessage : 2,
                    time: "8:52pM"
                 },
                 { 
                    username :"El John",
                    lastMessage: "I amhungry pls, can u send money?",
                    picsurl :"/user5.jpg",
                    missedMessage : 7,
                    time: "1:40AM"
                },

            ],
            showmessagesearch:"cancel",
            mymessage :"",
            socket : socket,
            myMessagesArray: []
            
           
        }
     },
    components: { Header, Footer, SideHeader, Search, Friend, ChatArena, SearchBar, ProfileBar },
    methods:{
      togglemessagesearch(textprop){
        this.showmessagesearch = textprop
    
      },
      async  sendMessage(param){
        this.mymessage = param
        const messageData = {
          message : this.mymessage,
          room  : " ",
          user :1,
          date : new Date(Date.now()).getHours() + ":" +  new Date(Date.now()).getMinutes(),
          Username : " "
        }
        await  this.socket.emit("send_message", messageData)
        
        this.messages.push({...messageData, user : 2 })
        console.log(this.messages)
      
      },
       

    },

    mounted:function (){
        this.socket.on("receive_message", async (data)=>{
           this.messages.push(data)
           console.log(JSON.parse(JSON.stringify(this.messages)))
       })

    }
    
}
        


</script>

<template> 
     <div class="container">
        <div class="sidebar">
            <SideHeader/>
            <Search/>
            <Friend  v-for="info in userInfo"  :username="info.username" 
            :lastMessage="info.lastMessage"
            :picsurl = "info.picsurl"
            :missedMessage="info.missedMessage"
            :time ="info.time"
            />
        </div>
        <div class="chatarea">
         <div class="chatareacon">
           <Header  @send-text ="togglemessagesearch"  />
           <ChatArena   :messageList="JSON.parse(JSON.stringify(this.messages))"/>
           <Footer      @send_message="sendMessage"/>
         </div>
           <SearchBar  v-if="showmessagesearch  === 'search'"  @send-text="togglemessagesearch"/>
           <ProfileBar  v-if="showmessagesearch === 'profile'"  @send-text="togglemessagesearch"/>
        </div>

     </div>

</template>

<style>
  .container {
    color:white;
    height: 100vh;
    width: 100%;
    display: flex;
    transition: 1s ease;
  
  }
  .chatarea{
    flex: 1;
    display: flex;
}
.chatareacon{
     flex:1;
}
.sidebar{
    flex:0.4 ;
    background-color: rgb(90, 63, 116);
  }
  @media (max-width:700px) {
    .sidebar{
      display: none;
     }
     .sidebar{
    flex:1 ;
    background-color: rgb(90, 63, 116);
  }

  }
  
</style>