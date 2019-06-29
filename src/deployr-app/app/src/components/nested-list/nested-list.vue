<template>
  <ul class="nested-list" :class="css">
    <li :class="['list-item', `has-depth-${depth}`]"><slot :item="item" :onToggle="onToggle"/></li>
    <template v-if="showChildren">
      <tree-list v-for="node in nodes" :item="node" :key="node[keyProp]" :nodes="node[childProp]" :child-prop="childProp" :keyProp="keyProp" :depth="depth + 1">
        <template v-for="(_, slot) of $scopedSlots" v-slot:[slot]="scope"><slot :name="slot" v-bind="scope" /></template>
      </tree-list>
    </template>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { Route, RouteConfig } from 'vue-router';

@Component({
  name: 'tree-list',
})
export default class TreeList extends Vue {
  @Prop({ required: true }) public item!: {};
  @Prop({ required: true }) public nodes!: Array<{}>;
  @Prop({ required: true, type: String }) public keyProp!: string;
  @Prop({ required: true, type: String }) public childProp!: string;
  @Prop({ required: true, type: Number }) public depth!: number;

  private showChildren: boolean = false;

  public get css() {
    return [
      `has-depth-${this.depth}`,
      this.nodes.length > 0 ? 'has-children' : null,
      this.depth === 0 ? 'is-root' : null,
      this.showChildren ? 'is-open' : null,
    ];
  }

  public onToggle(): void {
    this.showChildren = !this.showChildren;
  }
}
</script>