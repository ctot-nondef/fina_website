<template>
  <v-content v-if="!loading">
    <section class="pt-5 pb-5">
       <v-carousel style="height: 60%" hide-delimiters>
         <v-carousel-item v-for="(slide, i) in projects" :src="slide.primaryImageOfPage.url" :key="i">
           <v-jumbotron dark>
             <v-container fill-height>
               <v-layout column>
                 <v-flex xs12></v-flex>
                 <v-flex xs12></v-flex>
                 <v-spacer></v-spacer>
                 <v-layout column xs12>
                     <h3 class="display-1 headline carouselhead px-1 py-1">{{ slide.headline }}</h3>
                     <h3 class="title carouseldescription px-1 py-1 hidden-md-and-down">{{ slide.description }}</h3>
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
            <v-flex xs12 lg6 xl4  v-for="about in partners">
              <v-card class="elevation-5 projectcard">
                <v-card-media v-if="about.banner" :src="about.banner.url"  height="200px">
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
.carouselhead {
  background-color: rgba(34,34,34,0.5);
  width: 80%;
}
.carouseldescription {
  background-color: rgba(186,15,43,0.5);
  width: 80%;
}

.cardhead {
  background-color: rgb(186,15,43);
}

</style>
