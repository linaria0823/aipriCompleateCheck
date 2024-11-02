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
  // Placeholder image while loading
  // loading: '/path/to/loading-placeholder.jpg',
  // Placeholder image on error
  error: '/path/to/error-placeholder.jpg',
  // Enable lazy loading
  lazyComponent: true,
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