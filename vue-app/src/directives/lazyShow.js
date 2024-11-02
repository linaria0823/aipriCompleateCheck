export default {
  bind(el, binding) {
    console.log('lazyShow directive bound', el, binding); // el と binding を表示
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log('Element is in view', el, binding.value); // binding.value を表示
          el.style.display = 'block';
        } else {
          el.style.display = 'none';
        }
      });
    });

    observer.observe(el);
    el.__vueLazyShowObserver__ = observer; // Store the observer
  },
  unbind(el) {
    if (el.__vueLazyShowObserver__) {
      el.__vueLazyShowObserver__.unobserve(el);
      delete el.__vueLazyShowObserver__; // Clean up
    }
  }
};