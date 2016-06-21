import Ember from 'ember';

export function listPrint(params/*, hash*/) {
  var game = params[0];

  var usersArray = [];
  var userList = game.get('user');
  var splitUsers = userList.split(",");
  var htmlToReturn = "";
  splitUsers.forEach(function(user) {
    htmlToReturn += "<li class=" + user + ">" + user + "</li>";
  });
  return Ember.String.htmlSafe(htmlToReturn);
}

export default Ember.Helper.helper(listPrint);
