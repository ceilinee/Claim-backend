var db=require('../dbconnection');


var Retrieve={
  getLogin:function(email, password, callback){
    return db.query("SELECT idUsers FROM Users WHERE email=\'"+email+"\' AND password=\'"+password+"\'", callback);
  },
  getProjects: function(id, callback){
    return db.query("SELECT * FROM Project WHERE idUsers = \'"+id+"\' ORDER BY dateDue ASC", callback);
  },
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
