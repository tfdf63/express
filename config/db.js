const mysql = require('mysql');

const db = mysql.createPool({
  host: 'tfdf63.beget.tech',
  user: 'tfdf63_tfdf',
  password: '5yy3snla19vaA.',
  database: 'tfdf63_tfdf',
});

//Выводим сообщение о подключении в консоль
+db.getConnection(() => {
  console.log('Connect to db12');
});

module.exports = db;
