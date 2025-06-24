import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
    { path: '/', name: 'home', component: () => import('../views/Home.vue') },
    { path: '/portfolio', name: 'portfolio', component: () => import('../views/Portfolio.vue') },
    { path: '/contact', name: 'contact', component: () => import('../views/Contact.vue') },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router