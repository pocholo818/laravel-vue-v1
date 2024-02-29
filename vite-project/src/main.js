import { createApp } from 'vue'

import App from '@/App.vue';
import router from '@/routes/student.js';

createApp(App)
    .use(router)
    .mount('#app')