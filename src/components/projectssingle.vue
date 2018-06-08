<template>
  <div class="">
    <v-container fluid v-if="loading">
      <v-slide-y-transition mode="out-in">
        <v-layout column align-center>
          <img src="@/assets/logo.png" alt="Vuetify.js" class="mb-5">
        </v-layout>
      </v-slide-y-transition>
    </v-container>
    <v-content v-if="!loading">
      <section>
        <v-parallax v-bind:src="about[0].primaryImageOfPage.url" height="380">
          <v-layout column align-center justify-center>
            <div class="layer"></div>
            <h1 class="cardhead display-3 py-2 px-2">{{ about[0].headline }}</h1>
          </v-layout>
        </v-parallax>
        <v-container grid-list-md text-xs-center class="mt-5 mb-5" >
          <v-layout class="pt-5 pb-5" row wrap align-start justify-center>
          <v-flex xs12 md6 lg5>
            <div justify-center >
              <span class="subheading" style="text-align: left;" v-html="about[0].mainContentOfPage"></span>
            </div>
          </v-flex>
          <v-flex xs0 md12 lg1 hidden-sm-and-down></v-flex>
          <v-flex xs12 lg6 xl4>
            <v-layout >
              <v-flex>
                <v-carousel lazy>
                  <v-carousel-item v-for="(slide, i) in about[0].imageteaser" :src="slide.url" :key="i"></v-carousel-item>
                </v-carousel>
              </v-flex>
            </v-layout>
          </v-flex>
          </v-layout>
        </v-container>
      </section>
    </v-content>
  </div>
</template>

<script>
import HELPERS from '../helpers';

export default {
  mixins: [HELPERS],
  data: () => ({
    about: [],
    windowSize: {
      x: window.innerWidth,
      y: window.innerHeight - 64,
    },
    loading: true,
  }),
  mounted() {
    this.onResize();
  },
  created() {
    this.get(`${this.$route.params.lang}/full/${this.$route.params.nid}`).then((res) => {
      console.log(res);
      this.about = res.data;
      this.loading = false;
    });
  },
  methods: {
  },
  watch: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
