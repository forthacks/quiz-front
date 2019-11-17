<template>
  <div class="home" @keydown.enter="doSubmit">
    <h1 class="stitle">Practice {{ set.title }}</h1>
    <!-- <button class="btn btn-primary" type="button" @click="prev()">Prev</button>
    <button class="btn btn-primary" type="button" @click="next()">Next</button>-->
    <div class="row">
      <div class="col-2 mr-3 py-3 px-3">
        <div class="progress-wrapper pt-1">
          <div class="progress-info">
            <div class="progress-label">
              <span>Correct</span>
            </div>
            <div class="progress-percentage">
              <span>{{ correct }}</span>
            </div>
          </div>
          <div class="progress">
            <div
              class="progress-bar bg-success"
              role="progressbar"
              :aria-valuenow="correct"
              aria-valuemin="0"
              :aria-valuemax="terms.length"
              :style="{ width: `${correct/terms.length*100}%` }"
            ></div>
          </div>
        </div>

        <div class="progress-wrapper pt-1">
          <div class="progress-info">
            <div class="progress-label">
              <span>Incorrect</span>
            </div>
            <div class="progress-percentage">
              <span>{{ incorrect }}</span>
            </div>
          </div>
          <div class="progress">
            <div
              class="progress-bar bg-danger"
              role="progressbar"
              :aria-valuenow="incorrect"
              aria-valuemin="0"
              :aria-valuemax="terms.length"
              :style="{ width: `${incorrect/terms.length*100}%` }"
            ></div>
          </div>
        </div>


      </div>
      <div class="practiceterm py-4 px-5 col">
        <transition name="fade" mode="out-in">
          <h2 class="mb-3" v-if="state == 0">{{ term }}</h2>
          <div v-else>
            <h2 class="text-success font-weight-bold" v-if="state == 1">Correct</h2>
            <h2 class="text-danger font-weight-bold" v-if="state == -1">Incorrect</h2>
            <h3 class="mb-0">{{ term }}</h3>
            <p>{{ def }}</p>
          </div>
        </transition>
        <form @submit.prevent>
          <div class="form-group">
            <input
              ref="input"
              type="text"
              v-model="inputt"
              class="form-control form-control-alternative"
              placeholder="Enter definition..."
              :disabled="state != 0"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
import { mapState } from "vuex";
import axios from "axios";

import Term from "@/components/Term.vue";

@Component({
  computed: mapState({
    set(state) {
      const set = state.fbdata.data[this.$route.params.id] || {};
      return set;
    }
  }),
  components: {
    Term
  }
})
export default class Practice extends Vue {
  idx = 0;
  inputt = "";
  state = 0; // 0: enter, 1: correct, -1: incorrect
  correct = 0;
  incorrect = 0;
  get terms() {
    return this.set.terms ? Object.entries(this.set.terms) : [["", ""]];
  }
  get term() {
    return this.terms[this.idx][0];
  }
  get def() {
    return this.terms[this.idx][1];
  }

  created() {
    window.addEventListener("keydown", this.handleKeyPress);
  }

  next() {
    this.idx = Math.min(this.terms.length - 1, this.idx + 1);
  }
  prev() {
    this.idx = Math.max(0, this.idx - 1);
  }

  async checkDef(a, b) {
    try {
      const response = await axios.get("http://localhost:5000/sim", {
        params: {
          a: a,
          b: b
        }
      });
      return response.data > 0.45;
    } catch (error) {
      return false;
    }
  }

  handleKeyPress(e) {
    if (this.state == 0) return;
    e.preventDefault();
    this.inputt = "";
    this.idx += 1;
    this.state = 0;
    console.log(this.$refs.input);
    this.$nextTick(() => {
      this.$refs.input.focus()
    });
  }

  async doSubmit() {
    const correct = await this.checkDef(this.inputt, this.def);
    if (correct) {
      this.state = 1;
      this.correct += 1;
    } else {
      this.state = -1;
      this.incorrect += 1;
    }
    this.inputt += " — Press any key to continue...";
  }
}
</script>

<style scoped>
.stitle {
  margin-bottom: 20px;
}
.practiceterm {
  background: #f5f7f9;
}
h3,
p {
  margin-left: 5px;
}
</style>