import { ref, createApp } from 'vue';

// Create a new Vue instance to use as the event bus
const eventBus = createApp({});
const events = ref({});

// Emit an event
function emit(event, ...args) {
  events.value[event]?.forEach(callback => {
    callback(...args);
  });
}

// Register an event listener
function on(event, callback) {
  if (!events.value[event]) {
    events.value[event] = [];
  }
  events.value[event].push(callback);
}

// Remove an event listener
function off(event, callback) {
  if (!events.value[event]) {
    return;
  }
  events.value[event] = events.value[event].filter(cb => cb !== callback);
}

// Add the event bus to the global properties of the application
eventBus.config.globalProperties.$eventBus = {
  emit,
  on,
  off
};

export default eventBus;