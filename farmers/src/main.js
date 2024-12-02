import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import bootstrap from 'bootstrap'

//import 'bootstrap/dist/css/bootstrap.min.css';

createApp(App).use(router).use(bootstrap).mount('#app')


