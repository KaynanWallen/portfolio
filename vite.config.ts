import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import { flatRoutes } from "remix-flat-routes";
import tsconfigPaths from "vite-tsconfig-paths";

installGlobals({ nativeFetch: true });

var plugins = [
  remix({
    ignoredRouteFiles: ["**/.*", "**/*.test.{ts,tsx}"],
    // routes: async (defineRoutes) => {
    //   return flatRoutes("routes", defineRoutes);
    // },
    future: {
      v3_fetcherPersist: true,
      v3_relativeSplatPath: true,
      v3_throwAbortReason: true,
      v3_singleFetch: true,
      v3_lazyRouteDiscovery: true,
    },
  }),
  tsconfigPaths(),
];

export default defineConfig({
  server: {
    host: "127.0.0.1",
    cors: false,
    hmr: {
      host: "127.0.0.1",
    },
  },
  plugins: plugins,
});