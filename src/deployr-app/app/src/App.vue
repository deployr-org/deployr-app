<template>
  <div id="app">
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
import Breadcrumb from '@/components/breadcrumb/breadcrumb.vue';

@Component({
  components: {
    Navbar,
    Breadcrumb,
  },
})
export default class App extends Vue {}
</script>
