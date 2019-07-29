"user strict";

// Module public methods.
module.exports = {
  renderHomePage : renderHomePage,
  renderContactPage  : renderContact,
  renderAdminPage : renderAdmin
};

/**
* @name renderHomePage
* @description
* Render homepage.
*
* @param  {object} req HTTP request
* @param  {object} res HTTP response
*/
function renderHomePage(req, res) {
  res.render('homepage', {
    content : 'This is homepage content'
  });
}

/**
* @name renderContact
* @description
* Render contact page.
*
* @param  {object} req HTTP request
* @param  {object} res HTTP response
*/
function renderContact(req, res) {
  res.render('contact', {
    content : 'This is contact page content'
  });
}

/**
* @name renderAdmin
* @description
* Render Adminpage.
*
* @param  {object} req HTTP request
* @param  {object} res HTTP response
*/
function renderAdmin(req, res) {
  res.render('admin', {
    content : 'This is Adminpage content'
  });
}
