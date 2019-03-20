<template>
  <div>
    <div class="row has-margin-bottom-4">
      <div class="columns">
        <div class="column">
          <h1 class="title">Settings</h1>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="columns">
        <div class="column is-narrow is-one-fifth">      
          <div class="menu">
            <!-- Start Menu -->
            <ul class="menu-list">
              <li><a class="menu-item is-active is-radiusless" href="#">Users</a></li>
              <li><a class="menu-item" href="#">Notifications</a></li>
              <li><a class="menu-item" href="#">Integrations</a></li>
              <li><a class="menu-item" href="#">Security</a></li>
              <li><a class="menu-item" href="#">Billing</a></li>
            </ul>

            <!-- <p class="menu-label">Framework</p> -->
            
            <!-- End Menu -->

          </div>

        </div>
        <div class="column">
          <div class="box is-radiusless">
            <p>Settings stuff</p>
            <button @click="click">Add notice</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

let count: number = 1;

@Component
export default class SettingList extends Vue {

  public click(): void {
    this.$notice.normal({ title: `Title test #${count}`,
      message: 'Porta nibh venenatis cras sed felis eget velit aliquet '
      + 'sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque', duration: 5000 });
    count += 1;
  }
}
</script>
