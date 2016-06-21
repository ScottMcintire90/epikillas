import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      users: this.store.findAll('user'),
      games: this.store.findAll('game')
    });
  },
  actions: {
    saveGame(params, users){
      var newGame = this.store.createRecord('game', params, users);
      newGame.save();

      // users.split(",").forEach(function(theName) {
      //   var userParams = {name: theName, username: "", password: ""};
      //   newGame.users.addObject(userParams); // pseudocode
      // });

      this.transitionTo('index');
    }
  }
});
