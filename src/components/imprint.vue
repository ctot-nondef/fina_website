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
            <h1 class="cardhead display-3 py-2 px-2">Imprint</h1>
          </v-layout>
        </v-parallax>
        <v-container grid-list-md text-xs-center class="mt-5 mb-5" >
          <v-layout class="pt-5 pb-5" row wrap align-start justify-center>
          <v-flex xs12 md6 lg5>
            <div justify-center >
              <span class="subheading" style="text-align: left;">
                Offenlegung gemäß §§ 24, 25 Mediengesetz und § 5 E-Commerce-Gesetz

                Medieninhaberin, Herausgeberin, inhaltliche und redaktionelle Verantwortung, Dienstanbieterin:

                Österreichische Akademie der Wissenschaften
                Juristische Person öffentlichen Rechts (BGBl 569/1921 idF BGBl I 130/2003)
                Austrian Centre for Digital Humanities (ACDH)
                Dr. Ignaz Seipel-Platz 2, 1010 Wien, Österreich
                E-Mail: acdh@oeaw.ac.at

                Unternehmensgegenstand:

                Die Österreichische Akademie der Wissenschaften (ÖAW) hat den gesetzlichen Auftrag, die Wissenschaft in jeder Hinsicht zu fördern. Als Gelehrtengesellschaft pflegt die ÖAW den Diskurs und die Zusammenarbeit der Wissenschaft mit Öffentlichkeit, Politik und Wirtschaft.
                Das Austrian Centre for Digital Humanities ist ein Institut der ÖAW, das mit dem Ziel gegründet wurde, digitale Methoden und Ansätze in den geisteswissenschaftlichen Disziplinen zu fördern. Das ACDH unterstützt digital arbeitende Forscher in vielfältiger Weise.
                Gemeinsam mit 8 weiteren Partnerinstitutionen bildet die ÖAW, repräsentiert vom ACDH, das digital humanities austria Konsortium, das sich der Beförderung und Weiterentwicklung digitaler Methoden für die Geisteswissenschaften widmet. Die weiteren Partnerinstitutionen des Konsortiums sind das Bundesministerium für Wissenschaft, Forschung und Wirtschaft, die Österreichische Nationalbibliothek, das Österreichische Forschungsinstitut für Artificial Intelligence, die Technische Universität Graz und die Technische Universität Wien sowie die Universitäten Graz, Wien und Innsbruck.

                Vertretungsbefugte Organe:

                Präsident: o. Univ.-Prof. Dr. Anton Zeilinger
                Vizepräsident: Univ.-Doz. Dr. phil. Michael Alram
                Klassenpräsidentin: o. Univ.-Prof. Dr. Brigitte Mazohl
                Klassenpräsident: Univ.-Prof. Dipl.-Ing. Dr.techn. Georg Brasseur
                Als Aufsichtsorgan besteht der Akademierat. Siehe mehr dazu unter http://www.oeaw.ac.at/die-oeaw/gremien-der-oeaw/akademierat/

                Grundlegende Richtung:

                Diese Website dient zur Information der Öffentlichkeit über das Digital Humanities Austria (dha) Konsortium.

                Haftungsausschluss:

                Die Österreichische Akademie der Wissenschaften übernimmt keinerlei Gewähr für die Aktualität, Korrektheit, Vollständigkeit oder Qualität der bereitgestellten Informationen.
                Im Falle des Bestehens von Links auf Webseiten anderer Medieninhaber, für deren Inhalt die ÖAW weder direkt oder indirekt mitverantwortlich ist, übernimmt die ÖAW keine Haftung für deren Inhalte und schließt jegliche Haftung hierfür aus.

                Urheberrechtlicher Hinweis:


                Diese Seite und ihre Inhalte sind, sofern nicht anders gekennzeichnet, unter der creative commons Lizenz CC-BY-SA 4.0 International lizensiert (Namensnennung – Weitergabe unter gleichen Bedingungen).
              </span>
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
      <v-content v-if="!loading">
        <section class="pt-5 pb-5">
          <v-container grid-list-xs>
            <v-layout row wrap justify-center>
              <v-flex xs6>
                  <h1 class="display-4 pagehead py-2 px-2">Projects</h1>
              </v-flex>
            </v-layout>
          </v-container>
        </section>
        <section class="pt-5 pb-5">
            <v-container grid-list-xl >
              <v-layout row wrap justify-center>
                <v-flex xs12 lg6 xl4  v-for="project in projects">
                  <v-card class="elevation-5 projectcard" :to="{name: 'psingle', params: { nid: project.name } }">
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
