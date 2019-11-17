<template>
  <div id="app">
    <Navbar />
    <div class="row flex-xl-nowrap" id="mainGrid">
      <div class="col col-md-3 col-xl-2">
        <Sidebar />
      </div>
      <div class="col col-md-9 col-xl-8 py-md-5 pl-md-5">
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";

import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";

@Component({
  components: {
    Navbar,
    Sidebar
  }
})
export default class App extends Vue {}
</script>

<style>
html, body, #app {
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
}

#mainGrid {
  flex-grow: 1;
  width: 100%;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>