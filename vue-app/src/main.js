import { createApp } from 'vue';
import App from './App.vue';
import VueLazyload from 'vue-lazyload';
import VueGTag from 'vue-gtag';

// Create the Vue application
const app = createApp(App);

// Use the VueLazyload plugin
app.use(VueLazyload, {
  // Placeholder image while loading
  // loading: '/path/to/loading-placeholder.jpg',
  // Placeholder image on error
  error: '/path/to/error-placeholder.jpg',
  // Enable lazy loading
  lazyComponent: true,
});

// Custom directive for lazy show
app.directive('lazy-show', {
  mounted(el) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.style.display = ''; // Show the element
          observer.unobserve(el); // Stop observing
        } else {
          el.style.display = 'none'; // Hide the element
        }
      });
    });
    observer.observe(el);
  },
});

// Google Analytics
app.use(
  VueGTag,
  {
    config: {
      id: '{ hoge }'
    }
  },
);

// Mount the app to the element with id 'app'
app.mount('#app');