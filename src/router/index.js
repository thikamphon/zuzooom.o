import { createWebHashHistory, createRouter } from 'vue-router'
import Portfolio from '../views/Portfolio.vue'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
// const routes = [
//     { path: '/', name: 'home', component: () => import('../views/Home.vue') },
//     { path: '/portfolio', name: 'portfolio', component: () => import('../views/Portfolio.vue') },
//     { path: '/contact', name: 'contact', component: () => import('../views/Contact.vue') },
// ]

// const router = createRouter({
//     history: createMemoryHistory(),
//     routes,
// })

// router/index.js
const router = createRouter({
    history: createWebHashHistory('/zuzooom.o/'),
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/portfolio', name: 'portfolio', component: Portfolio },
        { path: '/contact', name: 'contact', component: Contact },
    ],
})

export default router
