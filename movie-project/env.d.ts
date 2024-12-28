/* src/env.d.ts or src/shims-vue.d.ts */
/// <reference types="vite/client" />

declare module '*.vue' {
    import { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
  }
  