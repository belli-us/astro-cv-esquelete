import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import icon from "astro-icon";
import { defineConfig } from 'astro/config';
import astroAws from "@astro-aws/adapter";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: astroAws({ mode: "ssr" }),
});