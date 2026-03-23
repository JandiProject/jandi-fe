import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@emotion/react";
import { GlobalStyles, theme } from "@jandi-fe/ui";
import { ErrorBoundary } from "./components/common/ErrorBoundary/ErrorBoundary";
import { queryClient } from "./lib/queryClient";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <QueryClientProvider client={queryClient}>
          <GlobalStyles />
          <App />
        </QueryClientProvider>
      </ErrorBoundary>
    </ThemeProvider>
  </StrictMode>
);
