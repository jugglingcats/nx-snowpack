# Using Snowpack with NRWL NX

Run `npm install` and `snowpack dev` to start the app.

To add a new lib project, create in the normal way using NX, and then modify `snowpack.config.js` aliases.

To perform a production build, run `snowpack build`. You might need to use `--polyfill-node` if you have shared libs between front and backend.

