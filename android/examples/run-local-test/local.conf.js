var browserstack = require('browserstack-local');




exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'browserstack_username',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'browserstack_key',

  updateJob: false,
  specs: [
    './examples/run-local-test/specs/local_test.js'
  ],
  exclude: [],

  capabilities: [{
    project: "First Webdriverio Android Project",
    build: 'Webdriverio Android Local',
    name: 'local_test',
    device: 'Google Pixel 3 ',
    os_version: "10.0",
    app: process.env.BROWSERSTACK_APP_ID || 'hashedapp_id',
    'browserstack.local': true,
    'browserstack.debug': true
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
  },

  // Code to start browserstack local before start of test
  onPrepare: (config, capabilities) => {
    console.log("Connecting local");
    return new Promise( (resolve, reject) => {
      exports.bs_local = new browserstack.Local();
      exports.bs_local.start({'key': exports.config.key }, (error) => {
        if (error) return reject(error);
        console.log('Connected. Now testing...');

        resolve();
      });
    });
  },

  // Code to stop browserstack local after end of test
  onComplete: (capabilties, specs) => {
    console.log("Closing local tunnel");
    return new Promise( (resolve, reject) => {
      exports.bs_local.stop( (error) => {
        if (error) return reject(error);
        console.log("Stopped BrowserStackLocal");

        resolve();
      });
    });
  }
};

/* // Set an environment variable - "BROWSERSTACK_ACCESS_KEY" and start Local instance with required arguments.
exports.bs_local.start({'key': exports.config.key }, (error) => {
  if (error) return reject(error);
  console.log('Connected. Now testing...');

// Stops the Local instance.
exports.bs_local.stop( (error) => {
  if (error) return reject(error);
  console.log("Stopped BrowserStackLocal")}
  )
});  */
