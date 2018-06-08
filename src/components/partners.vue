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
          <v-flex lg6 xl4 hidden-sm-and-down>
            <v-layout column align-center >
              <v-flex v-for="(img, index) in about[0].imagefull" :key="index">
                <a :href="img.alt" target="_blank"><img :src="img.url" style="max-width:450px;" ></a>
              </v-flex>
            </v-layout>
          </v-flex>
          </v-layout>
        </v-container>
      </section>
      <section class="pt-5 pb-5">
          <v-container grid-list-xl >
            <v-layout row wrap justify-center>
              <v-flex xs12 lg6 xl4  v-for="project in projects">
                <v-card class="elevation-5 projectcard">
                  <v-card-media :src="project.logo[0].url" height="200px">
                  </v-card-media>
                  <v-card-title class="cardheadcontainer">
                      <h3 class="headline cardhead white--text px-2">{{ project.headline }}</h3>
                  </v-card-title>
                  <v-card-text class="cardheadcontainer" v-html="project.description">
                  </v-card-text>
                </v-card>
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
    toFetch: {
      about: 'full\\3',
      projects: 'teaser\\?type=institution',
    },
    windowSize: {
      x: window.innerWidth,
      y: window.innerHeight - 64,
    },
    loading: true,
  }),
  mounted() {
    this.onResize();
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
