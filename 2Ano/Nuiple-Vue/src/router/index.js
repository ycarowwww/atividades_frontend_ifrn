import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ContactView from '@/views/ContactView.vue';
import QueueView from '@/views/QueueView.vue';
import MusicView from '@/views/MusicView.vue';
import SongView from '@/views/SongView.vue';
import ArtistView from '@/views/ArtistView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/contact', name: 'contact', component: ContactView },
    { path: '/queue', name: 'queue', component: QueueView },
    { path: '/music', name: 'music', component: MusicView },
    { path: '/song/:type/:id', name: 'song', component: SongView, props: true },
    { path: '/artist/:id', name: 'artist', component: ArtistView, props: true }
  ]
});

export default router;
