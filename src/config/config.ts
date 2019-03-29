import {Configuration} from 'tsunamy/core';

export let CONFIGURATION: Configuration = {
  hostname : '127.0.0.1',
  port: 3000,
  https: false,
  pathAPI: 'api',
  projectDirectory: __dirname + '/..'
};
