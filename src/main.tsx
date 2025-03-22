import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.css";

console.log("[MAIN] Checking Service Worker Support...");

if ("serviceWorker" in navigator) {
  console.log("[MAIN] Service Worker Supported! Adding Event Listener...");

  window.addEventListener("load", async () => {
    console.log("[MAIN] Attempting to Register Service Worker...");

    try {
      const registration = await navigator.serviceWorker.register("/sw.js", {
        scope: "/",
      });
      console.log(
        "[MAIN] Service Worker Registered Successfully:",
        registration
      );
    } catch (error) {
      console.error("[MAIN] Service Worker Registration Failed:", error);
    }
  });
} else {
  console.warn("[MAIN] Service Workers NOT supported in this browser.");
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
