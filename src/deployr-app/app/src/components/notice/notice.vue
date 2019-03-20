<template>
  <transition name="fade" appear>
    <article v-show="isVisible" class="notice" :class="`is-${type}`">
      <button v-if="closable" class="delete" type="button" @click="close" />
      <div class="content">
        <div class="content-left">
        </div>
        <div class="content-right">
          <div class="title">{{ title }}</div>
          <div class="message" v-html="message"></div>
          <a class="close" @click="close">Dismiss</a>
        </div>
      </div>
    </article>
  </transition>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Notification extends Vue {
  // @Prop({ type: Boolean, default: true }) public visible!: boolean;
  @Prop({ type: String }) public title!: string | null;
  @Prop({ type: String }) public message!: string | null;
  @Prop({ type: String, default: 'primary' }) public type!: string | null;
  @Prop({ type: Boolean, default: true }) public closable!: boolean;
  @Prop({ type: Boolean, default: true }) public queue!: boolean;
  @Prop({ type: Number, default: 5000 }) public duration!: number | null;

  private isVisible: boolean = false;
  private container: HTMLDivElement | null = null;

  public get icon(): string | null {
    switch (this.type) {
      case 'info':
        return 'info-circle';
      case 'warning':
        return 'exclamation-triangle';
      case 'danger':
        return 'exclamation-triangle';
      case 'success':
        return 'thumbs-up';
      default:
        return null;
    }
  }
  public shouldQueue(): boolean {
    if (!this.queue) {
      return false;
    }

    return this.container!.childElementCount > 0;
  }
  public open(): void {
    if (this.shouldQueue()) {
      setTimeout(() => this.open(), 250);
      return;
    }

    this.container!.insertAdjacentElement('beforeend', this.$el);

    if (this.duration != null) {
      setTimeout(() => { this.close(); }, this.duration);
    }

    this.isVisible = true;
    this.$emit('open');
    this.$emit('visible', true);
  }
  public close(): void {
    this.isVisible = false;
    this.$emit('close');
    this.$emit('visible', false);

    setTimeout(() => {
        this.$destroy();

        if (typeof this.$el.remove !== undefined) {
            this.$el.remove();
        } else if (this.$el.parentNode != null) {
            this.$el.parentNode.removeChild(this.$el);
        }
    },         250);
  }
  public beforeMount(): void {
    this.setupContainer();
  }
  public mounted(): void {
    this.open();
  }
  private setupContainer(): void {
    const body = document.body;
    let container = document.querySelector<HTMLDivElement>('.notice-container');

    if (container != null) {
      this.container = container;
      return;
    }

    container = document.createElement('div');
    container.className = 'notice-container';

    body.appendChild(container!);

    this.container = container;
  }
}
</script>