import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      // We write prose with natural apostrophes/quotes throughout the copy.
      "react/no-unescaped-entities": "off",
      // Static export ships plain <img>; next/image optimization needs a server.
      "@next/next/no-img-element": "off",
    },
  },
]);

export default eslintConfig;
