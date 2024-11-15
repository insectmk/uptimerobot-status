import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vite.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {// scss处理器
        api: 'modern-compiler'
      }
    }
  },
  plugins: [
    vue(),
    vueDevTools(),
    AutoImport({// ElementPlus自动导入
      resolvers: [ElementPlusResolver()],
    }),
    Components({// ElementPlus自动导入
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
