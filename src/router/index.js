import { createRouter, createWebHistory } from 'vue-router'
import SplashScreen from '@/components/SplashScreen.vue'
import LoginView from "@/views/LoginView.vue";
import Home from '@/views/SolarviewHome.vue'
import ForgotPasswordView from "@/views/ForgotPasswordView.vue";

const routes = [
    {
        path: '/',
        name: 'Splash',
        component: SplashScreen
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginView
    },
    {
        path: '/home',
        name: 'SolarView-Home',
        component: Home
    },
    {
        path: '/forgot-password',
        name: 'Forgot-Password',
        component: ForgotPasswordView
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})


router.beforeEach((to, from, next) => {
    if (from.name === null) {
        if (to.name !== 'Splash') {
            next({ name: 'Splash', query: { redirect: to.fullPath } })
        } else {
            next()
        }
    } else {
        next()
    }
})
export default router