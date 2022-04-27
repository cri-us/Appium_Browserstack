exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'aliunsalalbaz_nqPaB3',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'hMYgKpLiwyjdGneP23wy',

  updateJob: false,
  specs: [
    './examples/run-first-test/specs/first_test.js'
  ],
  exclude: [],

  capabilities: [{
    project: "First Webdriverio Android Project",
    build: 'Webdriverio Android',
    name: 'local_test',
    device: 'Google Pixel 2',
    os_version: "9.0",
    app: process.env.BROWSERSTACK_APP_ID || 'bs://33fe9a33972d598dfd7f984d7dd27f7bb52bdc99',
    'browserstack.local': true
  }],

  logLevel: 'info',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,

  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 20000
  }
};
