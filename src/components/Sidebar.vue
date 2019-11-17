<template>
  <div id="sidebar">
    <div class="sidebar-section">
      <h5>Sets</h5>
      <router-link
        v-for="item in $store.state.fbdata.data"
        :to="`/set/${item.id}`"
        :key="item.id"
      >
        {{ item.title }}
      </router-link>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";

@Component()
export default class Sidebar extends Vue {}
</script>

<style scoped>
#sidebar {
  background-color: #f5f7f9;
  border-right: 1px solid #e6ecf1;
  height: 100%;
  padding: 20px;
}
#sidebar a {
  display: block;
}
#sidebar .sidebar-section {
  margin-bottom: 20px;
}
</style>
