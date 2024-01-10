const db = require('../config/db');

class UserModel {
  // static async getusers() {
  //   return new Promise((resolve) => {
  //     db.query(
  //       'SELECT * FROM tfdf63_tfdf.posts ORDER BY id DESC',
  //       [],
  //       (error, result) => {
  //         if (!error) resolve(result);
  //       }
  //     );
  //   });
  // }

  //Турнирная таблица
  static async getusers() {
    return new Promise((resolve) => {
      db.query('SELECT * FROM tfdf63_tfdf.pts', [], (error, result) => {
        if (!error) resolve(result);
      });
    });
  }

  static async adduser(title, content) {
    return new Promise((resolve) => {
      db.query(
        'INSERT INTO tfdf63_tfdf.posts (title, content) VALUES(?,?)',
        [title, content],
        (e, r) => {
          if (!e) resolve(true);
          else resolve(false);
        }
      );
    });
  }

  static async deleteuser(id) {
    return new Promise((resolve) => {
      db.query(
        'DELETE FROM tfdf63_tfdf.posts WHERE id=?',
        [id],
        (error, result) => {
          if (error) resolve(false);
          else resolve(true);
        }
      );
    });
  }
}

module.exports = UserModel;
