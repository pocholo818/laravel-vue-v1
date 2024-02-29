import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { 
        path: '/', 
        component: () => import('@/views/Index.vue'),
        name: 'index'
    },
    { 
        path: '/student', 
        component: () => import('@/views/student/Index.vue'),
        name: 'student.index'
    },
    { 
        path: '/student/create', 
        component: () => import('@/views/student/Create.vue'),
        name: 'student.create'
    },
    { 
        path: '/student/edit/:id', 
        component: () => import('@/views/student/Edit.vue'),
        name: 'student.edit'
    },
]

export default createRouter({
    history: createWebHistory(),
    routes
})