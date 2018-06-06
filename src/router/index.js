import Vue from 'vue';
import Router from 'vue-router';
import app from '@/components/app';
import start from '@/components/start';
import about from '@/components/about';
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
            Content: HelloWorld,
          },
        },
        {
          path: 'projects',
          name: 'projects',
          components: {
            Content: HelloWorld,
          },
        },
        {
          path: 'partners',
          name: 'partners',
          components: {
            Content: HelloWorld,
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
