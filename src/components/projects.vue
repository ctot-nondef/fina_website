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
      <section class="pt-5 pb-5">
        <v-container grid-list-xs>
          <v-layout row wrap justify-center>
            <v-flex xs1>
                <h1 class="display-4 pagehead py-2 px-2">Projects</h1>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
      <section class="pt-5 pb-5">
          <v-container grid-list-xl >
            <v-layout row wrap justify-center>
              <v-flex xs12 lg6 xl4  v-for="project in projects">
                <v-card class="elevation-5 projectcard">
                  <v-card-media :src="project.thumbnailUrl.url" height="200px">
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
      about: 'full\\2',
      projects: 'teaser\\?type=project',
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
