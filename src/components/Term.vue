<template>
  <div class="term">
    <span class="tname">{{ term }}</span>
    <span class="tdef">{{ def }}</span>
  </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  props: ["term", "def", "onEdit", "editing", "onClick"]
})
export default class Term extends Vue {

}
</script>

<style>
.term {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #f5f7f9;
  margin-bottom: 10px;
  transition: all 0.1s ease;
  border-radius: 5px;
}
.term:hover {
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
}
.tname, .tdef {
  flex-grow: 1;
}
.tname {
  max-width: 300px;
}
</style>