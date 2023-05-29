import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Divider from 'primevue/divider';
import Card from 'primevue/card';
import Chart from 'primevue/chart';
// import 'primevue/resources/primevue.min.css';                 //core css
// import 'primeicons/primeicons.css'; 
Vue.config.productionTip = false

Vue.use(PrimeVue, { ripple: true });
// eslint-disable-next-line
Vue.component("DataTable", DataTable);
// eslint-disable-next-line
Vue.component("Column", Column);
// eslint-disable-next-line
Vue.component("Divider", Divider);
// eslint-disable-next-line
Vue.component("Card", Card);
// eslint-disable-next-line
Vue.component("Chart", Chart);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
