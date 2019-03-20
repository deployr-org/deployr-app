import Notice from './notice.vue';

const body = document.querySelector<HTMLDivElement>('body');

const createNode = (): HTMLDivElement => {
  const node = document.createElement('div');
  body!.appendChild(node);
  return node;
};

export interface NoticeOptions {
  title: string | null;
  message: string | null;
  indefinite?: boolean;
  duration?: number | null;
}

const open = (options: NoticeOptions, type: string | null = null): Notice => {
  const opts = { ...options, type };

  const vm = new Notice({
    el: createNode(),
    propsData: {
      ...opts,
    },
  });

  return vm;
};
const normal = (options: NoticeOptions) => { open(options, 'primary'); };
const info = (options: NoticeOptions) => { open(options, 'info'); };
const success = (options: NoticeOptions) => { open(options, 'success'); };
const warning = (options: NoticeOptions) => { open(options, 'warning'); };
const danger = (options: NoticeOptions) => { open(options, 'danger'); };

export default {
  info,
  success,
  warning,
  danger,
  normal,
};
