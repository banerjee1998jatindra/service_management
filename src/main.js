import { createApp } from 'vue'
import App from './App.vue'
import router from '../src/route/route'
import Aura from '@primevue/themes/aura';
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';
import PrimeVue from 'primevue/config';
import Ripple from 'primevue/ripple';
import Chart from 'primevue/chart';
import Menu from 'primevue/menu';
import DataTable from 'primevue/datatable';
import Button from 'primevue/button';
import tooltipDirective from 'primevue/button';
import ConfirmPopup from 'primevue/confirmpopup';
import Drawer from 'primevue/drawer';
import InputText from 'primevue/inputtext';
import Column from 'primevue/column';
import SelectButton from 'primevue/selectbutton';
import Popover from 'primevue/popover';
import Dialog from 'primevue/dialog';
import StyleClass from 'primevue/styleclass';
import styleclassDirective from 'primevue/styleclass';
import Toast from 'primevue/toast';
import Rating from 'primevue/rating';


import '../src/assets/styles.scss';
import '@/assets/tailwind.css';

// Define the app before using it
const app = createApp(App);

app.use(router);
app.use(PrimeVue, { 
    ripple: true,
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: '.app-dark'
        }
    } 
});
app.use(ToastService);
app.use(ConfirmationService);
app.component('Chart', Chart);
app.component('Menu', Menu);
app.component('DataTable', DataTable);
app.component('Button', Button);
app.directive('tooltip', tooltipDirective);
app.component('ConfirmPopup', ConfirmPopup);
app.component('Drawer', Drawer);
app.component('InputText', InputText);
app.component('Column', Column);
app.component('SelectButton', SelectButton);
app.component('Popover', Popover);
app.component('Dialog', Dialog);
app.component('Toast', Toast);
app.component('Rating', Rating);
app.directive('styleclass', styleclassDirective);
app.component('StyleClass', StyleClass);
app.directive('ripple', Ripple);
app.mount('#app');
