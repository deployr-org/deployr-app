<template>
  <nav class="navbar is-fixed-top has-shadow is-primary is-active" role="navigation">
    <div class="navbar-brand">
      <a class="navbar-item has-text-centered" href="/" rel="noopener noreferrer">
        <h1 class="title is-5 has-text-white has-text-weight-bold">deployr</h1>
      </a>

      <div class="navbar-burger burger" data-target="main-menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div class="navbar-menu">

      <div class="navbar-start">
        <router-link class="navbar-item" :to="{ name: 'project-list' }">Projects</router-link>
        <router-link class="navbar-item" :to="{ name: 'team-list' }">Teams</router-link>
        <router-link class="navbar-item" :to="{ name: 'setting-list' }">Settings</router-link>
      </div>

      <div class="navbar-end">

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
