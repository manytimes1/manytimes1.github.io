import VueRouter from 'vue-router'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: () => import('./layouts/default-page' /* webpackChunkName: "js/default-page" */)
        }
    ]
});

export default router;
