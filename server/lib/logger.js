const bunyan = require('bunyan');

module.exports = options => {
  const logger = bunyan.createLogger(options);

  return {
    info: (...args) => {
      logger.info(...args);
    },
    warn: (...args) => {
      logger.warn(...args);
    },
    error: (...args) => {
      logger.error(...args);
    },
    debug: (...args) => {
      logger.debug(...args);
    }
  };
};
