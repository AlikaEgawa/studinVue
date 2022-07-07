import Vue from 'vue';
import App from './App.vue';
import LikeNumber from "./components/LikeNumber.vue"

Vue.config.productionTip = false
Vue.component('LikeNumber', LikeNumber);
Vue.directive("border", {
  bind() {
    // ディレクティブが初めて対象の要素にひも付いた時
  },
  inserted() {
    // 親Nodeに挿入された時
  },
  update() {
    // コンポーネントが更新される度。子コンポーネントが更新される前
  },
  componentUpdated(){
    // コンポーネントが更新される度。子コンポーネントが更新された後
  },
  unbind(){
    // ディレクティブがひも付いている要素から取り除かれたとき
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
