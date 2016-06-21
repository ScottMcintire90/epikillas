import Ember from 'ember';

export function listPrint(params/*, hash*/) {
  var game = params[0];
  var userList = game.get('user');
  var splitUsers = userList.split(",");
  var htmlToReturn = "";
  splitUsers.forEach(function(user) {
    htmlToReturn += "<li><button class='btn userName' id='"  + user + "'>" + user + "</button></li><br>";
  });
  return Ember.String.htmlSafe(htmlToReturn);
}

export default Ember.Helper.helper(listPrint);
