import { createWebHistory, createRouter } from "vue-router"
import Home from "../views/home/Home.vue";

// import Admin from '../views/admin/Main.vue'
//INFO Lazzy loading компонента
const Admin = () =>
    import('../views/admin/Main.vue')


const routes = [
    //INFO Home
    {
        path: "/",
        name: "home",
        meta: {layout: 'main'},
        component: Home,
    },

    //INFO Admin
    {
        path: "/admin",
        name: "admin",
        meta: {layout: 'admin'},
        component: Admin,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

// router.beforeEach((to, from, next) => {
//     const token = localStorage.getItem('x-token')
//
//     if(!token) {
//         if (to.name === 'login' || to.name === 'registration') {
//             return next()
//         } else {
//             return next ({
//                 name: 'login'
//             })
//         }
//     }
//     if (to.name === 'login' || to.name === 'registration' && token) {
//         return next({
//             name: 'home'
//         })
//     }
//     next()
// })


export default router
