import Vue from 'vue';
import Router from 'vue-router';
import app from '@/components/app';
import start from '@/components/start';
import about from '@/components/about';
import projects from '@/components/projects';
import psingle from '@/components/projectssingle';
import partners from '@/components/partners';
import bibliography from '@/components/bibliography';
import bibsingle from '@/components/bibliographysingle';
import HelloWorld from '@/components/HelloWorld';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: (to) => {
        if (to.params.lang !== '') {
          // default language german req by client, regardless of userLanguage
          // const language = window.navigator.userLanguage || window.navigator.language;
          return '/de/start';
          // return `/${language.split('-')[0]}`;
        }
        return to.fullPath;
      },
    },
    {
      path: '/:lang',
      components: {
        default: app,
      },
      // Children to the root path '/'
      children: [
        {
          path: 'start',
          name: 'start',
          components: {
            Content: start,
          },
        },
        {
          path: 'bibliography',
          name: 'bibliography',
          components: {
            Content: bibliography,
          },
        },
        {
          path: 'bibsingle/:zkey',
          name: 'bibsingle',
          components: {
            Content: bibsingle,
          },
          props: { Content: true },
        },
        {
          path: 'projects',
          name: 'projects',
          components: {
            Content: projects,
          },
        },
        {
          path: 'psingle/:nid',
          name: 'psingle',
          components: {
            Content: psingle,
          },
          props: { Content: true },
        },
        {
          path: 'partners',
          name: 'partners',
          components: {
            Content: partners,
          },
        },
        {
          path: 'about',
          name: 'about',
          components: {
            Content: about,
          },
        },
        {
          path: '',
          redirect: '/en/start',
        },
        {
          path: '*',
          redirect: 'start',
        },
      ],
    },
  ],
});
