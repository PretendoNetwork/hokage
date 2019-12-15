const express = require('express');
const subdomain = require('express-subdomain');
const logger = require('../logger');
const routes = require('./routes');

// Main router for Samurai endpoints
const samuraiRouter = express.Router();

// Router to handle the subdomain restriction
const samuraiCDNRouter = express.Router();

// Create subdomains
logger.info('[SAMURAI] Creating \'samurai-ctr.cdn\' subdomain');
samuraiRouter.use(subdomain('samurai-ctr.cdn', samuraiCDNRouter));

// Setup routes
logger.info('[SAMURAI] Applying imported routes');
samuraiCDNRouter.use('/samurai', routes.TITLE);
samuraiCDNRouter.use('/samurai', routes.DIRECTORY);
samuraiCDNRouter.use('/samurai', routes.NEWS);
samuraiCDNRouter.use('/samurai', routes.TELOPS);
samuraiCDNRouter.use('/samurai', routes.LANGUAGES);

module.exports = samuraiRouter;