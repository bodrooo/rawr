import { defineConfig } from "vite";
import * as sass from "sass";

export default defineConfig({
  css: {
    preprocessorOptions: {
      sass: sass
    },
  },
  server: {
    host: "0.0.0.0"
  }
});
