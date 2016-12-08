/**
 * @fileOverview The Home controller.
 */

var homeController = module.exports = {};

/**
 * GET /
 * Handle index rendering.
 *
 * @param {Object} req The express req object.
 * @param {Object} res The express res object.
 */
homeController.index = function(req, res) {
  res.sendFile(req.app.get('viewsPath') + '/index.html');
};
