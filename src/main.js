import Vue from 'vue';
import App from './App.vue';
import VueDraggableResizable from 'vue-draggable-resizable';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes, faWindowMinimize, faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faTimes, faWindowMinimize, faExpandArrowsAlt);

Vue.config.productionTip = false;
Vue.component('vue-draggable-resizable', VueDraggableResizable);
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  render: h => h(App),
}).$mount('#app');
