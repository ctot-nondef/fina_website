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
          <h1 class="pagehead display-3">{{ about[0].headline }}</h1>
        </v-container>
      </section>
      <section class="pt-5 pb-5">
          <v-container grid-list-xl>
            <v-layout row wrap>
              <v-flex xs12 lg6 xl4  v-for="about in about">
                <v-card class="elevation-5 projectcard">
                  <v-card-media :src="about.banner.url" height="200px">
                  </v-card-media>
                  <v-card-title primary-title style="flex-direction: column; align-items: flex-start;">
                      <h3 class="headline cardhead white--text px-2">{{ about.headline }}</h3>
                  </v-card-title>
                  <v-card-text v-html="about.description">
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
