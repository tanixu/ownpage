/**
 * dao/userDao.js
 * 用户
 */
var sql = {
	queryById : "select * from article"
}
var mysql = require("mysql");
var $conf = require("../conf/db");
var conn = mysql.createConnection($conf.mysql);

module.exports = {
	query : function(req, res, next){
		var param = req.query || req.params;
		conn.connect();
		conn.query(sql.queryById,[],function(error,result){
			console.log(error);
			if(result){
				console.log(result);
				res.json(result);
			}
		});
		conn.end();
	}
}