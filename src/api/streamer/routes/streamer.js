'use strict';

/**
 * streamer router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::streamer.streamer');
