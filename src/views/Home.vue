<template>
  <div class="home">
    <h1 class="stitle">Sets</h1>
    <div class="terms">
      <div class="term" v-for="set in $store.state.fbdata.data" :key="set.id" @click="$router.push(`/set/${set.id}`)">
        <span class="tname">{{ set.title }}</span>
        <span class="tdef">{{ Object.keys(set.terms).length }} terms</span>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";

import Term from "@/components/Term.vue";

@Component({
  components: {
    Term
  }
})
export default class Home extends Vue {
  count = 0;
  display = true;
  title = "asldfjalskf";
  list = [];
}
</script>
