<template>
 <div class="column is-narrow">   
    <div class="menu">
      <ul class="menu-list">
        <li class="menu-item"><a class="is-radiusless" href="#"><span class="title">Users</span></a></li>
        <li class="menu-item"><a href="#"><span class="title">Notifications</span></a></li>
        <li class="menu-item"><a href="#"><span class="title">Integrations</span></a></li>
        <li class="menu-item"><a href="#"><span class="title">Security</span></a></li>
        <li class="menu-item"><a href="#"><span class="title">Billing</span></a></li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Settings extends Vue {}
</script>
