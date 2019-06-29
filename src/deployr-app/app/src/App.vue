<template>
  <div id="app">
    <div class="columns is-mobile is-gapless has-margin-bottom-0">
      <aside class="column is-narrow is-narrow-tablet aside is-fullheight">
        <sidebar />
      </aside>
      <div class="column is-fullheight">
        <!-- <navbar /> -->
        <!-- <breadcrumb /> -->
        <router-view />
      </div>
    </div>

    <!-- <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            <strong>Deployr</strong> by <a href="https://github.com/dansup">Daniel Cirket</a>.
          </p>
        </div>
      </div>
    </footer> -->
    
   
  </div> 
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navbar from '@/components/navbar/navbar.vue';
import Sidebar from '@/components/sidebar/sidebar.vue';
import Breadcrumb from '@/components/breadcrumb/breadcrumb.vue';

@Component({
  components: {
    Navbar,
    Sidebar,
    Breadcrumb,
  },
})
export default class App extends Vue {}
</script>
