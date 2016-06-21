import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        name: this.get('name'),
        username: this.get('username'),
        password: this.get('password'),
        avatar: this.get('avatar'),
        game: "Game 1",
        target: "",
        kill: 0
      }; this.sendAction('save', params);
    }
  }
});
