const mysql = require('mysql');
//Да, я понимаю, что вы можете подсмотреть данные по входу.
const db = mysql.createPool({
  host: 'tfdf63.beget.tech',
  user: 'tfdf63_tfdf',
  password: '5yy3snla19vaA.',
  database: 'tfdf63_tfdf',
});

//Выводим сообщение о подключении в консоль
+db.getConnection(() => {
  console.log('Connect to db1212');
});

module.exports = db;
