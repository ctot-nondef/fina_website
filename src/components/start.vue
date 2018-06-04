<template>
  <v-content v-if="!loading">
       <v-carousel style="height: 100%" hide-delimiters>
         <v-carousel-item v-for="(slide, i) in projects" :src="slide.primaryImageOfPage.url" :key="i">
           <v-jumbotron dark>
             <v-container fill-height>
               <v-layout align-end>
                 <v-flex>
                   <h3 class="display-1 headline px-1 py-1">{{ slide.headline }}</h3>
                 </v-flex>
               </v-layout>
             </v-container>
           </v-jumbotron>
         </v-carousel-item>
       </v-carousel>
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
  background-color: rgba(186,15,43,0.5);
}
</style>
