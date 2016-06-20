import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    displayUser() {
      var userList = this.model.get('user');
      var splitUsers = userList.split(",");
      for (var i=0; i < splitUsers.length; ++i) {
        console.log(splitUsers.pop());
        return splitUsers.pop();
      }
    }
  }
});
