import {Configuration} from 'tsunamy/core';

export let CONFIGURATION: Configuration = {
  hostname : '127.0.0.1',
  http: true,
  httpPort: 8080,
  https: true,
  httpsPort: 8443,
  pathAPI: 'api',
  projectDirectory: __dirname + '/..'
};
