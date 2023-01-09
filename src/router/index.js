import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/Login',
            component: () => import('@/components/Login_2.vue'),
        },
        {
            path: '/Login',
            component: () => import('@/components/Login_2.vue'),
        },
        {
            path: '/home',
            component: () => import('@/components/HelloWorld.vue'),
        },
    ],
    mode: 'history',
});
