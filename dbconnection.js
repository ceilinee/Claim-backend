var mysql=require('mysql');
//Identifies SQL connection 
var connection=mysql.createPool({

   host:'us-cdbr-iron-east-01.cleardb.net',
   user:'bd71cd7985d2bb',
   password:'7b5df939',
   database:'heroku_25d482c5d0cd1de',
   port:'3306',

});

module.exports=connection;
