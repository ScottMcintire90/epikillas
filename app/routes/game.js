import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('game', params.game_id);
  },

  actions: {

    saveUser(params) {
      var newUser = this.store.createRecord('user', params);
      var game = params.game;
      game.get('users').addObject(newUser);
      newUser.save().then(function(){
        return game.save();
      });
      this.transitionTo('game', params.game);
    }

  }
});
