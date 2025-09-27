import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { registerSW, initPWAPrompt } from "./pwa";

// Register PWA Service Worker
registerSW();
initPWAPrompt();

createRoot(document.getElementById("root")!).render(<App />);
