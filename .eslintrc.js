module.exports = {
  root: true,
  // "plugins": ["@kalimahapps/eslint-plugin-tailwind"],
  // "rules": {
  //  "@kalimahapps/tailwind/sort": "warn",
  //  "@kalimahapps/tailwind/multiline": "warn"
  //  }
  "extends": ["next/babel", "next/core-web-vitals","plugin:tailwindcss/recommended"],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js'],
      parser: '@typescript-eslint/parser',
    },
  ],
  
    settings: {
      tailwindcss: {
        // These are the default values but feel free to customize
        callees: ["classnames", ,"classNames","clsx", "ctl"],
        // config: "tailwind.config.js", // returned from `loadConfig()` utility if not provided
        // cssFiles: [
        //   "**/*.css",
        //   "!**/node_modules",
        //   "!**/.*",
        //   "!**/dist",
        //   "!**/build",
        // ],
        // removeDuplicates: true,
        // skipClassAttribute: false,
        // whitelist: [],
        // tags: [],
        // classRegex: "^class(Name)?$", // can be modified to support custom attributes. E.g. "^tw$" for `twin.macro`
      },
    },
  
 }