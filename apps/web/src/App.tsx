import { RouterProvider } from "react-router-dom";
import { router } from "./router";

function App() {
  // TODO: ErrorBoundary 테스트 후 제거
  if (import.meta.env.DEV && window.location.search.includes("?error=1")) {
    throw new Error("ErrorBoundary 테스트용 에러");
  }
  return <RouterProvider router={router} />;
}

export default App;
