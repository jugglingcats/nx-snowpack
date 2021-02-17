# Using Snowpack with NRWL NX

Run `npm install` 

Run `nx serve site` to run the `site` app using snowpack dev.

If you create a new app and want that to be run via snow pack you will need to tweak the workspace.json file and modify the executor for your app as follows:

```
"serve": {
          "builder": "@nrwl/workspace:run-commands",
          "options": {
            "command": "snowpack dev"
          },
```


To add a new lib project, create in the normal way using NX, and then modify `snowpack.config.js` aliases.

To perform a production build, run `snowpack build`. You might need to use `--polyfill-node` if you have shared libs between front and backend.

