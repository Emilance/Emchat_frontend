
import {createRouter, createWebHistory} from"vue-router"

import ChatPage from '../components/ChatPage.vue'
import UserLogIn from '../components/UserLogIn.vue';

const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes :[
        {
            path:"/",
            name:"chatpage",
            component: ChatPage
        },
        {

            path:"/login",
            name:"login",
            component: UserLogIn
        }
    ]
})

export default router