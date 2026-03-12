import { Global, css } from "@emotion/react";
import { fontFamily, fontSize, fontWeight, lineHeight } from "./tokens";

const globalStyles = css`
  :root {
    font-family: ${fontFamily.sans};
    font-size: ${fontSize.base};
    font-weight: ${fontWeight.normal};
    line-height: ${lineHeight.normal};
    color: black;
    background-color: white;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  html {
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
    width: 100%;
    min-width: 320px;
    min-height: 100vh;
  }
`;

export function GlobalStyles() {
  return <Global styles={globalStyles} />;
}
