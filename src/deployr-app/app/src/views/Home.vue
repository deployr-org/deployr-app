<template>
  <div class="home">
    <navbar />
    <section class="section">
      <div class="container is-fullwidth">
        <breadcrumb />
        <router-view />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navbar from '@/components/navbar/navbar.vue'; // @ is an alias to /src
import Projects from '@/features/projects/projects.vue';
import Breadcrumb from '@/components/breadcrumb/breadcrumb.vue';

@Component({
  components: {
    Navbar,
    Projects,
    Breadcrumb,
  },
})
export default class Home extends Vue {}
</script>
