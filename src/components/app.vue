<template>
    <v-app light>
      <v-toolbar app fixed class="elevation-0">
          <v-toolbar-title>
            <router-link :to="{ name: 'start' }">
              <div class="logo">
                <img src="@/assets/logo.png" height="55px" alt="Vuetify.js" class="mb-1">
              </div>
            </router-link>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <div class="text-xs-center hidden-lg-and-up">
            <v-menu offset-y>
              <v-btn class="elevation-5" icon slot="activator"><v-icon>list</v-icon></v-btn>
              <v-list v-if="!loading">
                <v-list-tile v-for="item in items" :key="item.tid[0].value" :to="{name: item.field_path[0].value}">
                  <v-list-tile-title>{{ item.name[0].value }}</v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>
          </div>
          <v-toolbar-items >
            <v-tabs v-model="active" slider-color="primary"  color="grey lighten-4" class="hidden-md-and-down">
              <v-tab v-for="item in items" :key="item.tid[0].value" :to="{name: item.field_path[0].value}"
                ripple
              >
                {{ item.name[0].value }}
              </v-tab>
            </v-tabs>
          </v-toolbar-items>
      </v-toolbar>
      <main>
        <v-slide-y-transition mode="out-in">
            <router-view name="Content"></router-view>
        </v-slide-y-transition>
      </main>
      <v-footer class="primary"  app v-if="!loading">
          <v-flex xs12>
            <v-layout row wrap  >
              <!-- <v-flex xs12 md4 class="text-xs-center mt-5 mb-5">
                <v-text-field name="input-1" v-model="searchstring" v-on:keyup.enter="searchfunc" label="Suche" dark box ></v-text-field>
              </v-flex> -->
              <v-flex xs12 md6 class="text-xs-center mt-5 mb-5">
                <v-btn color="white" flat href="mailto:vchc@univie.ac.at">KONTAKT</v-btn>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-footer color="primary"  app v-if="!loading">
        <v-footer  app v-if="!loading">
          <v-flex xs12 >
            <v-layout row wrap>
            </v-layout>
          </v-flex>
      </v-footer>
    </v-app>
</template>

<script>
  import HELPERS from '../helpers';

  export default {
    /* eslint no-console: ["error", { allow: ["log"] }] */
    mixins: [HELPERS],
    data: () => ({
      toFetch: {
        items: 'menu?vid=menu',
      },
      searchstring: '',
      items: null,
      loading: true,
      active: '',
    }),
    watch: {
      // reload data if language is swapped
      $route(to, from) {
        if (to.params.lang !== from.params.lang) {
          location.reload();
        }
      },
    },
    methods: {
      searchfunc(term) {
        this.$router.push({ name: 'search', params: { searchstring: term.target.value } });
      },
    },
    route: {
      canReuse: false,
    },
  };

</script>

<style >

</style>
