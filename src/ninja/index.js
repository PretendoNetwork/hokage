const express = require('express');
const subdomain = require('express-subdomain');
const logger = require('../logger');
const routes = require('./routes');

// Main router for Ninja endpoints
const ninjaRouter = express.Router();

// Router to handle the subdomain restriction
const ninjaCTRRouter = express.Router();

// Create subdomains
logger.info('[NINJA] Creating \'ninja.ctr.shop\' subdomain');
ninjaRouter.use(subdomain('ninja.ctr.shop', ninjaCTRRouter));

// Setup routes
logger.info('[NINJA] Applying imported routes');
ninjaCTRRouter.use('/ninja', routes.COUNTRY);
ninjaCTRRouter.use('/ninja', routes.SERVICE_HOSTS);
ninjaCTRRouter.use('/ninja', routes.SESSION);
ninjaCTRRouter.use('/ninja', routes.ONLINE_PRICES);
ninjaCTRRouter.use('/ninja', routes.EC_INFO);

module.exports = ninjaRouter;