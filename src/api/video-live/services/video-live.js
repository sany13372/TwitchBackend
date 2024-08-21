'use strict';

/**
 * video-live service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::video-live.video-live');
