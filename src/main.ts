import { Buffer } from 'buffer';
import { createApp } from 'vue';
import { VueQueryPlugin } from '@tanstack/vue-query';
import { DefaultApolloClient } from '@vue/apollo-composable';
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core';
import { createPinia } from 'pinia';
import piniaPersist from 'pinia-plugin-persist';

import router from './router';
import './style.css';
import App from './App.vue';

window.Buffer = window.Buffer || Buffer;

const pinia = createPinia();
pinia.use(piniaPersist);

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  // TODO make access token conditional
  uri: 'https://api-mumbai.lens.dev',
  headers: {
    ...(sessionStorage.getItem('user')?.accessToken && { 'x-access-token': 'woof' }),
    'Access-Control-Allow-Origin': '*',
  },
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

createApp(App).use(VueQueryPlugin).use(pinia).use(router).provide(DefaultApolloClient, apolloClient).mount('#app');
