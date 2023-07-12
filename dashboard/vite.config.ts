import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "dashboard",
      remotes: {
        loginApp: "http://localhost:3001/assets/remoteEntry.js",
        overviewApp: "http://localhost:3002/assets/remoteEntry.js",
        transactionApp: "http://localhost:3003/assets/remoteEntry.js",
        sendMoneyApp: "http://localhost:3004/assets/remoteEntry.js",
        paymentsApp: "http://localhost:3005/assets/remoteEntry.js",
        cardsApp: "http://localhost:3006/assets/remoteEntry.js",
        settingsApp: "http://localhost:3007/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
      exposes: {},
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
