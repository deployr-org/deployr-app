<template>
  <nav class="navbar" role="navigation">
    <!-- <div class="navbar-brand has-padding-left-3">
      <a class="navbar-item has-text-centered" href="/" rel="noopener noreferrer">
        <h1 class="title is-5 has-text-weight-bold has-padding-left-1">DEPLOYR</h1>
      </a>

      <div class="navbar-burger burger" data-target="main-menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div> -->

    <div class="navbar-menu">
      <div class="navbar-end">
        <a class="navbar-item" >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
        </a>
        <div class="navbar-item has-dropdown is-hoverable">
          <a href="#" class="navbar-link" data-tooltip="Account settings">
            <article class="media">
              <figure class="media-left">
                <div class="avatar avatar-letter avatar-letter-d"></div>
              </figure>
              <div class="media-content">
                <span class="username">Daniel Cirket</span>
              </div>
            </article>
          </a>
          <div class="navbar-dropdown ">
            <a class="navbar-item is-size-7">
              daniel.cirket@gmail.com
            </a>
            <a class="navbar-item" href="#">
              My profile
            </a>
            <a class="navbar-item" href="#">
              Billing
            </a>
            <a class="navbar-item" href="#">
              Support
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item" href="#">
              Sign out
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Navbar extends Vue {
}
</script>
