import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      users: this.store.findAll('user'),
      games: this.store.findAll('game')
    });
  },
  actions: {
    saveGame(params){
      var newGame = this.store.createRecord('game', params);
      newGame.save();
      this.transitionTo('index');
    }
  }
});
