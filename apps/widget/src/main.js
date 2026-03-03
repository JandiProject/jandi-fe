"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var client_1 = require("react-dom/client");
function WidgetApp() {
    return <div>Widget placeholder</div>;
}
(0, client_1.createRoot)(document.getElementById("root")).render(<react_1.StrictMode>
    <WidgetApp />
  </react_1.StrictMode>);
