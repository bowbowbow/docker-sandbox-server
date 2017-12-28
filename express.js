// Common Modules...
const BodyParser = require('body-parser');
const CookieParser = require('cookie-parser');
const Cors = require('cors');
const MethodOverride = require('method-override');

module.exports = (app) => {
  // Express.js 3rd-Party Middleware
  app.use(BodyParser.json({
    limit: '20mb',
  }));
  app.use(BodyParser.urlencoded({
    limit: '20mb',
    extended: true,
  }));

  app.use(MethodOverride());
  app.use(CookieParser());

  app.use(Cors({
    origin: '*',
    credentials: false,
  }));
};
