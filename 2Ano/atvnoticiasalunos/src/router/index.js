import { createWebHistory, createRouter } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import CreateView from "@/views/CreateView.vue";
import UpdateView from "@/views/UpdateView.vue";
import DeleteView from "@/views/DeleteView.vue";

const routes = [
    { path: "/", component: HomeView },
    { path: "/create", component: CreateView },
    { path: "/update", component: UpdateView },
    { path: "/delete", component: DeleteView }
];

export const router = createRouter({
    history: createWebHistory(),
    routes
});
