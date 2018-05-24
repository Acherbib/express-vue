# TODO

- [x] Rename frontend main.js file to index.js - have it export `app` instead of `main`. Rename `app` component to `layout`.
- [x] Get tests running for frontend
- [x] Create dummy API endpoint
- [ ] Convert backend code to use import/export. This is stuck due to Jest not fully support Node's `.mjs` file extension: https://github.com/facebook/jest/issues/4842
- [ ] Get tests running/written for all of backend
- [ ] Try using vue cli serve command for local dev
- [ ] Cleanup dist folder after every build
- [ ] Sort out all package.json scripts / commands for starting / building
- [ ] Fix modal event.$on() bug still firing for previously destroyed modals
- [ ] Check in on need of "retainLines": true in `.babelrc`: https://github.com/facebook/jest/issues/6108
- [ ] Remove nib? Autoprefixer seems to already be taking care of the heavy lifting.
- [ ] Stylus doesn't log any errors on compilation (unkown variable, bad syntax)
