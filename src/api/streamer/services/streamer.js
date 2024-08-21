'use strict';

/**
 * streamer service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::streamer.streamer');
