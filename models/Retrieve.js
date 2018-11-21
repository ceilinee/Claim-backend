var db=require('../dbconnection');


var Retrieve={
  getAllClaims: function(callback){
    return db.query("SELECT * FROM chatlog ORDER BY date DESC", callback);
  },
  getAllChat: function(callback){
    return db.query("SELECT * FROM chatlog", callback);
  },
  getImage: function(callback){
    return db.query("SELECT * FROM image", callback);
  },
};
module.exports = Retrieve;
