import Vue from 'vue';
import App from './App.vue';
import VueDraggableResizable from 'vue-draggable-resizable';

Vue.config.productionTip = false;
Vue.component('vue-draggable-resizable', VueDraggableResizable);

new Vue({
  render: h => h(App),
}).$mount('#app');
