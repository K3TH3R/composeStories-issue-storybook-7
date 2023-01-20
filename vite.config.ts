import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "url";
import { defineConfig } from "vitest/config";

export default defineConfig(() => {
  return {
    plugins: [vue()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    test: {
      globals: true,
      environment: "happy-dom",
      setupFiles: ["vitest.setup.ts"],
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/styles/boot.scss" as *;`,
        },
      },
    },
    server: { port: 8080 },
  };
});
