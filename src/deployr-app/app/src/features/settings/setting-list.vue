<template>
 
    

    <!-- <div class="row"> -->
      <div class="columns is-fullheight is-gapless">
        <settings-sidebar class="sub-menu" />

        <div class="column">
          <div class="columns">
            <div class="column has-padding-6">
              <h1 class="title">Settings</h1>
              <div class="box is-radiusless">
                <p>Settings stuff</p>
                <button @click="click">Add notice</button>
              </div>          
            </div>
          </div>
        </div>
      </div>
    <!-- </div> -->
 
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import SettingsSidebar from './settings-sidebar.vue';

let count: number = 1;

@Component({
  components: {
    SettingsSidebar,
  },
})
export default class SettingList extends Vue {

  public click(): void {
    this.$notice.normal({ title: `Title test #${count}`,
      message: 'Porta nibh venenatis cras sed felis eget velit aliquet '
      + 'sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque', duration: 5000 });
    count += 1;
  }
}
</script>
