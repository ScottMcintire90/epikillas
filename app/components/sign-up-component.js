import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createUser() {
      var params = {
        email: this.get('email'),
        password: this.get('password')
      };
      this.sendAction('createUser', params);
    }
  }
});
