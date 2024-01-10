const userModel = require('../models/User');

class UserController {
  static async getalluser(req, res) {
    var results = await userModel.getusers();

    if (results) res.send(results);
  }

  static async addnewuser(req, res) {
    var title = req.body.title;
    var content = req.body.content;
    var x = await userModel.adduser(title, content);
    if (x == true) res.send('add successfull');
    else res.send('add failed');
  }

  static async deleteuser(req, res) {
    const id = req.body.id;
    if (id) {
      var result = await userModel.deleteuser(id);
      if (result) res.send('delete done');
      else res.send('failed to delete user');
    }
  }
}

module.exports = UserController;
