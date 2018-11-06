var db=require('../dbconnection');


var Send={
  addClaim:function(body, callback){
    return db.query("INSERT INTO Claims (name, email, cause, otherParty, description, street, city, imgTrait, link, chatTrait) VALUES (\'" + body.name + "\', \'" + body.email + "\', \'" + body.cause + "\', \'" + body.otherParty + "\', \'" + body.accident + "\', \'" + body.street + "\', \'" + body.city + "\', \'" + body.imgTrait + "\', \'" + body.link + "\', \'" + body.chatTrait + "\')", callback);
  },
  addChat:function(body, callback){
    return db.query("INSERT INTO Chat (user, context, translation) VALUES (\'" + body.user + "\', \'" + body.context + "\', \'" + body.translation + "\')", callback);
  },
  deleteClaim:function(query, callback){
    return db.query("DELETE FROM Claims WHERE (idClaims = \'"+query.idClaims+"\')", callback);
  },
};
module.exports = Send;
