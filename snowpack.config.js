module.exports = {
  mount: {
    "apps/site/src": '/',
    "libs/mylib/src": '/mylib',
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-babel',
  ],
  install: [
    /* ... */
  ],
  installOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  proxy: {
    /* ... */
  },
  alias: {
    "@nx-snowpack/mylib": "./libs/mylib/src/index.ts"
  },
};
