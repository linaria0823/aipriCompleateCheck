import { createApp } from 'vue';
import App from './App.vue';
import VueLazyload from 'vue-lazyload';
import VueGTag from 'vue-gtag';
import lazyShow from './directives/lazyShow.js'; // ディレクティブのインポート

// Create the Vue application
const app = createApp(App);

// Register the custom directive
app.directive('lazy-show', lazyShow); // 正しいディレクティブの登録

// Use the VueLazyload plugin
app.use(VueLazyload, {
  preLoad: 1.3,
  error: require('@/img/icon/Error.webp'),
  loading: require('@/img/icon/Loading_icon.gif'),
  attempt: 1,
});

// Google Analytics
app.use(
  VueGTag,
  {
    config: {
      id: '{ hoge }' // 適切なIDに置き換えてください
    }
  },
);

// Mount the app to the element with id 'app'
app.mount('#app');