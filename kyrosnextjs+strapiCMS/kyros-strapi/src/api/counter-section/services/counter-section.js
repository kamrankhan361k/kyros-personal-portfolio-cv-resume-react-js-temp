'use strict';

/**
 * counter-section service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::counter-section.counter-section');
