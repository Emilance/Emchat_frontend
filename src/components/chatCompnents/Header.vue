<script>
    
export default {
    props:{
        method:{type: Function}
    },
    data(){
        return{
            showOption :false
        }
    },
    methods:{
        toggleOption(){
            this.showOption= !this.showOption
        }
    }

}
</script>

<template>
       <div class="headercon">
        <div class="rightcon">

            <div class="usergroup" @click="$emit('send-text', 'profile')"  >
                <svg style="fill:white;  height:1.5rem; width:1.5rem "  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M352 128c0 70.7-57.3 128-128 128s-128-57.3-128-128S153.3 0 224 0s128 57.3 128 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z"/>
                </svg>
            </div>
            
            <div class="testCon">
                <h5   @click="$emit('send-text', 'profile')">
                    Group Name
                </h5>
                <p>
                    userName
                </p>
            </div>
        </div>

            <div class="leftCon">
              
                <div class="hicon"  @click="$emit('send-text', 'search')">
                    <svg style="fill:white;  height:1rem; " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/></svg>
                </div>
              
                <div  @click="toggleOption" class="hicon">            
                    <svg style="fill:white;  height:1rem; " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M64 360c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zm0-160c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zM120 96c0 30.9-25.1 56-56 56S8 126.9 8 96S33.1 40 64 40s56 25.1 56 56z"/></svg>
                </div>
            </div>
            <div v-if="showOption" class="hoption">
                    <p>Contact Info</p>
                    <p>Close chat</p>
                    <p>Leave Group</p>
                    <p>Mute Notification</p>
                    <p>Log Out</p>
             
            </div>
       </div>

</template>

<style>
    .headercon{
        height: 10vh;
        background-color: blueviolet;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 3rem 0 1rem;

    }
    .hoption{
        background-color:  rgba(45, 14, 73, 0.753);
        position: absolute;
        right: 2rem;
        top:10vh;
        z-index: 500;
        width: 11rem;
        font-size: 0.8rem;
        display: flex;
        flex-direction: column;
       
    }

    .hoption >p{
        padding: 0.3rem 0;
        text-align: start;
        cursor: pointer;
        padding-left: 1rem;
    }
    .hoption >ul> li {
        padding: 0.3rem ;
        width: 100%;
    
    }
    .hoption >p:hover{
        background-color: blueviolet;
    }
    .testCon{
         color:white;
         margin:0 1rem;
    }
    .testCon >h5 {
        font-size: 0.7rem;
        font-weight: 500;
        cursor: pointer;
    }
    .testCon >p {
        font-size: 0.5rem;
        font-weight: 100;

    }
    .rightcon{
        display: flex;
        justify-content:center ;
        align-items: center;
       

    }
    .usergroup{
        border: 1px solid white;
        width: 2.3rem;
        height: 2.3rem;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        
    }
    .hicon{
        cursor: pointer;
    }
    .leftCon{
        display: flex;
        width: 10%;
        justify-content: space-between;
        align-items: center;
        height: 100%;
      
    }
</style>