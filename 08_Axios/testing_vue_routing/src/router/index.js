import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NotFoundComponent from "../components/NotFoundComponent";

//Profile - con lazy loading
const RootProfile = () => import(/*webpackChunkName: "group-foo"*/"../components/profile/RootProfile.vue");
const NewProfile = () => import(/*webpackChunkName: "group-foo"*/"../components/profile/NewProfile.vue");
const ListProfile = () => import(/*webpackChunkName: "group-foo"*/"../components/profile/ListProfile.vue");
const DetailProfile = () => import(/*webpackChunkName: "group-foo"*/"../components/profile/DetailProfile.vue");

Vue.use(VueRouter);

const protect = (to, from, next) => {
  // ad esempio 'isauthenticated'
  next();
};

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/404',
        name: 'notFound',
        component: NotFoundComponent
    },
    {
        path: '/profile',
        name: 'profile',
        component: RootProfile,
        beforeEnter: protect,
        children: [
            {path: '', name: 'listProfile', component: ListProfile},
            {path: '/new', name: 'newProfile', component: NewProfile},
            {path: ':id', name: 'detailProfile', component: DetailProfile}
        ]
    },
    {
        path: '/profile-new',
        name: 'profile-new',
        component: NewProfile
    },
    {path: '/redirect-new', redirect: {name: 'newProfile'}},
    {path: '*', redirect: {name: 'notFound'}}
];

const router = new VueRouter({
    routes
});

export default router
