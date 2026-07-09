import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      "react/no-unescaped-entities": ["error", {
        "forbid": [
          { "char": ">", "alternatives": ["&gt;"] },
          { "char": "}", "alternatives": ["&#125;"] }
        ]
      }],
    }
  },
  {
    files: ["app.js"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
  {
    files: ["src/components/elements/BeforeAfterSlider.tsx"],
    rules: {
      "@next/next/no-img-element": "off",
    },
  },
]);

export default eslintConfig;