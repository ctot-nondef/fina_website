<template>
  <v-content v-if="!loading">
       <v-carousel style="height: 100%" hide-delimiters>
         <v-carousel-item v-for="(slide, i) in projects" :src="slide.primaryImageOfPage.url" :key="i">
           <v-jumbotron dark>
             <v-container fill-height>
               <v-layout column>
                 <v-flex xs12></v-flex>
                 <v-flex xs12></v-flex>
                 <v-spacer></v-spacer>
                 <v-layout column xs12>
                     <h3 class="display-1 headline px-1 py-1">{{ slide.headline }}</h3>
                     <h3 class="title description px-1 py-1 hidden-md-and-down">{{ slide.description }}</h3>
                 </v-layout>
               </v-layout>
             </v-container>
           </v-jumbotron>
         </v-carousel-item>
       </v-carousel>
    </section>
    <section class="pt-5 pb-5">
        <v-container grid-list-xl>
          <v-layout row wrap>
            <v-flex xs12 lg6 xl4  v-for="about in about">
              <v-card class="elevation-5 projectcard white--text">
                <v-container fluid grid-list-sm>
                  <v-layout row wrap>
                    <v-flex xs12 md7>
                        <v-card-title primary-title style="flex-direction: column; align-items: flex-start;">
                            <h6>{{ about.headline }}</h6>
                        </v-card-title>
                    </v-flex>
                    <v-flex xs12>
                        <v-card-text v-html="about.description">
                        </v-card-text>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
    </section>
  </v-content>
</template>

<script>
import HELPERS from '../helpers';

export default {
  mixins: [HELPERS],
  data: () => ({
    toFetch: {
      about: 'full\\2',
      partners: 'full\\3',
      projects: 'teaser\\?type=project',
    },
    windowSize: {
      x: window.innerWidth,
      y: window.innerHeight - 64,
    },
    loading: true,
    loadingCarousel: true,
  }),
  mounted() {
    this.onResize();
    this.$nextTick(() => {
      setTimeout(() => {
        this.loadingCarousel = false;
      }, 500);
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
.headline {
  background-color: rgba(34,34,34,0.5);
  width: 80%;
}
.description {
  background-color: rgba(186,15,43,0.5);
  width: 80%;
}
</style>
