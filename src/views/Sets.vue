<template>
  <div class="home">
    <h1 class="stitle">{{ set.title }}</h1>
    <!-- <router-link tag="button" class="btn btn-primary" type="button">Flashcards</router-link> -->
    <router-link tag="button" class="btn btn-primary" type="button" :to="`/practice/${set.id}`">Practice</router-link>
    <hr>
    <div class="terms">
      <Term v-for="(def, term) in set.terms"
        :key="term" :term="term" :def="def"
      />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
import { mapState } from 'vuex';

import Term from "@/components/Term.vue";

@Component({
  computed: mapState({
    set(state) {
      return state.fbdata.data[this.$route.params.id] || {};
    }
  }),
  components: {
    Term
  }
})
export default class Sets extends Vue {}
</script>

<style scoped>
.stitle {
  margin-bottom: 20px;
}
</style>