import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

function WidgetApp() {
  return <div>Widget placeholder</div>;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <WidgetApp />
  </StrictMode>
);
