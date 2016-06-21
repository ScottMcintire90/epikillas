import Ember from 'ember';

export default Ember.Component.extend({
  formIsShowing: false,
  actions: {
    showForm(){
      this.set('formIsShowing', true);
    },

    saveUser(model) {
      var params = {
        name: this.get('name'),
        username: this.get('username'),
        password: this.get('password'),
        avatar: this.get('avatar'),
        game: this.get('game'),
        target: "",
        kill: 0,
      };

      this.sendAction('saveUser', params);
      this.set('formIsShowing', false);
      this.set("name", "");
      this.set("username", "");
      this.set("password", "");
      this.set("avatar", "");
    }
  }
});
