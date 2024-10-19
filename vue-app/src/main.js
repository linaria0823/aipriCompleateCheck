import { createApp } from 'vue';
import App from './App.vue';
import VueLazyload from 'vue-lazyload';

// Create the Vue application
const app = createApp(App);

// Use the VueLazyload plugin
app.use(VueLazyload, {
  // Placeholder image while loading
  //loading: '/path/to/loading-placeholder.jpg',
  // Placeholder image on error
  error: '/path/to/error-placeholder.jpg',
  // Enable lazy loading
  lazyComponent: true,
});

// Mount the app to the element with id 'app'
app.mount('#app');