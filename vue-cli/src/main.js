import Vue from 'vue'
import Vuelidate from 'vuelidate'

import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import messagePlugin from '@/utils/message.plugin'

import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter) 


firebase.initializeApp({
  apiKey: "AIzaSyAhgsWqHAM9UIxuM2v5C7-0qCPqap_T9Ko",
  authDomain: "lessons360-vue.firebaseapp.com",
  databaseURL: "https://lessons360-vue.firebaseio.com",
  projectId: "lessons360-vue",
  storageBucket: "lessons360-vue.appspot.com",
  messagingSenderId: "1010699728477",
  appId: "1:1010699728477:web:fb581f482b81835786ffb4",
  measurementId: "G-MJ2NC69M9Z"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})