import Vue from 'vue'
import App from './App'
import firebase from 'firebase'

Vue.config.productionTip = false

console.log(process.env.FIRE_BASE);

// Initialize Firebase
var config = {


};
firebase.initializeApp(config);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
})

