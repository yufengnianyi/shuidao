import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/gloable.css'
import request from "@/utils/request";
// import store from "@/store";

Vue.config.productionTip = false

Vue.use(ElementUI,{size: "mini"});

Vue.prototype.request = request

new Vue({
  router,
  store,
  render: h => h(App),
  // created() {
  //   store.commit('addAside',router)
  // }
}).$mount('#app')

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
cd