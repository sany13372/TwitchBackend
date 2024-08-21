'use strict';

/**
 * streamer controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::streamer.streamer');
