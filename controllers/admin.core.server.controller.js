"user strict";

// Module public methods.
module.exports = {
  renderAdminPage : renderAdminPage
};

/**
* @name renderAdminPage
* @description
* Render homepage.
*
* @param  {object} req HTTP request
* @param  {object} res HTTP response
*/
function renderHomePage(req, res) {
  res.render('admin', {
    content : 'This is Adminpage content'
  });
}
