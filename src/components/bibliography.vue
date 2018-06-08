<template>
  <v-container>
    <v-content v-if="!loading">
      <section class="pt-5 pb-5">
        <v-container grid-list-xs>
          <v-layout row wrap justify-center>
            <v-flex xs6>
                <h1 class="display-4 pagehead py-2 px-2">Bibliography</h1>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
      <v-data-table
        v-bind:headers="headers"
        v-bind:items="LibData"
        v-bind:pagination.sync="pagination"
        :total-items="totalItems"
        :loading="loading"
        class="elevation-1"
      >
        <template slot="items" slot-scope="props">
          <td  class="text-xs-right"  v-if="props.item.data.creators[0].creatorType!='author'" > <span v-for="(author, index) in props.item.data.creators" :key="index" >{{ author.firstName }} {{ author.lastName }} [ {{ author.creatorType }} ]/</span> </td>
          <td  class="text-xs-right" v-if="props.item.data.creators[0].creatorType=='author'" > <span>{{ props.item.data.creators[0].firstName }} {{ props.item.data.creators[0].lastName }} [ {{ props.item.data.creators[0].creatorType }} ]/</span> </td>
          <td>{{ props.item.data.title }}</td>
          <td  class="text-xs-right">{{ props.item.data.date }}</td>
          <td  class="text-xs-right"><v-btn dark class="accent" flat :to="{name: 'bibsingle', params: { zkey: props.item.key } }">Details</v-btn></td>
        </template>
      </v-data-table>
    </v-content>
  </v-container>
</template>

<script>
import HELPERS from '../helpers';
import ZOTERO from '../zotero';

export default {
  mixins: [HELPERS, ZOTERO],
  data: () => ({
    LibToFetch: '467361',
    loading: true,
    totalItems: 27,
    search: '',
    pagination: {
      rowsPerPage: 10,
    },
    selected: [],
    headers: [
      { text: 'Author', value: 'creator' },
      { text: 'Titel', align: 'left', value: 'title' },
      { text: 'Datum', value: 'date' },
      { text: 'Details', value: 'creator' },
    ],
  }),
  watch: {
    'pagination.page': 'fetchLib',
    'pagination.rowsPerPage': 'fetchLib',
    'pagination.sortBy': 'fetchLib',
    'pagination.descending': 'fetchLib',
  },
  created() {
    this.fetchLib();
  },
  methods: {
    fetchLib() {
      this.loading = true;
      this.getLibrary(this.LibToFetch,
        this.pagination.page,
        this.pagination.rowsPerPage,
        this.pagination.sortBy,
        !this.pagination.descending ? 'asc' : 'desc',
      ).then((res) => {
        this.LibData = res.data;
        this.loading = false;
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
