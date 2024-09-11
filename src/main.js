import { createApp } from 'vue'
import App from './App.vue'
import router from '../src/route/route'
import PrimeVue from 'primevue/config';

import '/src/assets/styles.scss';
import Ripple from 'primevue/ripple';

// Define the app before using it
const app = createApp(App);

app.use(router);
app.use(PrimeVue, { ripple: true });
app.directive('ripple', Ripple); // Add Ripple directive
app.mount('#app');
