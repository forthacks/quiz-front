import Vue from "vue";
import Vuex from "vuex";
import VuexEasyFirestore from 'vuex-easy-firestore'

Vue.use(Vuex);

import { Firebase, initFirebase } from '../firebase.js'
import firebaseModule from './firebase.js'
const easyFirestore = VuexEasyFirestore(
  [firebaseModule],
  {logging: true, FirebaseDependency: Firebase}
)

const store = new Vuex.Store({
  plugins: [easyFirestore],
});

initFirebase();

export default store;
