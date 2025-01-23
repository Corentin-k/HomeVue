declare module '*.vue' {
    import { DefineComponent } from 'vue';
    const component: DefineComponent<{}, {}, any>;
    export default component;
  }
declare module '@/store/userStore' {
    import { StoreDefinition } from 'pinia';

    export const useUserStore: StoreDefinition;
}
