/**
* @module routes
* @description
* Define all core routes of applications
*/
"user strict";

const coreCtrl = require('../controllers').Core;

module.exports = function(app) {
  app.route('/admin').get(coreCtrl.renderAdminPage);
};
