'use strict';

/**
 * followers-streamer service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::followers-streamer.followers-streamer');
