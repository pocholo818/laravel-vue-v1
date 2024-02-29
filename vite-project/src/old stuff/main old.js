// import { createApp } from 'vue'
// import './style.css'

// import { createApp } from 'vue'
// import { createRouter, createWebHistory } from 'vue-router'

// import StudentList from './components/student/Index.vue';

// createApp({})
//     .component('StudentList', StudentList)
//     .mount('#app')

// import App from './App.vue'
// import router from './router';


// createApp(App).mount('#app')

// const createApp = new Vue({
//     el: "#app",
//     router: router,
//     render: h => h(App),
// });

// new Vue({
//     el: '#app',
//     router,
//     render: h => h(App)
//   });

// ===

// import { createApp } from 'vue'
// import { createRouter, createWebHistory } from 'vue-router'

// import App from './App.vue';

// import StudentList from './components/student/Index.vue';
// import StudentCreate from './components/student/Create.vue';

// const routes = [
//     { 
//         path: '/', 
//         component: StudentList ,
//         name: 'student.index'
//     },
//     { 
//         path: '/student/create', 
//         component: StudentCreate ,
//         name: 'student.create'
//     },
// ]

// const router = createRouter({
//     history: createWebHistory(),
//     routes
// })

// createApp(App)
//     .use(router)
//     .mount('#app')

import { createApp } from 'vue'

import App from './App.vue';
import router from './routes/student.js';

// const router = createRouter({
//     history: createWebHistory(),
//     routes
// })

createApp(App)
    .use(router)
    .mount('#app')