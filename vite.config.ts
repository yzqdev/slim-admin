import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import UnoCSS from "unocss/vite";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import VueDevTools from "vite-plugin-vue-devtools";
import TurboConsole from "unplugin-turbo-console/vite";
import { fileURLToPath } from "node:url";

export default defineConfig({
  plugins: [
    VueDevTools(),
    TurboConsole(),
    UnoCSS(),
    vue({
      script: {
        defineModel: true,
        propsDestructure: true,
      },
    }),
    vueJsx(),

    AutoImport({
      imports: ["vue", "vue-router", "pinia", "@vueuse/core"],
      resolvers: [ElementPlusResolver()],
      dts: fileURLToPath(
        new URL("./src/types/auto-imports.d.ts", import.meta.url),
      ),
    }),
    Components({
      extensions: ["tsx", "vue"],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/, /\.tsx$/, /\.jsx$/],
      resolvers: [
        ElementPlusResolver(), // 自动注册图标组件
      ],
      dts: fileURLToPath(
        new URL("./src/types/components.d.ts", import.meta.url),
      ),
    }),
  ],

  resolve: {
    //导入时想要省略的扩展名列表。注意，不 建议忽略自定义导入类型的扩展名（例如：.vue），因为它会干扰 IDE 和类型支持。
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
    ],
  },
  build: {
    target: "esnext",
    rollupOptions: {
      output: {
        chunkFileNames: "js/[name].js", // 引入文件名的名称
        entryFileNames: "js/[name].js", // 包的入口文件名称
        assetFileNames: "[ext]/[name].[ext]", // 资源文件像 字体，图片等
        // manualChunks(id) {

        //   if (id.includes("node_modules")) {
        //     return "vendor";
        //   }
        // },
      },
    },
  },
  server: {
    port: 8030,
    host: "0.0.0.0",
  },
  base: "/slim-admin",
});
