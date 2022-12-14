import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue';
import userList from '@/views/Users.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';

const routes = [
    {path: '/', component: Home},
    {path: '/login', component: Login},
    {path: '/userList', component: userList},
    {path: '/register', component: Register},
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
