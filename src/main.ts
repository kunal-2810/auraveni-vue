import { createApp } from 'vue';
import './style.css';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(router);
app.mount('#app');
